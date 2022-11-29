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
    <div className="topnav">
      <button className="nav-option">
        My Day
        <WiDaySunny className="nav-icons" />
      </button>
      <button className="nav-option">
        Important
        <AiOutlineStar className="nav-icons" />
      </button>
      <button className="nav-option">
        Planned
        <AiOutlineSchedule className="nav-icons" />
      </button>
      {/* <button className="nav-option">
        Completed
        <AiFillCheckCircle className="nav-icons" />
      </button> */}
      <select name="" id="" className="nav-option">
        <option value="" className={classComplete} onClick={onDisplayComplete}>
          Complete
        </option>
        <option value="" className={classInComplete} onClick={onDisplayInComplete}>
          Incomplete
        </option>
      </select>
      <button className="nav-option">
        Tasks
        <BiTask className="nav-icons" />
      </button>
      <form className="search-box">
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
      </form>
    </div>
  );
}

export default TopNavigation;
