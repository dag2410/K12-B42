import { useState } from "react";

function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggleOpen = () => {
    setIsOpen((e) => !e);
  };

  return [isOpen, toggleOpen];
}

export default useToggle;
