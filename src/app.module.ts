import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutInfoService } from './about-info/about-info.service';
import { BlogPostsService } from './blog-posts/blog-posts.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AboutInfoService, BlogPostsService],
})
export class AppModule {}
