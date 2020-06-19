import { SET_RECENT_POSTS, LOADING_DATA } from "../types";
import axios from "axios";

export const getRecentPosts = () => dispatch => {
  dispatch({ type: LOADING_DATA });

  axios
    .get("/api/get_recent_posts")
    .then(res => {
      console.log("API REQUEST WAS MADE");
      dispatch({ type: SET_RECENT_POSTS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SET_RECENT_POSTS, payload: [] });
    });
};
