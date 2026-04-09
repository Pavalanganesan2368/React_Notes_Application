import { useEffect, useState } from 'react'
import './App.css';
import Header from './Components/Header';
import AddItemButton from './Components/AddItemButton';
import NoteItem from './Components/NoteItem';
import InputNotes from './Components/InputNotes';
import { Toaster } from "react-hot-toast";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("List")) || []);
  const [inputs, setInputs] = useState({
    id: null,
    date: null,
    name: "",
    description: ""
  });
  const [toggleBackground, setToggleBackground] = useState(false);

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Header titleName = "BOOKMARK" countNote = {notes.length}/>
      <AddItemButton 
        toggleBackground={toggleBackground}
        setToggleBackground={setToggleBackground}
      />
      <NoteItem 
        notes={notes}
        setNotes={setNotes}
        setInputs={setInputs}
        setToggleBackground={setToggleBackground}
      />
      <InputNotes 
        toggleBackground={toggleBackground}
        setToggleBackground={setToggleBackground}
        notes={notes}
        setNotes={setNotes}
        inputs={inputs}
        setInputs={setInputs}
      />

      <Toaster 
        position='top-center'
        reverseOrder={false}
      />
    </>
  )
}

export default App
