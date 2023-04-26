import AvatarImg from "@/components/atoms/Avatar";
import { useComponentsMenu } from "@/utils/componentsToggleMenu";


export const Avatar: React.FC = () => {
  const { isOpen, toggle, menuRef } = useComponentsMenu();

  const handleAvatarClick = () => {
    toggle(!isOpen);
  };

  return (
    <div className="flex items-center justify-center">
      <AvatarImg
        src="https://avatars.githubusercontent.com/u/5059050?v=4"
        onClick={handleAvatarClick}
      />

      {isOpen && <div ref={menuRef}>
        
      </div>}
    </div>
  );
};
