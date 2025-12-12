/**
 * Smooth scroll utility for anchor links and hash navigation
 */

export function smoothScrollTo(element: string | HTMLElement, offset: number = 80) {
  const target = typeof element === 'string' 
    ? document.querySelector(element) 
    : element;

  if (!target) return;

  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

export function handleHashClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href');
  if (!href || !href.startsWith('#')) return;

  const hash = href.substring(1);
  const target = document.getElementById(hash);
  
  if (target) {
    e.preventDefault();
    smoothScrollTo(target, 80);
  }
}

/**
 * Initialize smooth scroll for all anchor links on the page
 */
export function initSmoothScroll() {
  if (typeof window === 'undefined') return;

  // Handle hash links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const hash = href.substring(1);
      const target = document.getElementById(hash);
      
      if (target) {
        e.preventDefault();
        smoothScrollTo(target, 80);
        
        // Update URL without triggering scroll
        window.history.pushState(null, '', href);
      }
    });
  });
}

