import { Contact } from './shared/contact.model';
import { ContactService } from './shared/contact.service';
import { Observable } from 'rxjs/Observable';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  providers:[ ContactService ],
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contacts = [];
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

}
