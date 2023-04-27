interface StyledMenuProps extends React.HTMLAttributes<HTMLDivElement>{
    width?: string;
  }

interface MenuProps extends StyledMenuProps  {
    children: React.ReactNode;
}