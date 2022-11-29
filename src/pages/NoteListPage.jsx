import React, { useEffect, useState } from "react";
import ListItems from "../components/ListItems";
import TopNavigation from "../libs/components/TopNavigation";
import { BaseUrl } from "../libs/services/RoutePath";

function NoteListPage(props) {
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState("");
  const [completedNote, setCompletedNote] = useState(false);
  const [debouncedNote, setDebouncedNote] = useState(searchNote, completedNote);

  useEffect(() => {
    const timer = setTimeout(() => setSearchNote(debouncedNote), 1000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    let response = await fetch(`${BaseUrl}`);
    let data = await response.json();
    console.log(123, data);
    setNotes(data);
  };

  const onDisplayComplete = (status) => {
    if (status) {
      setCompletedNote(!completedNote); // If it true, then display the complete note
      console.log(!completedNote);
    } else {
      setCompletedNote(completedNote);
    }
  };

  const clearResult = () => setNotes([]);

  return (
    <>
      <TopNavigation
        onSearch={setDebouncedNote}
        clearResult={clearResult}
        value={debouncedNote}
        onDisplayComplete={() => onDisplayComplete(true)}
        classComplete={completedNote ? "nav-link active" : "nav-link"}
        onDisplayInComplete={() => onDisplayComplete(false)}
        classInComplete={completedNote ? "nav-link" : "nav-link active"}
      />
      <div>
        <ListItems
          note={notes.filter((note, index) => {
            if (searchNote) {
              return note.body.includes(searchNote);
            }
            if (!completedNote) {
              return note.completed === completedNote;
            }
            return note;
          })}
        />
      </div>
    </>
  );
}

export default NoteListPage;
