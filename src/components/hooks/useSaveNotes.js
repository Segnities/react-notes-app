import { useEffect } from "react";

export function useSaveNotes(notes, setNotes) {
    useEffect(() => {
      localStorage.setItem("notes-data", JSON.stringify(notes));
      const savedNotes = JSON.parse(localStorage.getItem("notes-data"));

      if (savedNotes) {
        setNotes(savedNotes);
      }
    }, []);

    useEffect(() => {
      localStorage.setItem("notes-data", JSON.stringify(notes));
    }, [notes]);
}