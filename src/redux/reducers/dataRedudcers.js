import { SET_RECENT_POSTS, LOADING_DATA } from "../types";

const initialState = {
  recentPosts: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_RECENT_POSTS:
      return {
        ...state,
        recentPosts: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
