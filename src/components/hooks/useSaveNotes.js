import { useEffect } from "react";

export function useSaveNotes(notes, setNotes) {
    
    useEffect(() => {
      const savedNotes = localStorage.getItem('notes-data');
      if(savedNotes) {
        setNotes(JSON.parse(savedNotes));
      }
    }, []);

    useEffect(() => {
      window.localStorage.setItem("notes-data", JSON.stringify(notes)); 
    }, [notes]);
}