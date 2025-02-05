import { Helmet } from "react-helmet-async";
import banner from "../../assets/banner.jpg";
import Gadget from "../Gadgets/Gadget";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      {/* React Helmet */}
      <Helmet>
        <title>GADGET HEAVEN | Home</title>
      </Helmet>

      <header className="text-center relative">
        {/* Welcome Section */}
        <div className="p-4 bg-[#9538E2] rounded-b-2xl">
          <div className=" text-white space-y-5 pb-32 md:pb-40 lg:pb-64 xl:pb-80 pt-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-white text-sm md:text-lg w-9/12 mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            {/* Shop Now Button */}
            <a href="#gadget-section">
              <button className="text-[#9538E2] bg-white px-6 md:px-8 py-3 text-lg font-semibold rounded-2xl border border-white cursor-pointer">
                Shop Now
              </button>
            </a>
          </div>
        </div>
        {/* Banner Image */}
        <div className="absolute -bottom-36 md:-bottom-32 lg:-bottom-72 xl:-bottom-80">
          <div className="border border-slate-300 rounded-2xl bg-[#ffffff4d] w-11/12 md:w-2/4 lg:w-4/5 xl:w-3/5 mx-auto ">
            <img className="rounded-3xl p-3" src={banner} alt="" />
          </div>
        </div>
      </header>
      {/* Featured Products */}
      <section id="gadget-section" className="p-4">
        <div className="pt-44 md:pt-64 lg:pt-80">
          <h1 className="text-center font-bold text-3xl">
            Explore Cutting-Edge Gadgets
          </h1>
          <Gadget></Gadget>
        </div>
      </section>
    </div>
  );
};

export default Home;
