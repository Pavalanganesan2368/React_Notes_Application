import React from "react";

const InputNotes = ({
  notes,
  setNotes,
  inputs,
  setInputs,
  toggleBackground,
  setToggleBackground,
}) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const input = {
      ...inputs,
      [name]: value,
    };
    setInputs(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.name.trim() || !inputs.description.trim()) return;

    if (inputs.id !== null) {
      const date = new Date();
      const updateNote = notes.map((note) =>
        note.id === inputs.id
          ? {
              ...note,
              date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
              name: inputs.name,
              description: inputs.description,
            }
          : note,
      );
      setNotes(updateNote);
      setInputs({ id: null, name: "", description: "" });
      setToggleBackground(false);

    } else {

      const id = notes.length ? notes[notes.length - 1].id + 1 : 1;
      const date = new Date();
      const addNotes = {
        id: id,
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        name: inputs.name,
        description: inputs.description,
      };

      setToggleBackground(!toggleBackground);
      setNotes([...notes, addNotes]);
      setInputs({ id: null, name: "", description: "" });
    }
  };

  return (
    <div
      className="input-notes-container"
      style={{ display: toggleBackground ? "flex" : "none" }}
    >
      <form className="notes-section" onSubmit={handleSubmit}>
        <div className="input-name">
          <label htmlFor="input-note-name">Enter Your Note Name : </label>
          <input
            type="text"
            value={inputs.name}
            onChange={handleChange}
            id="input-note-name"
            name="name"
            placeholder="Enter Your Notes Name..."
          />
        </div>

        <div className="input-name">
          <label htmlFor="input-description">
            Enter Your Notes Description :{" "}
          </label>
          <textarea
            value={inputs.description}
            onChange={handleChange}
            id="input-description"
            name="description"
            placeholder="Enter Your Notes Name..."
          ></textarea>
        </div>

        <div className="btn-notes-section">
          <button className="update-notes-btn" type="submit">
            {inputs.id ? "Update" : "Add Note"}
          </button>
          <button 
            className="add-notes-btn"
            type="button"
            onClick={() => setToggleBackground(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputNotes;
