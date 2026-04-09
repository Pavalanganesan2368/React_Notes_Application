import React from "react";
import toast from "react-hot-toast";

const NoteItem = ({
  notes,
  setNotes,
  setInputs,
  setToggleBackground,
}) => {
  const handleDelete = (id) => {
    const deleteNote = notes.filter((note) => note.id !== id);
    setNotes(deleteNote);
    toast.success("Note Deleted Successfully.");
  };

  const handleUpdate = (note) => {
    setInputs({
      id: note.id,
      name: note.name,
      description: note.description
    });

    setToggleBackground(true);
  };

  return (
    <>
      <div className="note-item-container">
        {notes.length ? (
          notes.map((note) => (
            <div className="note-items-section" key={note.id}>
              <div className="note-header">
                <span className="notes-name">{note.name}</span>
                <span className="notes-date">{note.date}</span>
              </div>

              <div className="notes-description">
                <p>{note.description}</p>
              </div>

              <div className="notes-btn">
                <button
                  className="notes-delete-btn"
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
                <button
                  className="notes-update-btn"
                  onClick={() =>
                    handleUpdate(note)
                  }
                >
                  Update
                </button>
              </div>
            </div>
          ))
        ) : (
          <div
            className="no-items"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <h2>No Items Found.</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default NoteItem;
