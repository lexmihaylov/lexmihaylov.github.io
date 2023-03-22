"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const express_handlebars_1 = require("express-handlebars");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    app.engine('hbs', (0, express_handlebars_1.engine)({ extname: 'hbs', layoutsDir: (0, path_1.join)(__dirname, '..', 'views/layouts'), partialsDir: (0, path_1.join)(__dirname, '..', 'views/partials') }));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map