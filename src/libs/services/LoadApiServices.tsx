import { useParams } from "react-router-dom";
import { Notes } from "../../models/notes.model";
import Http from "./HttpServices";

// Get all notes
export const getAllNotes = (limit: number | string) =>
  Http.get<Notes>("/", {
    params: {
      _limit: limit,
    },
  }).catch((err) => err.message);

// Update note

// Add a new note

// delete note
export const DeleteNote = (limit: number | string) => {
  const noteId = useParams();
  Http.delete<Notes>(`${noteId.id}/delete/`, {
    params: {
      _limit: limit,
    },
  });
};
