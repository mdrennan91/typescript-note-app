// this class represents a single note
export class Note {
  title: string;
  content: string;
  createdAt: Date;

  // when a new note is created, store the title, content, and the current date/time
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.createdAt = new Date();
  }

  // returns a short string preview of the note (title + date)
  preview(): string {
    return `${this.title} - ${this.createdAt.toLocaleString()}`;
  }
}