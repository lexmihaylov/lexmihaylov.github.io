export declare class BlogPostsService {
    getPostList(): Promise<{
        id: string;
        title: any;
        image: any;
        description: any;
        tags: any;
        date: any;
    }[]>;
    getPostDetails(id: string): Promise<{
        html: any;
        meta: any;
    }>;
    getPostsByTag(tag: string): Promise<{
        id: string;
        title: any;
        image: any;
        description: any;
        tags: any;
        date: any;
    }[]>;
}
