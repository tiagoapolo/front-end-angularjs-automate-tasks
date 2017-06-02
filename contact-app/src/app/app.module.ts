import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
// import { ContactsComponent } from './contacts/contacts.component';
import { ContactsModule } from './contacts/contacts.module';
// import { ContactListComponent } from './contacts/contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContactsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
