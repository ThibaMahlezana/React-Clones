import { FaTwitter } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { FiBookmark } from "react-icons/fi";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";

function MenuBar() {
  return (
    <div className="menu-bar col-4">
      <FaTwitter />
      <ul>
        <li>
          <BiHomeCircle /> Home
        </li>
        <li>
          <BiHash /> Explore
        </li>
        <li>
          <FiBell /> Notifications
        </li>
        <li>
          <BiEnvelope /> Messages
        </li>
        <li>
          <FiBookmark /> Bookmarks
        </li>
        <li>
          <RiFileList2Line /> Lists
        </li>
        <li>
          <HiOutlineUser /> Profile
        </li>
        <li>
          <CgMoreO /> More
        </li>
      </ul>
      <button className="btn">Tweet</button>
    </div>
  );
}

export default MenuBar;
