import { toast, Zoom } from "react-toastify";

// *Handle Cart Local Storage

// *Get Stored Cart Data
const getCartList = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    const storedCartList = JSON.parse(storedCart);
    return storedCartList;
  } else {
    return [];
  }
};

// *Add Product to Cart
const addToStoredCart = (id) => {
  const storedList = getCartList();
  if (storedList.includes(id)) {
    // *Already Added Product Toast
    toast.error("Product Already Added Once", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
    return;
  } else {
    storedList.push(id);
    const storedCartData = JSON.stringify(storedList);
    localStorage.setItem("cart", storedCartData);

    // *Product Added To Cart Toast
    toast.success("🛒 Product Added To Cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  }
};

// *Remove Product From Cart
const removeFromStoredCart = (id) => {
  const storedList = getCartList();
  if (storedList.includes(id)) {
    const storedCartData = JSON.stringify(
      storedList.filter((item) => item !== id)
    );
    localStorage.setItem("cart", storedCartData);
  } else {
    return;
  }
};

const removeAllCartProducts = () => {
  localStorage.removeItem("cart");
};

// *Handle Wishlist Local Storage

// *Get Stored Wishlist Data
const getWishList = () => {
  const storedWish = localStorage.getItem("wishlist");
  if (storedWish) {
    const storedWishList = JSON.parse(storedWish);
    return storedWishList;
  } else {
    return [];
  }
};

// *Add Product to Wishlist
const addToWishedCart = (id) => {
  const storedWish = getWishList();
  if (storedWish.includes(id)) {
    return;
  } else {
    storedWish.push(id);
    const storedWishData = JSON.stringify(storedWish);
    localStorage.setItem("wishlist", storedWishData);

    // *Product Added To Wishlist Toast
    toast.success("📃 Product Added To Wishlist", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  }
};

// *Remove Product From Wishlist
const removeFromStoredWishlist = (id) => {
  const storedWish = getWishList();
  if (storedWish.includes(id)) {
    const storedWishData = JSON.stringify(
      storedWish.filter((item) => item !== id)
    );
    localStorage.setItem("wishlist", storedWishData);
  } else {
    return;
  }
};

// *HAndle Profile Local Storage

// * Get Stored Profile Data
const getStoredEmail = () => {
  const storedEmail = localStorage.getItem("email");
  if (storedEmail) {
    return JSON.parse(storedEmail);
  }
  return "";
};
const getStoredUserName = () => {
  const storedUserName = localStorage.getItem("username");
  if (storedUserName) {
    return JSON.parse(storedUserName);
  }
  return "";
};

// *Stored Validation : Check If The Visitor Already Signed-up
const addEmailToLocalStorage = (input) => {
  let email = getStoredEmail();
  if (email === "" && input !== "") {
    email = input;
    saveEmailToLocalStorage(email);
  }
  if (input === "") {
    saveEmailToLocalStorage("");
  }
};

const addUserNameToLocalStorage = (input) => {
  let userName = getStoredUserName();
  if (userName === "" && input !== "") {
    userName = input;
    saveUserNameToLocalStorage(userName);
  }
  if (input === "") {
    saveUserNameToLocalStorage("");
  }
};

// *Add Profile To Local Storage If The User Didn't Sign-up
const saveEmailToLocalStorage = (email) => {
  const emailStringify = JSON.stringify(email);
  localStorage.setItem("email", emailStringify);
};

const saveUserNameToLocalStorage = (username) => {
  const usernameStringify = JSON.stringify(username);
  localStorage.setItem("username", usernameStringify);
};

export {
  addToStoredCart,
  addToWishedCart,
  getCartList,
  removeFromStoredCart,
  removeAllCartProducts,
  getWishList,
  removeFromStoredWishlist,
  getStoredEmail,
  addEmailToLocalStorage,
  getStoredUserName,
  addUserNameToLocalStorage,
};
