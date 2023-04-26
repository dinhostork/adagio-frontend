import { MutableRefObject } from "react";

export interface MenuItemProps extends React.HTMLAttributes<HTMLAnchorElement>{
    children: React.ReactNode;
    href: string;
    ref?: MutableRefObject<HTMLAnchorElement | null>
}