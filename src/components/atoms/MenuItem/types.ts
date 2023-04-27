import { MutableRefObject } from "react";

export interface MenuItemProps extends React.HTMLAttributes<HTMLAnchorElement>{
    children: React.ReactNode;
    menuRef?: MutableRefObject<HTMLAnchorElement | HTMLDivElement | null> 
    toggle?: (value?: boolean) => void;
}