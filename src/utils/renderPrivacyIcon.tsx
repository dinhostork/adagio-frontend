import { PrivacyOption } from "@/components/organisms/PublicationInput/types";
import { IoMdGlobe, IoMdLock, IoMdPeople } from "react-icons/io";

export const renderPrivacyIcon = (privacy: PrivacyOption) => {
    switch (privacy) {
      case "public":
        return (
          <button title="Público">
            <IoMdGlobe />
          </button>
        );
      case "friends":
        return (
          <button title="Amigos">
            <IoMdPeople />
          </button>
        );
      case "only-me":
        return (
          <button title="Somente eu">
            <IoMdLock />
          </button>
        );
      default:
        return (
          <button title="Público">
            <IoMdGlobe />
          </button>
        );
    }
  };
  