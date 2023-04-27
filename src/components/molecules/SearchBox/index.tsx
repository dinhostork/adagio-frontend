import { Input } from "@/components/atoms/Input";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export const SearchBox: React.FC = ({}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //TODO - Implement search logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        icon={<IoSearchOutline />}
        placeholder="Busque pelo que quiser"
        type="text"
        id="search-box"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
};
