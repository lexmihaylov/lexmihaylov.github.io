import { AboutInfoService } from './about-info/about-info.service';
import { AppService } from './app.service';
import { BlogPostsService } from './blog-posts/blog-posts.service';
export declare class AppController {
    private aboutInfo;
    private blogPostService;
    private appService;
    constructor(aboutInfo: AboutInfoService, blogPostService: BlogPostsService, appService: AppService);
    index(): Promise<Record<string, string> | {
        posts: {
            id: string;
            title: any;
            image: any;
            description: any;
            tags: any;
            date: any;
        }[];
    }>;
    post(id: string): Promise<Record<string, string> | {
        html: any;
        meta: any;
        pageTitle: any;
    }>;
    about(): Record<string, string> | {
        pageTitle: string;
        contact: {
            linkedin: string;
        };
        topSkills: string[];
        languages: string[];
        name: string;
        currentPosition: {
            title: string;
            company: string;
            location: string;
            startDate: string;
        };
        experience: {
            title: string;
            company: string;
            location: string;
            startDate: string;
            endDate: string;
            duration: string;
        }[];
    };
    tags(tag: string): Promise<Record<string, string> | {
        pageTitle: string;
        posts: {
            id: string;
            title: any;
            image: any;
            description: any;
            tags: any;
            date: any;
        }[];
    }>;
}
