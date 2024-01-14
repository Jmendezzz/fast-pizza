import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-500 px-4 sm:px-6 py-3 uppercase border-b border-stone-200 font-pizza">
      <Link className="uppercase tracking-[5px]" to="/">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username/>
    </header>
  );
}

export default Header;
