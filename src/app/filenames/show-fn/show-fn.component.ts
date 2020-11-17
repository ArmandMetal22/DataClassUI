import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-fn',
  templateUrl: './show-fn.component.html',
  styleUrls: ['./show-fn.component.css']
})
export class ShowFnComponent implements OnInit {

  constructor(private service:SharedService) { }

  ModalTitle:string;
  ActivateAddEditFNComp:boolean=false;
  fn:any;

  FileList:any=[];

  ngOnInit(): void {
    this.refreshFNList();
  }

  addClick(){
    this.fn={
      FileID:0,
      PictureFile:"",
      TextFile:"",
      ExcelFile:""
    }
    this.ModalTitle="Add FileNames Info";
    this.ActivateAddEditFNComp=true;
  }

  editClick(item){
    this.fn=item;
    this.ModalTitle="Edit FileNames Info";
    this.ActivateAddEditFNComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure???')){
      this.service.deleteFN(item.FileID).subscribe(data=>{
        alert(data.toString());
        this.refreshFNList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditFNComp=false;
    this.refreshFNList();
  }


  refreshFNList(){
    this.service.getFNList().subscribe(data=>{
      this.FileList=data;
    });
  }

}
