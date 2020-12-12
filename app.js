const yargs = require("yargs");

const notes = require("./notes.js");

// create command add
yargs.command({
    command: "add",
    describe: "add a note",
    title : {
        describe : "add a title",
        demandOption : true,
        type : "string",
    },
    body : {
        describe : "add a body",
        demandOption : true,
        type : "string",
    },
    handler: (argv) => {
        console.log("Yahoo Add A Note !!!");
        notes.addNotes(argv.title, argv.body);
    }
});

// create command remove
yargs.command({
    command: "remove",
    describe: "remove a note",
    title : {
        describe : "remove a title",
        demandOption : true,
        type : "string",
    },
    handler: (argv) => {
        console.log("Yahoo Remove A Note !!!");
        notes.removeNote(argv.title);
    }
});

// create command list
yargs.command({
    command: "list",
    describe: "notes list",
    handler: () => {
        console.log("Yahoo List !!!");
        notes.listNotes();
    }
});

// create command read
yargs.command({
    command: "read",
    describe: "read notes",
    title : {
        describe : "read a title",
        demandOption : true,
        type : "string",
    },
    handler: (arg) => {
        console.log("Yahoo Read Notes !!!");
        notes.readNotes(arg.title);
    }
});


console.log(yargs.argv);