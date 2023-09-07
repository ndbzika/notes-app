import { useState } from "react";

export const useNav = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleChangeLogged = () => {
    setIsLogged(!isLogged);
  };

  return {
    isLogged,
    handleChangeLogged,
  };
};
