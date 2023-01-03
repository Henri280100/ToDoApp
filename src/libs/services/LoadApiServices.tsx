import { useParams } from "react-router-dom";
import { Notes } from "../../models/notes.model";
import { useDebounce } from "../Performance/useDebounce";
import Http from "./HttpServices";

// Get all notes
export const getAllNotes = (limit: number | string) =>
  Http.get<Notes>("/", {
    params: {
      _limit: limit,
    },
    validateStatus: (status: number) => {
      return status < 500;
    },
  });

// Get a note

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
