const fs = require("fs");

const chalk = require("chalk");

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    };
};

const addNotes = (title, body) => {

    const notes = loadNotes();

    const notesObj = {
        title: title,
        body: body,
    };

    const addnotes = notes.concat(notesObj);

    const dataJson = JSON.stringify(addnotes);

    fs.writeFileSync("notes.json", dataJson);
};


const removeNote = (title) => {
    
    const notes = loadNotes();

    const filterNotes = notes.filter(item => item.title !== title);

    const dataJson = JSON.stringify(filterNotes);

    fs.writeFileSync("notes.json", dataJson);

};


const listNotes = () => {
    
    const notes = loadNotes();

    const filterNotes = notes.map(note => console.log("I'm ", note.title));

};

const readNotes = (title) => {
    
    const notes = loadNotes();

    const filterNotes = notes.find(note => note.title === title);

    if(filterNotes !== undefined){
        console.log(chalk.green.inverse(filterNotes.title));
    }else{
        console.log(chalk.red.inverse("No Note Found !!"));;
    }
};

module.exports = {
    addNotes,
    removeNote,
    listNotes,
    readNotes,
};