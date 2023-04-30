import Line from "@/components/atoms/LineDivider";
import { boxContainer, sectionWrapper, sideBarTitle } from "./styles";
export interface SidebarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className={boxContainer}>
      <h1 className={sideBarTitle}>{title}</h1>
      <Line />
      <div className={sectionWrapper}>{children}</div>
    </div>
  );
};
