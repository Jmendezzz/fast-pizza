import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link className="uppercase tracking-[5px]" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <p>Gerard</p>
    </header>
  );
}

export default Header;
