import About from "../About/About";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";

 const MenuRouter = [
    {
        path:"/",
        Element :<Home/>,
        title: "Home"
    },
    {
        path:"/about",
        Element :<About/>,
        title: "About"
    },  {
        path:"/erorr",
        Element :<NotFound/>,
        title: "Not Fount "
    }
 ]

export default MenuRouter;