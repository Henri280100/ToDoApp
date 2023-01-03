import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RiDeleteBin6Line, RiAddCircleLine } from "react-icons/ri";
import { BaseUrl } from "../services/RoutePath";
import ConfirmDeleteDialog from "./Dialogs/ConfirmDialog";

function SidePanel(props) {
  const { onClick } = props;
  const navigate = useNavigate();
  const noteId = useParams();
  const [noteData, setNotesData] = useState([]);

  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    let response = await fetch(`${BaseUrl}`);
    let data = await response.json();
    setNotesData(data);
  };

  const getDateTime = () => {
    const note = noteData.find((noteData) => noteData.id);
    if (note) {
      return new Date(note.updated).toLocaleDateString();
    }
  };
  
  const getNoteTitle = () => {
    const noteTitle = noteData.find((noteName) => noteName.id);
    if (noteTitle && noteTitle.body.length > 5) {
      return noteTitle.body.slice(0, 5);
    }
  };

  // const deleteNote = async () => {
  //   fetch(`${BaseUrl}${noteId.id}/delete/`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Hmm it's not work properly!?");
  //       }
  //       navigate("/");
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });

  //   setConfirmDialog({
  //     ...confirmDialog,
  //     isOpen: false,
  //   });
  // };

  return (
    <>
      <div className="right-panel">
        <div className="form-group field">
          {noteId.id === "new" ? (
            <>
              <input
                className="title-panel"
                placeholder="Note title"
                name="noteTitle"
                id="noteTitle"
                type="text"
              />
              <label htmlFor="noteTitle" className="form-label">
                Name
              </label>
            </>
          ) : (
            <label className="note-name">
              {getNoteTitle()}
            </label>
          )}
        </div>
        <p className="date-time">
          <span>
            {noteId.id !== "new" ? `Created on ${getDateTime()}` : ""}
          </span>
        </p>
        {noteId.id !== "new" ? (
          <RiDeleteBin6Line
            className="delete-button"
            onClick={() =>
              setConfirmDialog({
                isOpen: true,
                title: "Are you sure to delete this record?",
                subTitle: "You can't undo this operation",
                onConfirm: () => {
                  deleteNote();
                },
              })
            }
          />
        ) : (
          <RiAddCircleLine className="add-button" onClick={onClick} />
        )}
      </div>
      <ConfirmDeleteDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
}

export default SidePanel;
