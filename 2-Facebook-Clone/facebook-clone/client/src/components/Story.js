import { Avatar } from "@material-ui/core";

function Story({ image, profileSrc, title }) {
  return (
    <div className="storyBox">
      <div style={{ backgroundImage: `url(${image})` }} className="story">
        <Avatar className="avatar" src={profileSrc} />
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default Story;
