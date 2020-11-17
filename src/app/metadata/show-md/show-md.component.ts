import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-md',
  templateUrl: './show-md.component.html',
  styleUrls: ['./show-md.component.css']
})
export class ShowMdComponent implements OnInit {

  constructor(private service:SharedService) { }

  DataList:any=[];

  ModalTitle:string;
  ActivateAddEditMDComp:boolean=false;
  md:any;

  ngOnInit(): void {
    this.refreshMDList();
  }

  addClick(){
    this.md={
      DataID:0,
      idNumber:"",
      FullName:"",
      Initials:"",
      email:"",
      PictureFile:"",
      TextFile:"",
      ExcelFile:""
    }
    this.ModalTitle="Add Metadata";
    this.ActivateAddEditMDComp=true;
  }

  editClick(item){
    this.md=item;
    this.ModalTitle="Edit Metadata";
    this.ActivateAddEditMDComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure???')){
      this.service.deleteMD(item.DataID).subscribe(data=>{
        alert(data.toString());
        this.refreshMDList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditMDComp=false;
    this.refreshMDList();
  }

  refreshMDList(){
    this.service.getMDList().subscribe(data=>{
      this.DataList=data;
    });
  }

}
