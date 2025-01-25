import banner from "../../assets/banner.jpg";
import Products from "../Products/Products";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <header className="text-center">
        {/* Hero Section */}
        <div className="p-4">
          <div className="bg-[#9538E2] text-white rounded-2xl space-y-5 pb-32 md:pb-40 lg:pb-80 pt-12 relative ">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-white text-sm md:text-lg w-9/12 mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="text-[#9538E2] bg-white px-6 md:px-8 py-3 text-lg font-semibold rounded-2xl">
              Shop Now
            </button>
          </div>
        </div>
        {/* Banner */}
        <div className="absolute bottom-44 md:-bottom-64 lg:bottom-52 xl:bottom-2">
          <div className="border border-slate-300 rounded-2xl bg-[#ffffff4d] w-11/12 md:w-2/4 lg:w-4/5 xl:w-3/5 mx-auto ">
            <img className="rounded-3xl p-3" src={banner} alt="" />
          </div>
        </div>
      </header>

      {/* Featured Products */}
      <section className="p-4">
        <div className="pt-44 md:pt-64 lg:pt-80">
          <h1 className="text-center font-bold text-3xl">Explore Cutting-Edge Gadgets</h1>
          <div>
            <div>
              <SideBar></SideBar>
            </div>
            <div>
              <Products></Products>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
