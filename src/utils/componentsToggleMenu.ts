import { useState, useEffect, useRef, useCallback } from "react";

export const useComponentsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback((value?: boolean) => {
    setIsOpen((prevIsOpen) => {
      if (value != null) {
        return value;
      }
      return !prevIsOpen;
    });
  }, []);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, toggle]);

  return {
    isOpen,
    toggle,
    menuRef,
  };
};
