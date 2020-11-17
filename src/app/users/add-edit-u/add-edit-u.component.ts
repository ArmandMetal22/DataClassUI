import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-u',
  templateUrl: './add-edit-u.component.html',
  styleUrls: ['./add-edit-u.component.css']
})
export class AddEditUComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() u:any;
  UserID:string;
  Username:string;
  Userpassword:string;
  Useremail:string;
  idNumber:string;

  ngOnInit(): void {
    this.UserID=this.u.UserID;
    this.Username=this.u.Username;
    this.Userpassword=this.u.Userpassword;
    this.Useremail=this.u.Useremail;
    this.idNumber=this.u.idNumber;
  }

  addU(){
    var val = {UserID:this.UserID,
                Username:this.Username,
                Userpassword:this.Userpassword,
                Useremail:this.Useremail,
                idNumber:this.idNumber };
    this.service.addUser(val).subscribe (res=>{
      alert(res.toString());
    });
  }

  updateU(){
    var val = {UserID:this.UserID,
                Username:this.Username,
                Userpassword:this.Userpassword,
                Useremail:this.Useremail,
                idNumber:this.idNumber };
    this.service.updateUser(val).subscribe (res=>{
      alert(res.toString());
    });
  }

}
