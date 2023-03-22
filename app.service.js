"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    viewData(viewData) {
        return Object.assign({ pageTitle: '', pageDescription: `Welcome to my personal blog, where we explore the latest trends and developments in the world of technology. From JavaScript to React and Angular, we delve into the nuts and bolts of the tools and frameworks that power modern web development. But we don't just stop there. We also cover leadership topics, including tips and tricks for managing teams and projects effectively. And for the gamers out there, we provide insight into the latest gaming technologies and trends. Join us as we explore the cutting-edge of technology, leadership, gaming, and beyond.`, pageImate: '' }, viewData);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map