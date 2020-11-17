import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BioinfoComponent} from './bioinfo/bioinfo.component';
import {ContactComponent} from './contact/contact.component';
import {FilenamesComponent} from './filenames/filenames.component';
import {MetadataComponent} from './metadata/metadata.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path:'bioinfo',component:BioinfoComponent},
  {path:'contact',component:ContactComponent},
  {path:'filenames',component:FilenamesComponent},
  {path:'metadata',component:MetadataComponent},
  {path:'users',component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
