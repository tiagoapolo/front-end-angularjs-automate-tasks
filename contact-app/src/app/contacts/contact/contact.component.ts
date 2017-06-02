import { Contact } from './../shared/contact.model';
import { Component, Input, trigger, state, style, animate, transition } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('focusPanel', [
        state('inactive', style({
            display: 'none',
            opacity: 0            
        })),
        state('active', style({
          display: 'initial',
          opacity: 1            
        })),
        transition('inactive => active', animate('250ms ease-in')),
        transition('active => inactive', animate('5ms ease-out'))
    ]),
  ]
})
export class ContactComponent {
  @Input() contact:Contact;
  state: string;
  textSlice: string;

  constructor ( ) {
    this.state = 'inactive';
    this.textSlice = 'Ver Info';
  } 

  showDisclosable () { 
    if(this.state === 'inactive') {
      this.state = 'active';
      this.textSlice = 'Fechar';
    } else {
      this.state = 'inactive';
      this.textSlice = 'Ver Info'; 
    }
  }

}
