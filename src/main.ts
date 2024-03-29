import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { engine } from 'express-handlebars';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.engine('hbs', engine({extname: 'hbs', layoutsDir: join(__dirname, '..', 'views/layouts'), partialsDir: join(__dirname, '..', 'views/partials')}));

  await app.listen(3000);
}
bootstrap();
