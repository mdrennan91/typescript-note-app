// importing readline so I can get user input from terminal
// notemanager class handles storing and showing notes

import * as readline from "readline";
import { NoteManager } from "./NoteManager";

// setting up the readline interface for terminal input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// creating an instance of my NoteManager class
const manager = new NoteManager();

// main menu that shows when the app runs
// loops back to itself after every action
async function mainMenu(): Promise<void> {
  console.log(`\nWelcome to the Notes App! Today is ${new Date().toLocaleDateString()}`);
  console.log("1. Add a new note");
  console.log("2. View all notes");
  console.log("3. Exit");

   // asking user which option they want to choose
  rl.question("Choose an option: ", (answer) => {
    switch (answer.trim()) {
      case "1":
        // if user chooses to add a new note, ask them for the note content
        rl.question("Enter your note content:\n", async (content) => {
          try {
            // don't allow empty notes
            if (!content.trim()) {
              throw new Error("Note content cannot be empty.");
            }
            
            // add note simulate saving it asynchronously
            manager.addNote("Untitled", content);
            await manager.saveNotes();
          } catch (error) {
            console.log("Error:", (error as Error).message);
          }

          mainMenu();
        });
        break;

      case "2":
        // if the user wants to view all notes, list them in the terminal
        manager.listNotes();
        mainMenu();
        break;

      case "3":
        // exit the program
        console.log("Goodbye!");
        rl.close();
        break;

      default:
        // handle anything that isn’t a valid option
        console.log("Invalid choice. Try again.");
        mainMenu();
    }
  });
}

mainMenu();