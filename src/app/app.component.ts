import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactModifyComponent } from './contact-modify/contact-modify.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContactDetailsComponent,ContactListComponent,ContactModifyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contact-management-app';
}
