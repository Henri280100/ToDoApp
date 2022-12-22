import {
  AiOutlineSearch,
  AiFillCheckCircle,
  AiOutlineSchedule,
  AiOutlineStar,
} from "react-icons/ai";
import { WiDaySunny } from "react-icons/wi";
import { BiTask } from "react-icons/bi";

function TopNavigation({
  onSearch,
  value,
  onDisplayComplete,
  onDisplayInComplete,
  classComplete,
  classInComplete,
}) {
  return (
    <div className="top-nav">
      <div className="topLeft">
        <div className="search-box">
          <button className="btn-search">
            <AiOutlineSearch className="search" />
          </button>
          <input
            className="input-search"
            type="text"
            placeholder="Searching note..."
            required
            onChange={(e) => {
              e.preventDefault();
              onSearch(e.target.value);
            }}
            value={value}
          />
        </div>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="nav-option">
            My Day
            <WiDaySunny className="nav-icons" />
          </li>
          <li className="nav-option">
            Important
            <AiOutlineStar className="nav-icons" />
          </li>
          <li className="nav-option">
            Planned
            <AiOutlineSchedule className="nav-icons" />
          </li>
          <li className="nav-option" onClick={onDisplayComplete}>
            Completed
            <AiFillCheckCircle className="nav-icons" />
          </li>
          <li className="nav-option">
            All
            <BiTask className="nav-icons" />
          </li>
        </ul>
      </div>
      <div className="topRight">
        <div className="select-menu">
          
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
