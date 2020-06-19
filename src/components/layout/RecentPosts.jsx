import React, { useEffect, useState } from "react";
// Redux
import { connect } from "react-redux";
import { getRecentPosts } from "../../redux/actions/dataAction";

const RecentPosts = ({ data, getRecentPosts }) => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    // getRecentPosts();
    console.log("FETCH RECENT POSTS HAS BEEN COMMENTED OUT");
    setRecentPosts(data);
  }, []);

  return (
    <div className="recents-container">
      <div className="recents-title">
        <h1 className="recents-title-txt">Recent Posts</h1>
      </div>
      <div className="recents-content">
        {recentPosts.length > 0 ? (
          <p>POSTS ARE AVAILABLE</p>
        ) : (
          "No recent posts available"
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps, { getRecentPosts })(RecentPosts);
