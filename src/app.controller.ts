import { Controller, Get, Param, Render } from '@nestjs/common';
import { AboutInfoService } from './about-info/about-info.service';
import { AppService } from './app.service';
import { BlogPostsService } from './blog-posts/blog-posts.service';

@Controller()
export class AppController {
  constructor(private aboutInfo: AboutInfoService, private blogPostService: BlogPostsService, private appService: AppService) { }

  @Get()
  @Render('index')
  async index() {
    const posts = await this.blogPostService.getPostList();

    return this.appService.viewData({ posts });
  }

  @Get('/posts/:id')
  @Render('post')
  async post(@Param('id') id: string) {
    const doc = await this.blogPostService.getPostDetails(id);
    return this.appService.viewData({
      html: doc.html,
      meta: doc.meta, 
      pageTitle: doc.meta.title, 
      pageDescription: doc.meta.description, 
      image: doc.meta.image,
      keywords: doc.meta.tags.join(',')
    });
  }

  @Get('/about')
  @Render('about')
  about() {
    return this.appService.viewData({ ...this.aboutInfo.data, pageTitle: 'About' });
  }

  @Get('/tags/:tag')
  @Render('index')
  async tags(@Param('tag') tag: string) {
    const posts = await this.blogPostService.getPostsByTag(tag);
    return this.appService.viewData({ pageTitle: tag, posts });
  }
}
