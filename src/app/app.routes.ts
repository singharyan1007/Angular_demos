import { Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactModifyComponent } from './contact-modify/contact-modify.component';
export const routes: Routes = [
    { path: '', component: ContactListComponent },
    { path: 'contact/:id', component: ContactDetailsComponent },
    { path: 'add-contact', component: ContactModifyComponent ,data:{editMode:false}},
    { path: 'edit-contact/:id', component: ContactModifyComponent,data:{editMode:true} },
];
