export const addItemToCart = (cart, data) => {
  console.log(cart, data);
  return [...cart, { ...data, quantity: 1 }];
  // const exitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  // if(exitingCartItem) {
  // 	return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem);
  // }

  // return [...cartItems, {...cartItemToAdd, quantity: 1}];
};

export const removeItemToCart = (cart, id) => {
  return cart;
};

export const clearAllItemToCart = () => {};
