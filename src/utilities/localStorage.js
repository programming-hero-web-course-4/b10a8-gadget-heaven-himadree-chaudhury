// *Handle Cart Local Storage

const getCartList = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        const storedCartList = JSON.parse(storedCart)
        return storedCartList
    }
    else {
        return[]
    }
}

const addToStoredCart = id => {
    const storedList = getCartList();
    if(storedList.includes(id)){
        return;
    }
    else {
        storedList.push(id)
        const storedCartData = JSON.stringify(storedList)
        localStorage.setItem('cart',storedCartData)
    }
}

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
  const storedList = getWishList();
  if (storedList.includes(id)) {
    return;
  } else {
    storedList.push(id);
    const storedWishData = JSON.stringify(storedList);
    localStorage.setItem("wishlist", storedWishData);
  }
};


export {addToStoredCart,addToWishedCart,getCartList,getWishList}