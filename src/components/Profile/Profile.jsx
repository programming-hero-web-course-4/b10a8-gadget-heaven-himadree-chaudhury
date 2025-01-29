import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  addEmailToLocalStorage,
  addUserNameToLocalStorage,
  getStoredEmail,
  getStoredUserName,
} from "../../utilities/localStorage";

const Profile = () => {
  // *Input Field Value Store & Update
  const [inputText, setInputText] = useState("");
  const [inputUser, setInputUser] = useState("");

  // *Get Input Value
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const handleInputUser = (event) => [setInputUser(event.target.value)];

  // *Get Stored Email If Any
  useEffect(() => {
    const storedEmail = getStoredEmail();
    setEmail(storedEmail);
    const storedUsername = getStoredUserName();
    setUsername(storedUsername);
  }, []);

  // *Set Stored Email & Username
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div>
      {/* React Helmet */}
      <Helmet>
        <title>GADGET HEAVEN | Profile</title>
      </Helmet>

      <section className="max-w-screen-2xl p-4 mx-auto">
        {/* Profile Banner Section */}
        <div className="text-center">
          <div className="bg-[#9538E2] text-white rounded-2xl space-y-5 pb-20 pt-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              {/* Customize Heading For Users */}
              {email === ""
                ? "Welcome to Gadget Heaven"
                : "Gadget Heaven Cares"}
            </h1>
            <p className="text-white text-sm md:text-lg w-9/12 mx-auto">
              {/* Customize Message For Users */}
              {email === ""
                ? " Sign-up today & get the latest offers and discounts right in your inbox!"
                : "See below for the Latest Gadget Heaven News, Analysis, Profit Results, Share Price Information, and Commentary."}
            </p>
          </div>
        </div>

        {/* Login Section */}
        {email === "" && (
          <div className="flex justify-center items-center flex-col gap-5 px-4 py-12">
            <h1 className="text-2xl font-bold">Sign-Up Now</h1>
            {/* Sign-up Form */}
            <form className="flex justify-center items-center flex-col gap-5">
              {/* Input Fields */}
              <div className="flex justify-center items-end flex-col gap-5">
                <div className="flex justify-center items-center gap-5 font-semibold text-xl">
                  <h1>Username: </h1>
                  <input
                    required
                    type="text"
                    value={inputUser}
                    onChange={handleInputUser}
                    placeholder="Enter Your Username"
                    className="px-8 py-2 text-base font-medium rounded-lg border border-slate-200 bg-transparent"
                  />
                </div>
                <div className="flex justify-center items-center gap-5 font-semibold text-xl">
                  <h1>Email: </h1>
                  <input
                    required
                    type="email"
                    placeholder="Enter Your Email"
                    value={inputText}
                    onChange={handleInputChange}
                    className="px-8 py-2 text-base font-medium rounded-lg border border-slate-200 bg-transparent"
                  />
                </div>
              </div>
              {/* Sign-up Button */}
              <button
                type="submit"
                onClick={() => (
                  addEmailToLocalStorage(inputText),
                  addUserNameToLocalStorage(inputUser)
                )}
                className="bg-[#9538E2] text-white font-semibold px-4 py-2 rounded-xl hover:bg-white hover:text-black border border-[#9538E2] duration-200 transition-all cursor-pointer"
              >
                Sign-Up
              </button>
            </form>
          </div>
        )}

        {/* Already Signed-Up User Interface */}
        {email !== "" && (
          <div className=" gap-5 px-4 py-12">
            <h1 className="text-4xl font-bold">
              Hello <span className="text-[#9538E2] uppercase">{username}</span>
              , Welcome 👋
            </h1>
            <form className="my-5">
              {/* Sign-out Button */}
              <button
                type="submit"
                onClick={() => (
                  addEmailToLocalStorage(""), addUserNameToLocalStorage("")
                )}
                className="bg-[#9538E2] text-white font-semibold px-4 py-2 rounded-xl hover:bg-white hover:text-black border border-[#9538E2] duration-200 transition-all cursor-pointer"
              >
                Sign-Out
              </button>
            </form>
            {/* News Section */}
            <div>
              <h1 className="text-xl font-bold py-2">Recent Stories : </h1>
              <div className="grid gap-5">
                <div className="border border-slate-200 p-5 rounded-2xl">
                  <h1 className="font-semibold text-lg">Layoffs</h1>
                  <p className="leading-tight">
                    Gadget Heaven announced plans to lay off employees to cut
                    costs. The company said the layoffs were due to the current
                    market reality
                  </p>
                </div>
                <div className="border border-slate-200 p-5 rounded-2xl">
                  <h1 className="font-semibold text-lg">11.11 sale</h1>
                  <p className="leading-tight">
                    Gadget Heaven 11.11 sale was the biggest sale of the year,
                    with millions of shoppers taking advantage of free delivery,
                    vouchers, and flash sales.
                  </p>
                </div>
                <div className="border border-slate-200 p-5 rounded-2xl">
                  <h1 className="font-semibold text-lg">PR partnership</h1>
                  <p className="leading-tight">
                    Gadget Heaven partnered with Backplate PR to improve its
                    communication strategies and increase brand visibility.
                  </p>
                </div>
                <div className="border border-slate-200 p-5 rounded-2xl">
                  <h1 className="font-semibold text-lg">Investment plans</h1>
                  <p className="leading-tight">
                    Gadget Heaven plans to invest Tk 1,000 crore in Bangladesh
                    over the next 3-4 years to build infrastructure and
                    ecosystem.
                  </p>
                </div>
                <div className="border border-slate-200 p-5 rounded-2xl">
                  <h1 className="font-semibold text-lg">
                    Product category expansion
                  </h1>
                  <p className="leading-tight">
                    Gadget Heaven CEO Himadree Chaudhury said the company will
                    expand product categories to improve the consumer
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Profile;
