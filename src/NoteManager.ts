import { Note } from "./Note";

export class NoteManager {
  private notes: Note[] = [];

  addNote(title: string, content: string): void {
    const note = new Note(title, content);
    this.notes.push(note);
    console.log("Note added:", note.preview());
  }

  listNotes(): void {
    console.log("\nYour Notes:");
    this.notes.forEach((note, index) => {
      console.log(`${index + 1}. ${note.preview()}`);
    });
  }

  async saveNotes(): Promise<void> {
    console.log("Saving notes...");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Notes saved successfully!");
        resolve();
      }, 1000);
    });
  }
}
