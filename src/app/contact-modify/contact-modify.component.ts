import { Component,OnInit } from '@angular/core';
import { Contacts } from '../../models/IContacts';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { FormsModule,NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-modify',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-modify.component.html',
  styleUrl: './contact-modify.component.css'
})
export class ContactModifyComponent implements OnInit {

  contact:Contacts={
    id:0,
    firstName:'',
    lastName:'',
    gender:'',
    dateOfBirth:'',
    location:'',
    email:'',
    mobile:''

  };
  //make a flag to check if Edit mode is on or off
  isEditMode=false;

  constructor(private route:ActivatedRoute,private contactService:ContactService,private router:Router){}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.isEditMode=this.route.snapshot.data['editMode']
    if (id) {
      this.contact = this.contactService.getContactById(id) || this.contact;
      
    }
  }

  saveContacts():void
  {
    if(this.isEditMode)
    {
      this.contactService.updateContact(this.contact);
    }else{
      this.contactService.addContact(this.contact);
    }
    this.router.navigate(['/']);
  }

  clearFields():void{
    this.contact={
      id:0,
      firstName:'',
      lastName:'',
      gender:'',
      dateOfBirth:'',
      location:'',
      email:'',
      mobile:''
  

    }
  }
}
