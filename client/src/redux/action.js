import axios from "axios";
import {
  GET_ALL_POST,
  ERROR,
  PRODUCT_USER,
  GET_SEARCH,
  SET_LOADING,
  GET_CATEGORY_FILTER,
  FILTER_BY_VENTAS,
  GET_REVIEWS,
  GET_LOGIN,
  LOGOUT,
  GET_TYPE_FILTER,
} from "./constants";

export const getPost = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      const response = await axios.get(
        `https://cambialoapi-production.up.railway.app/posts`
      );
      dispatch({ type: SET_LOADING, payload: false });
      return dispatch({
        type: GET_ALL_POST,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: SET_LOADING, payload: false });
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const newPost = (data) => {
  
  return async(dispatch) => {
  try {
   const post =  await axios.post(`https://cambialoapi-production.up.railway.app/posts/`,data );
   
  } catch (error) {
    
    return dispatch({
      type: ERROR,
      payload: error,
    });
  }
}
}

export const getType = (postType) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });
      const response = await axios.get(
        `https://cambialoapi-production.up.railway.app/posts?tipo=${postType}`
      );
      dispatch({ type: SET_LOADING, payload: false });
      return dispatch({
        type: GET_TYPE_FILTER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: SET_LOADING, payload: false });
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const searchBar = (data) => {
  return async (dispatch) => {
    try {
      
      const search = await axios.get(
        `https://cambialoapi-production.up.railway.app/posts?search=${data}`
      );

      return dispatch({
        type: GET_SEARCH,
        payload: search.data,
      });
    } catch (error) {
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
export const productUser = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });

      const postUser = await axios.get(
        `https://cambialoapi-production.up.railway.app/posts?vendedor=${id}`
      );
      dispatch({ type: SET_LOADING, payload: false });
      
      return dispatch({
        type: PRODUCT_USER,
        payload: postUser.data,
      });
    } catch (error) {
      dispatch({ type: SET_LOADING, payload: false });
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
export const filterVentas = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });

      const filter = await axios.get(
        `https://cambialoapi-production.up.railway.app/posts?venta=${data}`
      );
      dispatch({ type: SET_LOADING, payload: false });

      return dispatch({
        type: FILTER_BY_VENTAS,
        payload: filter.data,
      });
    } catch (error) {
      dispatch({ type: SET_LOADING, payload: false });
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const getCategory = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });

      const response = await axios.get(
        `https://cambialoapi-production.up.railway.app/posts?categoria=${data}`
      );
      dispatch({ type: SET_LOADING, payload: false });

      
      return dispatch({
        type: GET_CATEGORY_FILTER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: SET_LOADING, payload: false });
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const getReviews = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: SET_LOADING, payload: true });

      const response = await axios.get(
        `https://cambialoapi-production.up.railway.app/reviews?usuario=${data}`
      );
      dispatch({ type: SET_LOADING, payload: false });

      
      return dispatch({
        type: GET_REVIEWS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: SET_LOADING, payload: false });
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const getLogin = (data) => {
  
  return async (dispatch) => {
    try {
      const login = await axios.post(
        "https://cambialoapi-production.up.railway.app/auth/login",
        data
      );
      return dispatch({
        type: GET_LOGIN,
        payload: login.data,
      });
    } catch (error) {
      dispatch({ type: SET_LOADING, payload: false });
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    try {
      return dispatch({
        type: LOGOUT,
        payload: "",
      });
    } catch (error) {
      dispatch({ type: SET_LOADING, payload: false });
      return dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
