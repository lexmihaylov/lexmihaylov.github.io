"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogPostsService = void 0;
const common_1 = require("@nestjs/common");
const MarkdownItMeta = require("markdown-it-meta");
const MarkdownIt = require("markdown-it");
const promises_1 = require("fs/promises");
const highlight_js_1 = require("highlight.js");
const path_1 = require("path");
let BlogPostsService = class BlogPostsService {
    async getPostList() {
        const files = await (0, promises_1.readdir)('./posts');
        const posts = await Promise.all(files.map(async (file) => {
            if (!/\.md$/.test(file)) {
                return null;
            }
            const content = await (0, promises_1.readFile)(`./posts/${file}`, 'utf-8');
            const md = new MarkdownIt();
            md.use(MarkdownItMeta);
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
        }));
        const actualPosts = posts.filter(post => !!post)
            .sort((a, b) => b.date.getTime() - a.date.getTime());
        return actualPosts;
    }
    async getPostDetails(id) {
        const filePath = (0, path_1.join)('posts', `${id}.md`);
        const content = await (0, promises_1.readFile)(filePath, 'utf8');
        const md = new MarkdownIt({
            highlight: (str, lang) => {
                const code = lang && highlight_js_1.default.getLanguage(lang)
                    ? highlight_js_1.default.highlight(str, {
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
    async getPostsByTag(tag) {
        return (await this.getPostList()).filter(post => post.tags.includes(tag));
    }
};
BlogPostsService = __decorate([
    (0, common_1.Injectable)()
], BlogPostsService);
exports.BlogPostsService = BlogPostsService;
//# sourceMappingURL=blog-posts.service.js.map