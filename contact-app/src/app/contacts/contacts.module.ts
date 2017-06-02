import { ContactService } from './shared/contact.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component'; 

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ContactService
  ],
  declarations: [
    ContactsComponent,
    ContactListComponent,
    ContactComponent
  ],
  exports: [ ContactsComponent ]
})
export class ContactsModule { }
