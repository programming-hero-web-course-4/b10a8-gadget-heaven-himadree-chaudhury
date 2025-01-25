import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 text-center">
      <div className="space-y-5">
        <h1 className="font-bold text-4xl">Gadget Heaven</h1>
        <p className="text-slate-700">
          Leading the way in cutting-edge technology and innovation.
        </p>
        <div className="text-slate-300">
          <hr />
        </div>
      </div>
      <div className="grid md:grid-cols-3 my-8 text-slate-700">
        <div className="grid text-left md:text-center">
          <h1 className="font-bold py-4 text-black text-xl">Services</h1>
          <Link to="/support">Product Support</Link>
          <Link to="/tracking">Order Tracking</Link>
          <Link to="/delivery">Shipping & Delivery</Link>
          <Link to="/return">Returns</Link>
        </div>
        <div className="grid text-left md:text-center">
          <h1 className="font-bold py-4 text-black text-xl">Company</h1>
          <Link to="/about">About Us</Link>
          <Link to="/career">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="grid text-left md:text-center">
          <h1 className="font-bold py-4 text-black text-xl">Legal</h1>
          <Link to="/terms">Terms of Services</Link>
          <Link to="/policy">Privacy Policy</Link>
          <Link to="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
