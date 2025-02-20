let notes = [];

function saveNote(content, id) {
  notes.push({ content: content, id: id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
  for (let item of notes) {
    if (item.id === id) {
      return item;
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  for (let item of notes) {
    console.log(
      `The note with id: ${item.id}, has the following note text: ${item.content}`
    );
  }
}

logOutNotesFormatted();

// Next I will implement the edit function for note to edit content
// of a note by id

function editNote(id, content) {
  for (let item of notes) {
    if (item.id === id) {
      item.content = content;
      return `note with id: ${id} changed to ${content}`;
    }
  }
}

const editedNote = editNote(2, "changed note");
console.log(editedNote);
console.log(notes);

// next I will implement the deleting functionality so the use
// could delete a note by its id

function deleteNote(id) {
  for (let item of notes) {
    if (item.id === id) {
      const ind = notes.indexOf(item);
      notes.splice(ind, 1);
      return `Note with id ${item.id} deleted!`;
    }
  }
}

const deletedNote = deleteNote(1);
console.log(deletedNote);
console.log(notes);
