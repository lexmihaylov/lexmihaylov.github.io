import { Injectable } from '@nestjs/common';
import * as MarkdownItMeta from 'markdown-it-meta';
import * as MarkdownIt from 'markdown-it';
import { readdir, readFile } from 'fs/promises';
import hljs from 'highlight.js';
import { join } from 'path';

@Injectable()
export class BlogPostsService {
    async getPostList() {
        const files = await readdir('./posts');
        const posts = await Promise.all(
            files.map(async (file) => {
                if (!/\.md$/.test(file)) {
                    return null;
                }

                const content = await readFile(`./posts/${file}`, 'utf-8');
                const md = new MarkdownIt();
                md.use(MarkdownItMeta)
                md.parse(content);
                
                if (md.meta.isDraft) {
                    return null;
                }

                return {
                    id: file.replace('.md', ''),
                    title: md.meta.title,
                    image: md.meta.image,
                    description: md.meta.description,
                    tags: md.meta.tags,
                    date: md.meta.date
                };

            })
        );
        const actualPosts = posts.filter(post => !!post)
            .sort((a, b) => b.date.getTime() - a.date.getTime());
        return actualPosts;
    }

    async getPostDetails(id: string) {
        const filePath = join('posts', `${id}.md`);
        const content = await readFile(filePath, 'utf8');
        const md = new MarkdownIt({
        highlight: (
            str: string,
            lang: string,
        ) => {
            const code = lang && hljs.getLanguage(lang)
            ? hljs.highlight(str, {
                language: lang,
                ignoreIllegals: true,
            }).value
            : md.utils.escapeHtml(str);
            return `<pre class="hljs"><code>${code}</code></pre>`;
        }
        });
        md.use(MarkdownItMeta);
        const html = md.render(content);
        return { html, meta: md.meta };
    }

    async getPostsByTag(tag: string) {
        return (await this.getPostList()).filter(post => post.tags.includes(tag));
    }
}
