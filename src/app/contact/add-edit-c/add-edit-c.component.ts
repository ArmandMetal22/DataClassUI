import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-c',
  templateUrl: './add-edit-c.component.html',
  styleUrls: ['./add-edit-c.component.css']
})
export class AddEditCComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() c:any;
  ContactID:string;
  CellNum:string;
  Email:string;
  idNumber:string;

  ngOnInit(): void {
    this.ContactID=this.c.ContactID;
    this.CellNum=this.c.CellNum;
    this.Email=this.c.Email;
    this.idNumber=this.c.idNumber;
  }

  addContact(){
    var val = {ContactID:this.ContactID,
                CellNum:this.CellNum,
                Email:this.Email,
                idNumber:this.idNumber };
    this.service.addContact(val).subscribe (res=>{
      alert(res.toString());
    });
  }

  updateContact(){
    var val = {ContactID:this.ContactID,
                CellNum:this.CellNum,
                Email:this.Email,
                idNumber:this.idNumber };
    this.service.updateContact(val).subscribe (res=>{
      alert(res.toString());
    });
  }

}
