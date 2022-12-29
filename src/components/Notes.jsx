import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";

function Note({ note }) {
  const [isImportantNote, setIsImportantNote] = useState(false);

  const getDateTime = (note) => {
    return new Date(note.updated).toLocaleDateString();
  };

  const getTitle = (note) => {
    const title = note.body.split("\n")[0];
    if (title.length > 45) {
      return title.slice(0, 45);
    }
    return title;
  };

  const getContent = (note) => {
    const title = getTitle(note);
    let content = note.body.replaceAll("\n", "");
    content = content.replaceAll(title, "");

    if (content.length > 45) {
      return content.slice(0, 45) + "...";
    } else {
      return content;
    }
  };

  const onClickSubmit = () => {
    setIsImportantNote(!isImportantNote);
  };
  return (
    <div className="notes-list-item">
      {/* <input
        type="checkbox"
        name="completed"
      /> */}

      <Link to={`/note/${note.id}`}>
        <div className="note-item">{getTitle(note)}</div>
      </Link>
      <p>
        <span>{getDateTime(note)}</span>
        {getContent(note)}
        <AiOutlineStar
          style={{
            width: "1.4rem",
            height: "1.4rem",
            position: "absolute",
            marginLeft: "6.5rem",
            cursor: "pointer",
          }}
          className={
            isImportantNote === true ? "isImportantNote" : "isNotImportantNote"
          }
          onClick={onClickSubmit}
        />
      </p>
    </div>
  );
}

export default Note;
