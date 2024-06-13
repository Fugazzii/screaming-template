export class Post {
    public constructor(
        private readonly title: string,
        private readonly content: string,
        private readonly author: string
    ) {}
    
    public getTitle(): string {
        return this.title;
    }
    
    public getContent(): string {
        return this.content;
    }
    
    public getAuthor(): string {
        return this.author;
    }
}