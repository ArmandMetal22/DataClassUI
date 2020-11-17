import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-bi',
  templateUrl: './show-bi.component.html',
  styleUrls: ['./show-bi.component.css']
})
export class ShowBiComponent implements OnInit {

  constructor(private service:SharedService) { }

  BioList:any=[];

  ModalTitle:string;
  ActivateAddEditBioComp:boolean=false;
  bi:any;

  ngOnInit(): void {
    this.refreshBioList();
  }

  addClick(){
    this.bi={
      BioID:0,
      FName:"",
      LName:"",
      Age:0,
      Gender:"",
      DateOfBirth:"",
      idNumber:""
    }
    this.ModalTitle="Add BioInfo";
    this.ActivateAddEditBioComp=true;
  }

  editClick(item){
    this.bi=item;
    this.ModalTitle="Edit BioInfo";
    this.ActivateAddEditBioComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure???')){
      this.service.deleteBio(item.BioID).subscribe(data=>{
        alert(data.toString());
        this.refreshBioList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditBioComp=false;
    this.refreshBioList();
  }

  


  refreshBioList(){
    this.service.getBioList().subscribe(data=>{
      this.BioList=data;
    });
  }

}
