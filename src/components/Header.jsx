import Control from "../libs/components/Controls";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  newButton: {
    position: "absolute",
    width: "72px",
    height: "45px",
    right: "30px",
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className="app-header">
      <h1 className="note-text">
        My Note
        <Link to="/note/new">
          <Control.Button
            text="New"
            variant="outlined"
            title="Add Note"
            className={classes.newButton}
          />
        </Link>
      </h1>
    </div>
  );
};

export default Header;
