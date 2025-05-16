import { Note } from "./Note";

// this class handles storing notes and doing things like adding, listing, and (fake) saving them
export class NoteManager {
  private notes: Note[] = [];

  // adds a new note to the list
  addNote(title: string, content: string): void {
    const note = new Note(title, content);
    this.notes.push(note);
    console.log("Note added:", note.preview());
  }

  // shows all notes in the terminal
  listNotes(): void {
    console.log("\nYour Notes:");
    this.notes.forEach((note, index) => {
      console.log(`${index + 1}. ${note.preview()}`);
    });
  }

  // simulates saving notes using an async delay
  async saveNotes(): Promise<void> {
    console.log("Saving notes...");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Notes saved successfully!");
        resolve();
      }, 1000); // 1 second delay to simulate saving
    });
  }
}
