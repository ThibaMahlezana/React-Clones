import { FaTwitter } from "react-icons/fa";
import { FaHomeCircle } from "react-icons/fa";

function MenuBar() {
  return (
    <div className="menu-bar">
      <FaTwitter />
      <ul>
        <li>
          <FaHomeCircle /> Home
        </li>
        <li>Explore</li>
        <li>Notifications</li>
        <li>Messages</li>
        <li>Bookmarks</li>
        <li>Lists</li>
        <li>Profile</li>
        <li>More</li>
      </ul>
    </div>
  );
}

export default MenuBar;
