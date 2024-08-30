import { Component, inject, OnInit } from '@angular/core';
import { Contacts } from '../../models/IContacts';
import { ContactService } from '../contact.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { ContactModifyComponent } from '../contact-modify/contact-modify.component';
@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgFor,RouterLink,ContactModifyComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts:Contacts[]=[];
  
  // constructor(private contactService:ContactService,private router:Router){}
  contactService:ContactService=inject(ContactService);
  router:Router=inject(Router)

  ngOnInit(): void {
    this.loadContacts();
  }


  loadContacts():void
  {
    this.contacts=this.contactService.getAllContacts();
  }

  onEdit(contactId:number):void
  {
    this.router.navigate(['/edit-contact',contactId]);
  }

  onDelete(contactId:number):void
  {
    this.contactService.deleteContacts(contactId);
    this.loadContacts();
  }

  onViewDetails(contactId:number):void{
    this.router.navigate(['/contact',contactId]);
  }

  moveToModify():void{
    console.log("Button clicked")
    this.router.navigate(['/add-contact'])
  }

}
