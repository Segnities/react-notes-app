export function getNotes() {
    let localStorageNotes;
    if(localStorage.getItem('notes-data') === null) {
        localStorageNotes = [];
    } else {
        localStorageNotes = JSON.parse(localStorage.getItem('notes-data'))
    }
    return localStorageNotes;
}