export const addItemToCart = (cartItems, cartItemToAdd) => {
  console.log({ cartItems }, { cartItemToAdd });
  const exitingCartItem = cartItems.find((cartItem) => cartItem._id === cartItemToAdd._id);
  // const exitingCartItem = cartItems.find((cartItem) => cartItem._id === cartItemToAdd._id && cartItem.selectSize === cartItemToAdd.selectSize);

  if (exitingCartItem) {
    return cartItems.map((cartItem) => (cartItem._id === cartItemToAdd._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemToCart = (cart, id) => {
  return cart;
};

export const clearAllItemToCart = () => {};

export const updateCartItemQuantity = (cartItems, productId, quantity) => {
  console.log(cartItems, productId, quantity);
  return cartItems;
};
