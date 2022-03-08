import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsController } from './contacts/contacts.controller';
import { NewsController } from './news/news.controller';
import { ErrorsController } from './errors/errors.controller';

@Module({
  imports: [],
  controllers: [AppController, ContactsController, NewsController, ErrorsController],
  providers: [AppService],
})
export class AppModule {}
