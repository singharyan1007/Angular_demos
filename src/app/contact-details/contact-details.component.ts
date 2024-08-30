import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contacts } from '../../models/IContacts';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent implements OnInit {
  contact:Contacts|undefined

  constructor(private contactService:ContactService, private route:ActivatedRoute, private router:Router  ){}

  ngOnInit():void{
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.contact=this.contactService.getContactById(id);
  }

  goBack():void
  {
    this.router.navigate(['/'])
  }



}
