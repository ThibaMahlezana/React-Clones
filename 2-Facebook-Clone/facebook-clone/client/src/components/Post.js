import { Avatar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import NearMeIcon from "@material-ui/icons/NearMe";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { ExpandMoreRounded } from "@material-ui/icons";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="top">
        <Avatar src={profilePic} className="avatar" />
        <div className="info">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="bottom">
        <p>{message}</p>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="options">
        <div className="option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="option">
          <AccountCircleIcon />
          <ExpandMoreRounded />
        </div>
      </div>
    </div>
  );
}

export default Post;
