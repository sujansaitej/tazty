"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import Image from "next/image";

import React, { useRef, useState, useMemo } from "react";


interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface NavItemsProps {
    items: {
        name: string;
        link: string;
    }[];
    className?: string;
    onItemClick?: () => void;
    visible?: boolean;
}

interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
            className={cn("sticky inset-x-0 top-20 z-40 w-full", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        { visible },
                    )
                    : child,
            )}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(255, 255, 255, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "60%" : "100%",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: "min(800px, 100%)",
                WebkitBackdropFilter: visible ? "blur(10px)" : "none", // Edge/WebKit prefix
            } as React.CSSProperties}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
                visible && "bg-white text-gray-900 shadow-lg",
                className,
            )}
        >
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) {
                    return child;
                }
                
                // Only pass visible prop to components that accept it
                // Check if it's a custom component (not a native HTML element)
                const isCustomComponent = typeof child.type === 'function' || typeof child.type === 'object';
                
                if (isCustomComponent) {
                    return React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        { visible },
                    );
                }
                
                // For native HTML elements (div, span, etc.), don't pass visible prop
                return child;
            })}
        </motion.div>
    );
};

const NavItemsComponent = ({ items, className, onItemClick, visible }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    // Get current pathname for active link detection
    const currentPath = typeof window !== "undefined" ? window.location.hash || window.location.pathname : "";

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            role="navigation"
            aria-label="Main navigation"
            className={cn(
                "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
                visible ? "text-gray-900 hover:text-gray-700" : "text-white hover:text-gray-200",
                className,
            )}
        >
            {items.map((item, idx) => {
                // Handle active state: check if link matches current path or if it's home link and we're on root
                const isHomeLink = item.link === "/";
                const isHashLink = item.link.startsWith("#");
                const currentPathname = typeof window !== "undefined" ? window.location.pathname : "";
                const currentHash = typeof window !== "undefined" ? window.location.hash : "";
                
                const isActive = isHomeLink 
                    ? currentPathname === "/" && !currentHash
                    : isHashLink
                    ? currentHash === item.link || (currentPathname === "/" && currentHash === item.link)
                    : currentPathname === item.link;
                
                return (
                    <a
                        onMouseEnter={() => setHovered(idx)}
                        onClick={(e) => {
                            // If it's a hash link and we're not on home page, navigate to home first
                            if (isHashLink && currentPathname !== "/") {
                                e.preventDefault();
                                window.location.href = `/${item.link}`;
                            }
                            onItemClick?.();
                        }}
                        className={cn(
                            "relative px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full",
                            visible ? "text-gray-900 focus:ring-gray-900" : "text-white focus:ring-white"
                        )}
                        key={`link-${idx}`}
                        href={item.link}
                        aria-label={`Navigate to ${item.name}`}
                        aria-current={isActive ? "page" : undefined}
                    >
                        {hovered === idx && (
                            <motion.div
                                layoutId="hovered"
                                className={cn(
                                    "absolute inset-0 h-full w-full rounded-full",
                                    visible ? "bg-gray-900/10" : "bg-white/10"
                                )}
                            />
                        )}
                        <span className="relative z-20">{item.name}</span>
                    </a>
                );
            })}
        </motion.div>
    );
};

NavItemsComponent.displayName = "NavItems";

export const NavItems = React.memo(NavItemsComponent);

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 1), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "90%" : "100%",
                paddingRight: visible ? "12px" : "0px",
                paddingLeft: visible ? "12px" : "0px",
                borderRadius: visible ? "4px" : "2rem",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{
                WebkitBackdropFilter: visible ? "blur(10px)" : "none", // Edge/WebKit prefix
            } as React.CSSProperties}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
                visible && "bg-white/80 dark:bg-neutral-950/80",
                className,
            )}
        >
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) {
                    return child;
                }
                
                // Only pass visible prop to components that accept it
                const isCustomComponent = typeof child.type === 'function' || typeof child.type === 'object';
                
                if (isCustomComponent) {
                    return React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        { visible },
                    );
                }
                
                return child;
            })}
        </motion.div>
    );
};

export const MobileNavHeader = ({
    children,
    className,
    visible,
}: MobileNavHeaderProps & { visible?: boolean }) => {
    return (
        <div
            className={cn(
                "flex w-full flex-row items-center justify-between",
                className,
            )}
        >
            {React.Children.map(children, (child) => {
                if (!React.isValidElement(child)) {
                    return child;
                }
                
                // Only pass visible prop to components that accept it
                const isCustomComponent = typeof child.type === 'function' || typeof child.type === 'object';
                
                if (isCustomComponent) {
                    return React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        { visible },
                    );
                }
                
                return child;
            })}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onClose,
}: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id="mobile-nav-menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    role="menu"
                    aria-label="Mobile navigation menu"
                    className={cn(
                        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
                        className,
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            className="text-black dark:text-white p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white rounded-md transition-colors"
        >
            {isOpen ? (
                <IconX className="w-6 h-6" aria-hidden="true" />
            ) : (
                <IconMenu2 className="w-6 h-6" aria-hidden="true" />
            )}
        </button>
    );
};

export const NavbarLogo = ({ visible }: { visible?: boolean }) => {
    const logoSrc = useMemo(() => (visible ? "/logo.png" : "/logo-1.png"), [visible]);

    return (
        <a
            href="/"
            aria-label="Tazty Home"
            className={cn(
                "relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md",
                visible ? "text-gray-900 focus:ring-gray-900" : "text-white focus:ring-white"
            )}
        >
            <Image 
                src={logoSrc}
                alt="Tazty Logo" 
                width={40}
                height={16}
                className="rounded-full object-cover"
                priority
            />
        </a>
    );
};

export const NavbarButton = ({
    href,
    as: Tag = "a",
    children,
    className,
    variant = "primary",
    ...props
}: {
    href?: string;
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
        | React.ComponentPropsWithoutRef<"a">
        | React.ComponentPropsWithoutRef<"button">
    )) => {
    const baseStyles =
        "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

    const variantStyles = {
        primary:
            "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
        secondary: "bg-transparent shadow-none dark:text-white",
        dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
        gradient:
            "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
    };

    return (
        <Tag
            href={href || undefined}
            className={cn(baseStyles, variantStyles[variant], className)}
            {...props}
        >
            {children}
        </Tag>
    );
};
