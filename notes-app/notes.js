const chalk = require('chalk');
const fs = require('fs');
console.log('utils.js')

const getNotes = () => {
return "Your Notes ...."
}

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((item) => item.title === title);
  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('No Note found!'));
  }
}
const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
    if(duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New Note Added!")
    }
    else{
        console.log("Note Title taken!")
    }
}

const removeNotes = (title) => {
    const notes = loadNotes()
    notesToKeep = notes.filter(note => note.title !== title)
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse("Note Removed!"))
    }
    else{
        console.log(chalk.red.inverse("No Note to Remove!"))
    }
}

const saveNotes= (notes) => {
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes.json').toString())
    } catch (error) {
        console.log(chalk.red.inverse('ERROR in getting notes.json file'))
        return []
    }
}

const listNotes = () => {
    console.log(JSON.parse(fs.readFileSync('notes.json').toString()))
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote:readNote,
}