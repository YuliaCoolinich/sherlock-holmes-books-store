import { uiActions } from "./ui";
import { cartActions } from "./cart";

const { REACT_APP_DB_URL } = process.env;
const TIME_SHOW_NOTIFICATION = 2000;

const sendPUTRequest = async (data) => {
  const response = await fetch(`${REACT_APP_DB_URL}/cart.json`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("There is an error with request");
  }
};

const sendGETRequest = async () => {
  const response = await fetch(`${REACT_APP_DB_URL}/cart.json`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("There is an error with request");
  }
  return await response.json();
};

export const sendCart = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: "Pending",
        message: "Loading...",
        status: "pending",
      })
    );
    try {
      await sendPUTRequest(cart);
      dispatch(
        uiActions.showNotification({
          title: "Success",
          message: "The cart is successfully updated",
          status: "success",
        })
      );
      setTimeout(() => dispatch(uiActions.hideNotification()), TIME_SHOW_NOTIFICATION);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error",
          message: error.message,
          status: "error",
        })
      );
      setTimeout(() => dispatch(uiActions.hideNotification()), TIME_SHOW_NOTIFICATION);
    }
  };
};

export const getCart = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: "Pending",
        message: "Loading...",
        status: "pending",
      })
    );
    try {
      const cart = await sendGETRequest();
      dispatch(cartActions.replaceCart(cart));
      dispatch(
        uiActions.showNotification({
          title: "Success",
          message: "The book list is successfully loaded",
          status: "success",
        })
      );
      setTimeout(() => dispatch(uiActions.hideNotification()), TIME_SHOW_NOTIFICATION);
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "Error",
          message: error.message,
          status: "error",
        })
      );
      setTimeout(() => dispatch(uiActions.hideNotification()), TIME_SHOW_NOTIFICATION);
    }
  };
};
