import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector(store=> store.user.username);
  return (
    <div className="m-10 text-center ">
      <h1 className="mb-8 text-xl font-semibold text-stone-800">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {!username ?  <CreateUser /> : <Button type='primary' to='/menu'>Start Ordering</Button> } 

    </div>
  );
}

export default Home;
