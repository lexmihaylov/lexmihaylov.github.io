"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const about_info_service_1 = require("./about-info/about-info.service");
const app_service_1 = require("./app.service");
const blog_posts_service_1 = require("./blog-posts/blog-posts.service");
let AppController = class AppController {
    constructor(aboutInfo, blogPostService, appService) {
        this.aboutInfo = aboutInfo;
        this.blogPostService = blogPostService;
        this.appService = appService;
    }
    async index() {
        const posts = await this.blogPostService.getPostList();
        return this.appService.viewData({ posts });
    }
    async post(id) {
        const doc = await this.blogPostService.getPostDetails(id);
        return this.appService.viewData({ html: doc.html, meta: doc.meta, pageTitle: doc.meta.title });
    }
    about() {
        return this.appService.viewData(Object.assign(Object.assign({}, this.aboutInfo.data), { pageTitle: 'About' }));
    }
    async tags(tag) {
        const posts = await this.blogPostService.getPostsByTag(tag);
        return this.appService.viewData({ pageTitle: tag, posts });
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('/posts/:id'),
    (0, common_1.Render)('post'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "post", null);
__decorate([
    (0, common_1.Get)('/about'),
    (0, common_1.Render)('about'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "about", null);
__decorate([
    (0, common_1.Get)('/tags/:tag'),
    (0, common_1.Render)('index'),
    __param(0, (0, common_1.Param)('tag')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "tags", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [about_info_service_1.AboutInfoService, blog_posts_service_1.BlogPostsService, app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map