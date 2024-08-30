import { Injectable } from '@angular/core';
import { Contacts } from '../models/IContacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private storageKey='contacts';
 

  getAllContacts():Contacts[]
  {
    const contacts=localStorage.getItem(this.storageKey);
    return contacts?JSON.parse(contacts):[];
  }

  addContact(contact:Contacts):void
  {
    const contacts=this.getAllContacts();
    contact.id=new Date().getTime();
    contacts.push(contact);
    localStorage.setItem(this.storageKey,JSON.stringify(contacts));
  }

  updateContact(updateContact:Contacts):void
  {
    const contacts=this.getAllContacts();
    const index=contacts.findIndex(c=>c.id==updateContact.id);
    if(index!=-1)
    {
      contacts[index]=updateContact;
      localStorage.setItem(this.storageKey,JSON.stringify(contacts));
    }
  }

  deleteContacts(contactId:number):void
  {
    let contacts=this.getAllContacts();
    contacts=contacts.filter(contact=>contact.id!=contactId);
    localStorage.setItem(this.storageKey,JSON.stringify(contacts));
  }

  getContactById(contactId:number):Contacts|undefined
  {
    const contacts=this.getAllContacts();
    return contacts.find(contact=>contact.id==contactId);
  }

}
