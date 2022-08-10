import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FAVOURITE,
  FAVOURITE_FILTER,
} from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    // console.log("getPosts", data);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const favouritePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.favouritePost(id);

    // console.log("favouritePost", data);
    dispatch({ type: FAVOURITE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const filterPost = () => async (dispatch) => {
  try {
    dispatch({ type: FAVOURITE_FILTER, payload: "" });
  } catch (error) {
    console.log(error.message);
  }
};

