console.log('starting app.js');

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv
let command = argv._[0]
console.log('Yargs', argv );


console.log('Command: ', command);

if (command === 'add') {
  let note = notes.addNote(argv.title, argv.body)
  if(note) {
    console.log(note.title, note.body);
  } else {
    console.log('Note title taken');
  }
} else if (command === "list") {
  notes.getAll()
} else if (command === "read") {
  notes.getNote(argv.title)
} else if (command === "remove") {
  let noteRemoved = notes.removeNote(argv.title)
  let message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message);
} else {
  console.log('Command not recognised');
}
