export const addItemToWishlist = (wishlistItems, cartItemToAdd) => {
  console.log({ wishlistItems }, { cartItemToAdd });
  // const exitingCartItem = cartItems.find((cartItem) => cartItem._id === cartItemToAdd._id);
  const exitingCartItem = wishlistItems.some((wishlistItem) => wishlistItem._id === cartItemToAdd._id && wishlistItem.selectSize === cartItemToAdd.selectSize);

  if (exitingCartItem) {
    return wishlistItems.map((wishlistItem) =>
      wishlistItem._id === cartItemToAdd._id && wishlistItem.selectSize === cartItemToAdd.selectSize
        ? { ...wishlistItem, quantity: wishlistItem.quantity + 1 }
        : wishlistItem
    );
  }

  return [...wishlistItems, { ...cartItemToAdd, quantity: 1 }];
};
