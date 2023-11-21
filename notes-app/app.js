const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

// Create read command
yargs.command({
    command: "read",
    describe: "read a note",
    builder: {
        title:{
            describe: "title of Note!",
            demandOption: true,
            type: "string",
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title)
    }
})

// Create Remove Command
yargs.command({
    command: "remove",
    describe: "remove a note",
    builder:{
        title:{
            describe: "Note Title!",
            demandOption: true,
            type: "string",
        },
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
}) 


// Create list command
yargs.command({
    command: "list",
    describe: "list a note",
    handler: function(){
        notes.listNotes()
    }
})

// Create Add Command
yargs.command({
    command: "add",
    describe: "Add a note",
    builder:{
        title:{
            describe: "Note Title!",
            demandOption: true,
            type: "string",
        },
        body:{
            describe: "Note Title!",
            demandOption: true,
            type: "string",
        }
    },
    handler: function(argv) {
       notes.addNotes(argv.title, argv.body)
    }
}) 

console.log(yargs.argv)