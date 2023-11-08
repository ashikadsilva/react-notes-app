import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';
import SearchNote from "./components/SearchNote";
import Header from "./components/Header";

const App = () => {
  // useState hook to hold array of notes.
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my First Note!",
      date: "12/08/2023",
    },
    {
      id: nanoid(),
      text: "This is my second Note!",
      date: "07/07/2023",
    },
    {
      id: nanoid(),
      text: "This is my Third Note!",
      date: "12/05/2023"
    }
  ]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
    console.log(savedNotes);
  }, []);


  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
    console.log('Notes saved to local storage:', notes);

  }, [notes])

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("dark-mode"));
    if (savedDarkMode) {
      setDarkMode(savedDarkMode);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("dark-mode", JSON.stringify(darkMode));
  }, [darkMode]);
  

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">

        <Header handleToggleDarkMode={setDarkMode} />
        <SearchNote handleSearchNote={setSearchText} />
        <NotesList notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote} />
      </div>
    </div>
  )
}
export default App; 