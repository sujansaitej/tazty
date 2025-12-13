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

// Store the handler so we can remove it later
let globalClickHandler: ((e: Event) => void) | null = null;

/**
 * Initialize smooth scroll for all anchor links on the page
 * Excludes links with data-no-smooth-scroll attribute (e.g., navbar links)
 */
export function initSmoothScroll() {
  if (typeof window === 'undefined') return;

  // Remove existing handler if it exists to prevent duplicates
  if (globalClickHandler) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.removeEventListener('click', globalClickHandler!);
    });
    globalClickHandler = null;
  }

  // Create new handler
  globalClickHandler = (e: Event) => {
    // Find the closest anchor element (in case click is on a child element)
    const targetElement = e.target as HTMLElement;
    const anchor = targetElement.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    
    // Skip if already handled by component (navbar links have data-no-smooth-scroll)
    if (anchor.hasAttribute('data-no-smooth-scroll')) {
      return;
    }
    
    if (!href || href === '#' || !href.startsWith('#')) return;

    const hash = href.substring(1);
    const target = document.getElementById(hash);
    
    if (target) {
      e.preventDefault();
      smoothScrollTo(target, 80);
      
      // Update URL without triggering scroll
      window.history.pushState(null, '', href);
    }
  };

  // Attach handler to all hash links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Only attach to links that don't handle their own clicks
    if (!anchor.hasAttribute('data-no-smooth-scroll')) {
      anchor.addEventListener('click', globalClickHandler);
    }
  });
}

