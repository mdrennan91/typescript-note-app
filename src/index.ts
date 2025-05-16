import * as readline from "readline";
import { NoteManager } from "./NoteManager";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const manager = new NoteManager();

async function mainMenu(): Promise<void> {
  console.log(`\nWelcome to the Notes App! Today is ${new Date().toLocaleDateString()}`);
  console.log("1. Add a new note");
  console.log("2. View all notes");
  console.log("3. Exit");

  rl.question("Choose an option: ", (answer) => {
    switch (answer.trim()) {
      case "1":
        rl.question("Enter your note content:\n", async (content) => {
          try {
            if (!content.trim()) {
              throw new Error("Note content cannot be empty.");
            }

            manager.addNote("Untitled", content);
            await manager.saveNotes();
          } catch (error) {
            console.log("Error:", (error as Error).message);
          }

          mainMenu();
        });
        break;

      case "2":
        manager.listNotes();
        mainMenu();
        break;

      case "3":
        console.log("Goodbye!");
        rl.close();
        break;

      default:
        console.log("Invalid choice. Try again.");
        mainMenu();
    }
  });
}

mainMenu();