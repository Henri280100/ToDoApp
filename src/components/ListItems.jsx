import Note from "./Notes";

function ListItems({note, activeNote}) {
  return (
    <div className="card-container">
      {note.map((noteData, index) => (
        <Note note={noteData} activeNote={activeNote}/>
      ))}
    </div>
  );
}

export default ListItems;
