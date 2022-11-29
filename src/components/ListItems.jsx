import Note from "./Notes";

function ListItems({ note }) {
  return (
    <div className="card-container">
      {note.map((noteData, index) => (
        <Note note={noteData} />
      ))}
    </div>
  );
}

export default ListItems;
