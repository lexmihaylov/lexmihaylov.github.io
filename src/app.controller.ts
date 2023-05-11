import { Controller, Get, Param, Render, Req } from '@nestjs/common';
import { AboutInfoService } from './about-info/about-info.service';
import { AppService } from './app.service';
import { BlogPostsService } from './blog-posts/blog-posts.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private aboutInfo: AboutInfoService, private blogPostService: BlogPostsService, private appService: AppService) { }

  @Get()
  @Render('index')
  async index() {
    const posts = await this.blogPostService.getPostList();

    return this.appService.renderParams({ posts });
  }

  @Get('/posts/:id')
  @Render('post')
  async post(@Param('id') id: string, @Req() request: Request) {
    const doc = await this.blogPostService.getPostDetails(id);
    return this.appService.renderParams({
      html: doc.html,
      meta: doc.meta, 
      pageTitle: doc.meta.title,
      type: 'article',
      pageDescription: doc.meta.description, 
      image: this.appService.baseUrlJoin(doc.meta.image),
      cannonical: this.appService.baseUrlJoin(request.originalUrl),
      url: this.appService.baseUrlJoin(request.originalUrl),
      keywords: doc.meta.tags.join(',')
    });
  }

  @Get('/about')
  @Render('about')
  about() {
    return this.appService.renderParams({ ...this.aboutInfo.data, pageTitle: 'About' });
  }

  @Get('/tags/:tag')
  @Render('index')
  async tags(@Param('tag') tag: string) {
    const posts = await this.blogPostService.getPostsByTag(tag);
    return this.appService.renderParams({ pageTitle: tag, posts });
  }
}
