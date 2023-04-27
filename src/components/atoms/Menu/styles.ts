import tw from "tailwind-styled-components";

export const StyledMenu = tw.div<StyledMenuProps>`
  flex
  flex-col
  bg-carbone-tertiary
  text-gray
  min-h-full
  h-64
  p-4
  rounded-md
  ${props => props.width ? props.width : 'w-48'}
`;
