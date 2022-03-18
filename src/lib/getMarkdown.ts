import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export class MarkdownReader {
    private locale: string
    private cwd: string
    constructor(locale: string) {
        this.locale = locale;
        this.cwd = 'a';
    }

    private getDirectory(folder: string): string {
        return join(process.cwd(), 'content', this.locale, folder)
    }

    public getContentSlugs(): string[] {
        return fs.readdirSync(this.cwd);
    }

    public getContentBySlug(slug: string, fields: string[] = []) {
        const realSlug = slug.replace(/\.md$/, '');
        const fullPath = join(this.cwd, `${realSlug}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const items: any = {};

        fields.forEach((field) => {
            if (field === 'slug') {
                items[field] = realSlug
            };
            if (field === 'content') {
                items[field] = content
            };

            if (typeof data[field] !== 'undefined') {
                items[field] = data[field]
            };
        });

        return items
    };

    public getAllContent(folder: string, fields: string[] = []) {
        this.cwd = this.getDirectory(folder);
        const slugs = this.getContentSlugs();
        const posts = slugs
            .map((slug) => this.getContentBySlug(slug, fields))
            // sort posts by date in descending order
            .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
        return posts
    };
};