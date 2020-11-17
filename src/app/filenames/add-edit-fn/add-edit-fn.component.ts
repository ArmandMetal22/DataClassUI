import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-fn',
  templateUrl: './add-edit-fn.component.html',
  styleUrls: ['./add-edit-fn.component.css']
})
export class AddEditFnComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() fn:any;
  FileID:string;
  PictureFile:string;
  TextFile:string;
  ExcelFile:string;


  ngOnInit(): void {
    this.FileID=this.fn.FileID;
    this.PictureFile=this.fn.PictureFile;
    this.TextFile=this.fn.TextFile;
    this.ExcelFile=this.fn.ExcelFile;
  }

  addFile(){
    var val = {FileID:this.FileID,
                PictureFile:this.PictureFile,
                TextFile:this.TextFile,
                ExcelFile:this.ExcelFile };
    this.service.addFN(val).subscribe (res=>{
      alert(res.toString());
    });
  }

  updateFile(){
    var val = {FileID:this.FileID,
                PictureFile:this.PictureFile,
                TextFile:this.TextFile,
                ExcelFile:this.ExcelFile };
    this.service.updateFN(val).subscribe (res=>{
      alert(res.toString());
    });
  }

}
