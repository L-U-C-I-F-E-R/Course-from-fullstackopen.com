import { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('add...')
  const [showAll, setShowAll] = useState(true)

  const AddNote = (event) => {
    event.preventDefault()
    const newObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(newObject))
    setNewNote('')
  }

  const HandlerChange = (event) =>{
    setNewNote(event.target.value)
    console.log(event.target.value)
  }

  const notesToShow = showAll
   ? notes 
   : notes.filter(note => note.important === true)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'all' : "important"}
        </button>
        <form onSubmit={AddNote}>
          <input 
          onChange={HandlerChange}
          value={newNote} />
          <button type='submit'>save</button>
        </form>
      </ul>
    </div>
  )
}

export default App;
