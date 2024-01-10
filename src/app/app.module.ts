import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormBuilder, FormsModule } from '@angular/forms';
import { FormFieldLabelExample } from './form-builder/form-builder.component';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormFieldLabelExample,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],

  // exports:[
  //   FormFieldLabelExample
  // ]
  
})
export class AppModule { }
