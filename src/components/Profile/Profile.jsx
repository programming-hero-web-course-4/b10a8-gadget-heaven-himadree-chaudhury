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
              Profile
            </h1>
            <p className="text-white text-sm md:text-lg w-9/12 mx-auto">
              Get the latest offers and discounts right in your inbox!
            </p>
          </div>
        </div>

        {/* Login Section */}
        {email === "" && (
          <div className="flex justify-center items-center flex-col gap-5 p-4">
            <h1 className="text-2xl font-bold">Sign-Up Now</h1>
            <form className="flex justify-center items-center flex-col gap-5">
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
          <div className=" gap-5 p-4">
            <h1 className="text-4xl font-bold">
              Hello <span className="text-[#9538E2] uppercase">{username}</span>, Welcome
              Back 👋
            </h1>
            <form className="my-5">
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
          </div>
        )}
      </section>
    </div>
  );
};

export default Profile;
