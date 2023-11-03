const notes = require('./notes.js')


// console.log(add(3,4))

const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
//create add command
yargs.command({
    command:"add",
    describe:"Add a note",
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"Note Body",
            demandOption:true,
            type:"string"
        }
    },
    handler: function(argv){
        
        // console.log("Adding a new note!",argv)
        notes.addNotes(argv.title, argv.body)
    }
})

//create remove command

yargs.command({
    command:"remove",
    describe:"Removing a note",
    builder:{
        title:{
            describe:"Title of the note to be deleted",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        notes.removeNotes(argv.title)
    }
})



//create list command

yargs.command({
    command:"list",
    describe:"List all notes",
    handler:function(argv){
        notes.listNotes()
    }
})



//create read command

yargs.command({
    command:"read",
    describe:"Reading a note",
    builder:{
        title:{
            describe:"Title of the note to be deleted",
            demandOption:true,
            type:"string"

        }
    },
    handler:function(argv){
       notes.readNotes(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)

