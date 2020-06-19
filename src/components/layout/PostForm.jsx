import React, { Fragment, useState } from "react";

import PostBody from "./PostBody";
import PostSubmitButton from "./PostSubmitButton";

import "../../styles/Submit.css";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [banned, setBanned] = useState("");

  const setNewBody = bodyJSON => {
    setBody(bodyJSON);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const postData = {
      title,
      body,
      tags,
      banned,
    };

    console.log(JSON.stringify(postData));
    // TODO: make a request to post this data in what ever type (anon, regular, scheduled)
  };

  return (
    <Fragment>
      <div className="post-form-container">
        <form onSubmit={e => handleSubmit(e)} className="post-form">
          <input
            type="text"
            className="post-title"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <PostBody updateBody={setNewBody} />
          <input
            type="text"
            className="post-tags"
            placeholder="Enter your tags seprated by space"
            value={tags.join(" ")}
            onChange={e => setTags(e.target.value.split(" "))}
          />
          <input
            type="text"
            className="post-source"
            placeholder="(optional) Link banned post or account"
            value={banned}
            onChange={e => setBanned(e.target.value)}
          />
          <PostSubmitButton />
        </form>
      </div>
    </Fragment>
  );
};

export default PostForm;
