export class Note {
  title: string;
  content: string;
  createdAt: Date;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
    this.createdAt = new Date();
  }

  preview(): string {
    return `${this.title} - ${this.createdAt.toLocaleString()}`;
  }
}