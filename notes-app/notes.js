const fs = require('fs');
const chalk = require('chalk');
const { notStrictEqual } = require('assert');

const getNotes = () => {
    return 'Your notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })

        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title)

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'));
    } else {
        console.log(chalk.green.inverse('Note removed!'));
    }
    saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.green.inverse('Your notes\n'));
    notes.forEach((note, index) => {
        console.log('List ' + (index + 1));
        console.log('Title: ' + note.title);
        console.log('Body: ' + note.body);
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const searchNote = notes.find((note) => note.title === title)

    if (searchNote) {
        console.log(chalk.white.inverse('Title: ' + searchNote.title));
        console.log('Body: ' + searchNote.body);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};