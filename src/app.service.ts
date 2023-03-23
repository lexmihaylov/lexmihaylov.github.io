import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  viewData<T>(viewData: T | Record<string, string>): T | Record<string, string> {
    return {
      pageTitle: '',
      pageDescription: `Welcome to my personal blog, where we explore the latest trends and developments in the world of technology. From JavaScript to React and Angular, we delve into the nuts and bolts of the tools and frameworks that power modern web development. But we don't just stop there. We also cover leadership topics, including tips and tricks for managing teams and projects effectively. And for the gamers out there, we provide insight into the latest gaming technologies and trends. Join us as we explore the cutting-edge of technology, leadership, gaming, and beyond.`,
      pageImate: '',
      ...viewData,
    };
  }
}
