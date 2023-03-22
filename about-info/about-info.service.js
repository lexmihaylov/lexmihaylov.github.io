"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AboutInfoService = void 0;
const common_1 = require("@nestjs/common");
let AboutInfoService = class AboutInfoService {
    get data() {
        return {
            "contact": {
                "linkedin": "www.linkedin.com/in/lexmihaylov"
            },
            "topSkills": [
                "Angular",
                "Redux.js",
                "TypeScript"
            ],
            "languages": [
                "Bulgarian",
                "English"
            ],
            "name": "Alexander Mihaylov",
            "currentPosition": {
                "title": "Site Lead & Technology Manager - FrontEnd",
                "company": "Scalefocus",
                "location": "Varna, Varna, Bulgaria",
                "startDate": "November 2020"
            },
            "experience": [
                {
                    "title": "Technology Manager",
                    "company": "Scalefocus",
                    "location": "Varna, Varna, Bulgaria",
                    "startDate": "November 2020",
                    "endDate": "Present",
                    "duration": "2 years 5 months"
                },
                {
                    "title": "Practice Manager",
                    "company": "Scalefocus",
                    "location": "Varna, Bulgaria",
                    "startDate": "December 2019",
                    "endDate": "November 2020",
                    "duration": "1 year"
                },
                {
                    "title": "Tech Lead",
                    "company": "Scalefocus",
                    "location": "Varna, Bulgaria",
                    "startDate": "August 2018",
                    "endDate": "December 2019",
                    "duration": "1 year 5 months"
                },
                {
                    "title": "Software Development Lead",
                    "company": "MentorMate Bulgaria",
                    "location": "Varna, Bulgaria",
                    "startDate": "June 2016",
                    "endDate": "August 2018",
                    "duration": "2 years 3 months"
                },
                {
                    "title": "Senior Front-end Developer",
                    "company": "MentorMate Bulgaria",
                    "location": "Varna, Bulgaria",
                    "startDate": "September 2014",
                    "endDate": "June 2016",
                    "duration": "1 year 10 months"
                },
                {
                    "title": "Front-End Tech Lead / Architect (Contractor)",
                    "company": "Questar Assessment Inc.",
                    "location": "",
                    "startDate": "September 2015",
                    "endDate": "August 2018",
                    "duration": "3 years"
                },
                {
                    "title": "Lecturer / Consultant",
                    "company": "Varna Free University \"Chernorizets Hrabar\"",
                    "location": "Varna, Bulgaria",
                    "startDate": "April 2016",
                    "endDate": "April 2017",
                    "duration": "1 year 1 month"
                },
                {
                    "title": "Senior Software Developer",
                    "company": "158 ltd",
                    "location": "Varna, Bulgaria",
                    "startDate": "November 2008",
                    "endDate": "September 2014",
                    "duration": "5 years 11 months"
                }
            ]
        };
    }
};
AboutInfoService = __decorate([
    (0, common_1.Injectable)()
], AboutInfoService);
exports.AboutInfoService = AboutInfoService;
//# sourceMappingURL=about-info.service.js.map