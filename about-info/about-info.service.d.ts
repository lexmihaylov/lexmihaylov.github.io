export declare class AboutInfoService {
    get data(): {
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
}
