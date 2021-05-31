import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function createPostBox() {
  return (
    <div className="createPost">
      <div className="top">
        <Avatar />
        <form>
          <input className="message-input" placeholder="Whats on your mind?" />
          <input />
          <button type="submit"> hidden submit</button>
        </form>
      </div>
      <div className="bottom">
        <div className="option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default createPostBox;
