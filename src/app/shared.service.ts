import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http://localhost:54835/api";
readonly PhotoUrl = "http://localhost:54835/Photos";

  constructor(private http:HttpClient) { }

  /*========================================================== */
  /*BEGIN BIOINFO METHODS */
  getBioList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/BioInfo');
  }

  addBio(val:any){
    return this.http.post(this.APIUrl+'/BioInfo',val);
  }

  updateBio(val:any){
    return this.http.put(this.APIUrl+'/BioInfo',val);
  }

  deleteBio(val:any){
    return this.http.delete(this.APIUrl+'/BioInfo/'+ val);
  }

  /*END BIOINFO METHODS */
  /*========================================================== */


  /*========================================================== */
  /*BEGIN CONTACT INFO METHODS */
  getContactList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Contact');
  }

  addContact(val:any){
    return this.http.post(this.APIUrl+'/Contact',val);
  }

  updateContact(val:any){
    return this.http.put(this.APIUrl+'/Contact',val);
  }

  deleteContact(val:any){
    return this.http.delete(this.APIUrl+'/Contact/'+ val);
  }
  /*END CONTACT INFO METHODS */
  /*========================================================== */


  /*========================================================== */
  /*BEGIN FILE INFO METHODS */
  getFNList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/FileNames');
  }

  addFN(val:any){
    return this.http.post(this.APIUrl+'/FileNames',val);
  }

  updateFN(val:any){
    return this.http.put(this.APIUrl+'/FileNames',val);
  }

  deleteFN(val:any){
    return this.http.delete(this.APIUrl+'/FileNames/'+ val);
  }
  /*END FILE INFO METHODS */
  /*========================================================== */


  /*========================================================== */
  /*BEGIN METADATA INFO METHODS */
  getMDList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Metadata');
  }

  addMD(val:any){
    return this.http.post(this.APIUrl+'/Metadata',val);
  }

  updateMD(val:any){
    return this.http.put(this.APIUrl+'/Metadata',val);
  }

  deleteMD(val:any){
    return this.http.delete(this.APIUrl+'/Metadata/'+ val);
  }
  /*END METADATA INFO METHODS */
  /*========================================================== */


  /*========================================================== */
  /*BEGIN USERS INFO METHODS */
  getUserList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Users');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'/Users',val);
  }

  updateUser(val:any){
    return this.http.put(this.APIUrl+'/Users',val);
  }

  deleteUser(val:any){
    return this.http.delete(this.APIUrl+'/Users/'+ val);
  }
  /*END USERS INFO METHODS */
  /*========================================================== */

  /*========================================================== */
  /*========================================================== */
  /*========================================================== */
  /*BEGIN PHOTO METHODS */

  uploadPhoto(val:any){
    return this.http.post(this.APIUrl+ '/Metadata/SaveFile',val);
  }
}
