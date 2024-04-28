import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

function Logo({ children }: Props) {
  return (
    <Link to={"/"}>
      <h1 className="font-pop-regular text-6xl flex justify-center items-center">
        {children}
      </h1>
    </Link>
  );
}

export default Logo;
