import React from "react";

import PopularPosts from "../layout/PopularPosts";
import RecentPosts from "../layout/RecentPosts";
import UserPosts from "../layout/UserPosts";

import "../../styles/Submit.css";
import PostForm from "../layout/PostForm";

const Submit = () => {
  return (
    <div className="post-page-container">
      <PostForm />
      <div className="activity-sidebar">
        <PopularPosts />
        <RecentPosts />
        <UserPosts />
      </div>
    </div>
  );
};

export default Submit;
