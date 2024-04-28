import { Link, Logo, ThemeButton } from "@/components/Atoms";
import { useLocation } from "react-router-dom";

function MainHeader() {
  const { pathname } = useLocation();

  return (
    <header className="flex gap-10 justify-between min-w-[900px] max-w-[1200px] mx-auto mt-12">
      <Logo>Yeol-UI</Logo>
      <section className="flex justify-center gap-5 items-center">
        <ul className="flex items-center justify-center gap-5">
          <li>
            <Link
              to={"/atoms"}
              className={`${pathname === "/atoms" && "text-inputFocusColor font-pop-bold"}`}
            >
              Atoms
            </Link>
          </li>
          <li>
            <Link
              to={"/toast"}
              className={`${pathname === "/toast" && "text-inputFocusColor font-pop-bold"}`}
            >
              Toast
            </Link>
          </li>
        </ul>
        <div>
          <ThemeButton />
        </div>
      </section>
    </header>
  );
}

export default MainHeader;
