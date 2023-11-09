import { Link } from "react-router-dom";
import logo from "../../../assets/slider/LOGO.png";

const NavBar = () => {
    const navOptions = <>
        <li><a>Home</a></li>
        <li><a>Shop</a> </li>
        <li ><a>Category</a>
            <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
            </ul>
        </li>
        <li><a>About</a></li>
        <li><a>Contact</a></li>

    </>
    return (
        <>
            <div className="navbar fixed z-10  bg-opacity-80 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Shop</a></li>
                            <li>
                                <a>Category</a>
                                <ul className="p-2">
                                    <li><a>Men</a>
                                        <ul className="p-2">
                                            <li><a>Shirt</a></li>
                                            <li><a>T-Shirt</a></li>
                                            <li><a>Hoodie</a></li>
                                            <li><a>Track Suit</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Women</a></li>
                                    <li><a>Kids</a></li>

                                </ul>
                            </li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl w-1/2 "><img className=" w-1/2" src={logo}alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">


                        <li><a>Home</a></li>
                        <li><a>Shop</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary >Category</summary>
                                <ul className="p-2">
                                    <li><a>Men</a>
                                        <ul className="p-2">
                                            <li><a>Shirt</a></li>
                                            <li><a>T-Shirt</a></li>
                                            <li><a>Hoodie</a></li>
                                            <li><a>Track Suit</a></li>
                                        </ul>
                                    </li>
                                    <li><a>Women</a></li>
                                    <li><a>Kids</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;