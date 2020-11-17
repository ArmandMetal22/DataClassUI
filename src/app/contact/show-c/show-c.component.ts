import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-c',
  templateUrl: './show-c.component.html',
  styleUrls: ['./show-c.component.css']
})
export class ShowCComponent implements OnInit {

  constructor(private service:SharedService) { }

  ContactList:any=[];

  ModalTitle:string;
  ActivateAddEditContactComp:boolean=false;
  c:any;


  ngOnInit(): void {
    this.refreshContactList();
  }

  addClick(){
    this.c={
      ContactID:0,
      CellNum:"",
      Email:"",
      idNumber:""
    }
    this.ModalTitle="Add Contact Info";
    this.ActivateAddEditContactComp=true;
  }

  editClick(item){
    this.c=item;
    this.ModalTitle="Edit Contact Info";
    this.ActivateAddEditContactComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure???')){
      this.service.deleteContact(item.ContactID).subscribe(data=>{
        alert(data.toString());
        this.refreshContactList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditContactComp=false;
    this.refreshContactList();
  }


  refreshContactList(){
    this.service.getContactList().subscribe(data=>{
      this.ContactList=data;
    });
  }

}
