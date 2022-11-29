import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "../assets/arrow-left.svg";
import SidePanel from "../libs/components/SidePanel";
import { BaseUrl } from "../libs/services/RoutePath";

const NotePages = () => {
  const navigate = useNavigate();
  const noteId = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  const getNote = async () => {
    if (noteId.id === "new") return;
    let response = await fetch(`${BaseUrl}${noteId.id}/`);
    let data = await response.json();
    setNote(data);
  };

  const updateNote = async () => {
    fetch(`${BaseUrl}${noteId.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const createNote = async () => {
    await fetch(`${BaseUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const deleteNoteFromErase = async () => {
    await fetch(`${BaseUrl}${noteId.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onUpdateDelete = () => {
    if (noteId.id !== "new" && note.body === "") {
      deleteNoteFromErase();
    } else if (noteId.id !== "new") {
      updateNote();
    }
    navigate("/");
  };

  const handleSubmitCreate = () => {
    if (noteId.id === "new" && note.body !== null) {
      createNote();
    }
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <BackArrow
            onClick={onUpdateDelete}
            style={{ marginLeft: "20px", marginTop: "10px" }}
            title={false}
          />
        </h3>
        <SidePanel onClick={handleSubmitCreate} />
        <textarea
          onChange={(e) => {
            setNote({ ...note, body: e.target.value });
          }}
          defaultValue={note?.body}
        ></textarea>
      </div>
    </div>
  );
};

export default NotePages;
