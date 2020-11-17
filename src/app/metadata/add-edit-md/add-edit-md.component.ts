import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-md',
  templateUrl: './add-edit-md.component.html',
  styleUrls: ['./add-edit-md.component.css']
})
export class AddEditMdComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() md:any;
  DataID:string;
  idNumber:string;
  FullName:string;
  Initials:string;
  email:string;
  PictureFile:string;
  TextFile:string;
  ExcelFile:string;

  FilePath:string;

  ngOnInit(): void {
    this.DataID=this.md.DataID;
    this.idNumber=this.md.idNumber;
    this.FullName=this.md.FullName;
    this.Initials=this.md.Initials;
    this.email=this.md.email;
    this.loadPhoto();
    this.TextFile=this.md.TextFile;
    this.ExcelFile=this.md.ExcelFile;
  }

  loadPhoto(){
    this.PictureFile=this.md.PictureFile;
    this.FilePath=this.service.PhotoUrl+this.PictureFile;
  }

  addData(){
    var val = {DataID:this.DataID,
                idNumber:this.idNumber,
                FullName:this.FullName,
                Initials:this.Initials,
                email:this.email,
                PictureFile:this.PictureFile,
                TextFile:this.TextFile,
                ExcelFile:this.ExcelFile };
    this.service.addMD(val).subscribe (res=>{
      alert(res.toString());
    });
  }

  updateData(){
    var val = {DataID:this.DataID,
                idNumber:this.idNumber,
                FullName:this.FullName,
                Initials:this.Initials,
                email:this.email,
                PictureFile:this.PictureFile,
                TextFile:this.TextFile,
                ExcelFile:this.ExcelFile };
    this.service.updateMD(val).subscribe (res=>{
      alert(res.toString());
    });
  }

  uploadPhoto(event){
    var file = event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);
    this.service.uploadPhoto(formData).subscribe((data:any)=>{
      this.PictureFile=data.toString();
      this.FilePath=this.service.PhotoUrl+this.PictureFile;
    })
  }

}
