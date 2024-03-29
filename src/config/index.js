export const server = "https://react-shops-app.herokuapp.com/api/v1";
// export const server = "http://localhost:8000/api/v1";
export const signUpUrl = server + "/users/signup";
export const signInUrl = server + "/users/login";
export const productsUrl = (type, category) => server + "/products/" + type + "/" + category;
export const productDetailsUrl = (productId) => server + "/products/" + productId;
export const cartUrl = server + "/cart";
export const deleteCartItemUrl = (productId, size) => `${server}/cart/${productId}/${size}`;
