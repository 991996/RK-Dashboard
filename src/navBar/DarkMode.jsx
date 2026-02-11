import NavIcon from "./NavIcon";
import { IoMoon } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function DarkMode() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div onClick={toggleTheme}>
      <NavIcon icon={IoMoon} />
    </div>
  );
}
