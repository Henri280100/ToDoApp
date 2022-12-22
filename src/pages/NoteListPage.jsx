import React, { useEffect, useState } from "react";
import ListItems from "../components/ListItems";
import TopNavigation from "../libs/components/TopNavigation";
import { BaseUrl } from "../libs/services/RoutePath";

function NoteListPage() {
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState("");
  const [debouncedNote, setDebouncedNote] = useState(searchNote);


  useEffect(() => {
    const timer = setTimeout(() => setSearchNote(debouncedNote), 1000);
    return () => clearTimeout(timer);
  });
  
  const clearResult = () => setNotes([]);

  return (
    <>
      <TopNavigation
        onSearch={setDebouncedNote}
        clearResult={clearResult}
        value={debouncedNote}
      />
      <div>
        <ListItems
          note={notes.filter((note, index) => {
            if (searchNote) {
              return note.body.includes(searchNote);
            }
            return true;
          })}
        />
      </div>
    </>
  );
}

export default NoteListPage;
