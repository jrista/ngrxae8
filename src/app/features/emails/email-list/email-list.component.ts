import { Component, OnInit } from '@angular/core';
import {EmailFacade} from '../../../state/facades/email.facade';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {

  constructor(private emailFacade: EmailFacade) { }

  ngOnInit() {
    this.emailFacade.loadAll();
  }
}
