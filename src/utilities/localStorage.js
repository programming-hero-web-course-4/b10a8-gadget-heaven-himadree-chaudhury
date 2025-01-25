// *Handle Cart Local Storage

const getCartList = () => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    const storedCartList = JSON.parse(storedCart);
    return storedCartList;
  } else {
    return [];
  }
};

const addToStoredCart = (id) => {
  const storedList = getCartList();
  if (storedList.includes(id)) {
    return;
  } else {
    storedList.push(id);
    const storedCartData = JSON.stringify(storedList);
    localStorage.setItem("cart", storedCartData);
  }
};

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

// *Handle Wishlist Local Storage

const getWishList = () => {
  const storedWish = localStorage.getItem("wishlist");
  if (storedWish) {
    const storedWishList = JSON.parse(storedWish);
    return storedWishList;
  } else {
    return [];
  }
};

const addToWishedCart = (id) => {
  const storedWish = getWishList();
  if (storedWish.includes(id)) {
    return;
  } else {
    storedWish.push(id);
    const storedWishData = JSON.stringify(storedWish);
    localStorage.setItem("wishlist", storedWishData);
  }
};

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

export {
  addToStoredCart,
  addToWishedCart,
  getCartList,
  removeFromStoredCart,
  getWishList,
  removeFromStoredWishlist,
};
