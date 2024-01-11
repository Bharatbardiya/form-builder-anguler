import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormFieldLabelExample } from './form-builder/form-builder.component';
import { FormHistoryComponent } from './form-history/form-history.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { AboutCompoComponent } from './about-compo/about-compo.component';
@NgModule({
  declarations: [
    AppComponent,
    FormHistoryComponent,
    FormPreviewComponent,
    AboutCompoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormFieldLabelExample,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

  // exports:[
  //   FormFieldLabelExample
  // ]
  
})
export class AppModule { }
