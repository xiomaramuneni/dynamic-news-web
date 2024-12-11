import { NavLink } from "react-router-dom"
import "../../Styles/Layout.scss"
const Header = () => {
    const CustomLink = ({to, children})=> {
        return (
            <ul>
                <NavLink to={to} className={({isActive})=>{return isActive ? "text-decoration-underline": ""}} end>{children}</NavLink>
            </ul>
        )
    }
  return (
    <header>
        <h1><a href="/">Uz Campus News</a></h1>
        <nav>
            <ul>
                <CustomLink to={"/"} children={"Home"}/>
                <CustomLink to={"#trending"} children={"Trending"}/>
                <CustomLink to={"#education"} children={"Education"}/>
                <CustomLink to={"#sports"} children={"Sports"}/>
            </ul>
        </nav>  
    </header>
  )
}

export default Header