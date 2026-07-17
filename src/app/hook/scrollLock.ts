import { useLayoutEffect } from "react";

export default function useLockBodyScroll(isOpen: boolean) {
    useLayoutEffect(() => {
        if (typeof window === "undefined") return;

        const lock = () => {
            document.body.style.setProperty('overflow', 'hidden', 'important');
        };

        const unlock = () => {
            document.body.style.removeProperty('overflow');
        };

        if (isOpen) {
            // We use requestAnimationFrame to ensure this happens 
            // AFTER the browser paints the modal/drawer
            requestAnimationFrame(() => {
                lock();
            });
        } else {
            unlock();
        }

        return () => {
            unlock();
        };
    }, [isOpen]);
}