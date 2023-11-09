import { Link } from "react-router-dom";
import logo from "../../../assets/slider/LOGO.png";

const Footer = () => {
    return (
        <footer >
            <div className="footer pt-16 ps-8  bg-base-200 text-base-content">
                <aside>
                <header className="footer-title">Services</header>
                    <p>INTERNATIONAL SHIPMENT
<br />Orders are shipped over countries..</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">ONLINE SUPPORT 24/7
Orders are shipped over countries.</a>

                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">MONEY RETURN
Orders are shipped over countries.</a>

                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">MEMBER DISCOUNT
Orders are shipped over countries.</a>

                </nav>
            </div>
            <div className="footer ps-32 pt-12 bg-base-200 text-base-content ">
                <nav>
                    <header className="footer-title w-1/4"><img  src={logo} alt="" /></header>
                    {/* todo logo */}
                    <p className="	text-slate-500">Solid is the information & experience <br /> directed at an end-use.</p> <hr />
                    <div className="flex">
                        <div>
                            {/* todo logo */}
                            <p className="mt-2 me-2">Logo</p>
                        </div>
                        <div>
                            <p className="	text-slate-500">Mon - Fri: 9:00-20:00</p>
                            <p className="link link-hover">0020 500 - CALL - 000</p>
                        </div>
                    </div>

                    <div className="flex">
                        <div>
                            <p className="mt-2 me-2">logo</p>
                        </div>
                        <div>
                            <p className="	text-slate-500">Get Free Support</p>
                            <Link className="link link-hover">info@suitme.com</Link>
                        </div>
                    </div>
                </nav>
                <nav>
                    <header className="footer-title">INFORMATION</header>
                    <Link className="link link-hover">About</Link>
                    <Link className="link link-hover">FAQ’s</Link>
                    <Link className="link link-hover">Wishlist</Link>
                    <Link className="link link-hover">Cart</Link>
                    <Link className="link link-hover">Checkout</Link>
                </nav>
                <nav>
                    <header className="footer-title">INFORMATION</header>
                    <Link className="link link-hover">About</Link>
                    <Link className="link link-hover">FAQ’s</Link>
                    <Link className="link link-hover">Wishlist</Link>
                    <Link className="link link-hover">Cart</Link>
                    <Link className="link link-hover">Checkout</Link>
                </nav>

                <form>
                    <header className="footer-title">GET NEWSLETTER</header>
                    <p>Get 10% off your first order! Hurry up</p>
                    <fieldset className="form-control w-80">

                        <div className="relative mt-4">
                            <input type="text" placeholder="Enter your email address" className="input  w-full pr-16" /> <br />

                            <button className="btn btn-error mt-2 ps-8 pe-8 
                            hover:bg-rose-500">Subscribe</button>
                            {/* todo logo in subscribe */}
                        </div>
                    </fieldset>
                </form>

            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright 2023 Suitme. All rights reserved. Powered by <a className="font-semibold" href="https://tigertechlimited.com">TigerTechLimited.</a></p>
                </aside>
            </div>

        </footer>
    );
};

export default Footer;