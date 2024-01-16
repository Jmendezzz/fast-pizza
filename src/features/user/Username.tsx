import { useSelector } from "react-redux";

function Username() {
  const username = useSelector(store=> store.user.username);
  return <p className="hidden text-sm font-semibold sm:block">{username}</p>;
}

export default Username;
