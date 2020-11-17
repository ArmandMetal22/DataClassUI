import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-bi',
  templateUrl: './add-edit-bi.component.html',
  styleUrls: ['./add-edit-bi.component.css']
})
export class AddEditBiComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() bi:any;
  BioID:string;
  FName:string;
  LName:string;
  Age:string;
  Gender:string;
  DateOfBirth:string;
  idNumber:string;

  ngOnInit(): void {
    this.BioID=this.bi.BioID;
    this.FName=this.bi.FName;
    this.LName=this.bi.LName;
    this.Age=this.bi.Age;
    this.Gender=this.bi.Gender;
    this.DateOfBirth=this.bi.DateOfBirth;
    this.idNumber=this.bi.idNumber;
  }

  addBio(){
    var val = {BioID:this.BioID,
                FName:this.FName,
                LName:this.LName,
                Age:this.Age,
                Gender:this.Gender,
                DateOfBirth:this.DateOfBirth,
                idNumber:this.idNumber };
    this.service.addBio(val).subscribe (res=>{
      alert(res.toString());
    });
  }

  updateBio(){
    var val = {BioID:this.BioID,
                FName:this.FName,
                LName:this.LName,
                Age:this.Age,
                Gender:this.Gender,
                DateOfBirth:this.DateOfBirth,
                idNumber:this.idNumber };
    this.service.updateBio(val).subscribe (res=>{
      alert(res.toString());
    });
  }

}
