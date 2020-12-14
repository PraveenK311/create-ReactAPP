import React, { useEffect, useState } from "react";
import Textarea from "react-expanding-textarea";
import TimeAgo from 'react-timeago';
import defaultExport from 'module';
import Login from "./Login/Loginapp.js";
import Footer from "./Footer.jsx";
import AddIcon from "@material-ui/icons/Add";
import WebAssetIcon from '@material-ui/icons/WebAsset';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import 'bootstrap/dist/css/bootstrap.min.css';

let nextID = localStorage.getItem("nextID") || 0;

const newID = () => {
  localStorage.setItem("nextID", nextID + 1);
  return nextID++;
};

const App = () => {
    const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const cards = notes.map(note => (
    <div className="card" key={note.id}>
      <h2>
        <input
          className="noteTitle"
          value={note.title}
          onChange={event => {
            note.title = event.target.value;
            updateNote(note);
          }}
        />
      </h2>
      <Textarea
        className="noteContent"
        defaultValue={note.content}
        onChange={event => {
          note.content = event.target.value;
          updateNote(note);
        }}
      />
      <button id="deletebutton" onClick={() => deleteNote(note)}>Delete</button><DeleteIcon/>
    </div>
  ));


  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);


  useEffect(() => {
    localStorage.getItem("notes", JSON.stringify(notes));
  }, [notes]);


  const createNote = () => {
    setNotes(oldNotes => [
      ...oldNotes,
      {
        id: newID(),
        title: "New Note",
        content: "write here."
      }
    ]);
  };


  const updateNote = note => {
    setNotes(oldNotes =>
      [...oldNotes.filter(n => n.id !== note.id), note].sort(
        (a, b) => a.id - b.id
      )
    );
  };
  

  const deleteNote = note => {
    setNotes(oldNotes => oldNotes.filter(n => n.id !== note.id));
  };



  return (
    <div className="app">
     <Login/><br/><br/>
      {cards}
      <button id="createbutton" onClick={createNote}>Create new Notes</button> <AddIcon/><br/><br/>
      <button id="Recentbuuton"onclick={recentnote}>Recent Notes</button><WebAssetIcon/>
        <br/><br/>
      <button  id="resetbutton"onClick={() => setNotes([])}>Reset All</button><ClearIcon/>
      <br/>  <br/>
   
      <Footer/>   
      </div>
  );
};

export default App;
