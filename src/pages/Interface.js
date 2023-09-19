import ThemeToggler from "../components/themes/ThemeToggler";
import Header from "../components/Header";
import Socials from "../components/Socials";
import { useLocation } from "react-router-dom";

export default function Interface({ children }) {
  const location = useLocation();
  const hideHeader = location.pathname.startsWith("/Projects/");
  return (
    <>
      {!hideHeader && <Header />}
      <ThemeToggler />
      <Socials />
      {children}
    </>
  );
}
