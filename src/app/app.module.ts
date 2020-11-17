import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BioinfoComponent } from './bioinfo/bioinfo.component';
import { ShowBiComponent } from './bioinfo/show-bi/show-bi.component';
import { AddEditBiComponent } from './bioinfo/add-edit-bi/add-edit-bi.component';
import { ContactComponent } from './contact/contact.component';
import { ShowCComponent } from './contact/show-c/show-c.component';
import { AddEditCComponent } from './contact/add-edit-c/add-edit-c.component';
import { FilenamesComponent } from './filenames/filenames.component';
import { ShowFnComponent } from './filenames/show-fn/show-fn.component';
import { AddEditFnComponent } from './filenames/add-edit-fn/add-edit-fn.component';
import { MetadataComponent } from './metadata/metadata.component';
import { ShowMdComponent } from './metadata/show-md/show-md.component';
import { AddEditMdComponent } from './metadata/add-edit-md/add-edit-md.component';
import { UsersComponent } from './users/users.component';
import { ShowUComponent } from './users/show-u/show-u.component';
import { AddEditUComponent } from './users/add-edit-u/add-edit-u.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BioinfoComponent,
    ShowBiComponent,
    AddEditBiComponent,
    ContactComponent,
    ShowCComponent,
    AddEditCComponent,
    FilenamesComponent,
    ShowFnComponent,
    AddEditFnComponent,
    MetadataComponent,
    ShowMdComponent,
    AddEditMdComponent,
    UsersComponent,
    ShowUComponent,
    AddEditUComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
