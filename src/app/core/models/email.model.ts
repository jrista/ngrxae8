import {Key} from '@briebug/ngrx-auto-entity';

export class Email {
  @Key id: number;
  msg: string;
}
