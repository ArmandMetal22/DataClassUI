import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-u',
  templateUrl: './show-u.component.html',
  styleUrls: ['./show-u.component.css']
})
export class ShowUComponent implements OnInit {

  constructor(private service:SharedService) { }

  UserList:any=[];

  ModalTitle:string;
  ActivateAddEditUserComp:boolean=false;
  u:any;

  ngOnInit(): void {
    this.refreshUserList();
  }

  addClick(){
    this.u={
      UserID:0,
      Username:"",
      Userpassword:"",
      Useremail:"",
      idNumber:""
    }
    this.ModalTitle="Add User";
    this.ActivateAddEditUserComp=true;
  }

  editClick(item){
    this.u=item;
    this.ModalTitle="Edit User ";
    this.ActivateAddEditUserComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure???')){
      this.service.deleteUser(item.UserID).subscribe(data=>{
        alert(data.toString());
        this.refreshUserList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditUserComp=false;
    this.refreshUserList();
  }

  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UserList=data;
    });
  }

}
