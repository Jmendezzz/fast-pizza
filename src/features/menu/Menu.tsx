import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData() as Array<any>; // Temp
  return <div>
    {menu.map(pizza=> <MenuItem key={pizza.id} pizza={pizza} />)}
  </div>
}


export async function loader(){
  const menu = await getMenu();
  return menu;
}

export default Menu;
