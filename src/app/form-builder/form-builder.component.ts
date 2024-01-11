import {Component, OnInit, Input} from '@angular/core';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ListEntry } from '../interface/elementData';
import { NgFor, NgIf } from '@angular/common';


import {MatTableModule} from '@angular/material/table';


/** @title Form field with label */
@Component({
  selector: 'form-builder',
  templateUrl: 'form-builder.component.html',
  styleUrls: ['form-builder.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    ClipboardModule,
    MatSnackBarModule,
    NgFor, NgIf
  ],
})

// const ELEMENT_DATA: ListEntry[] = [
//   {ElementName: "dlfk", ElementType: 'Hydrogen', Options: ["this"], Required: true},
  
// ];

export class FormFieldLabelExample {

  toggle_option : boolean = false;
  show_answer : boolean = true;
  constructor (private formBuilder:FormBuilder){}
  Options: string[] = [];
  addToHtml:string = "";
  formData!: FormGroup;
  flag: boolean = false;
  rowMyHtml:string = `<form style="display:flex; flex-direction:column; gap:5px; border:2px solid gray; border-radius:5px;">\n`;
  rowHtml: string = "";
  tempHtml : string = "";
  
  formDataArray : ListEntry[] = [];

  displayedColumns: string[] = ['ElementName', 'ElementType', 'Options', 'Required' ];
  // dataSource = ELEMENT_DATA;
  


  ngOnInit(){
    this.formData = this.formBuilder.group({
      ElementName: ['',[Validators.required, Validators.maxLength(20)]],
      ElementType: ['', [Validators.required]],
      Required:[true, [Validators.required]],
      option:[''],
    });
  }
  saveForm(){

    if(this.formData.valid){
      this.flag = true;
    }
      let obj: ListEntry = {
        ElementName: this.formData.value.ElementName,
        ElementType: this.formData.value.ElementType,
        Required: this.formData.value.Required,
        Options: this.Options,

      };

      this.formDataArray.push(obj);
      this.Options = [];
      this.formData.reset();
      this.toggle_option = false;
    // else{
    //   alert("form data invalid");
    // }

  }

  handleReset(){
    this.formData.reset();
    this.toggle_option = false;
  }
  handleSelect(){
    this.Options = [];
    if(this.formData.value.ElementType === 'select' || this.formData.value.ElementType==='radio'){
      this.toggle_option = true;
    }
    else{
      this.toggle_option = false;
    }
  }

  handleOptions(){
    this.Options.push(this.formData.value.option);
    this.formData.get("option")?.reset();
  }
 
  formPreview(){

    const xyz:any = this.handleGenerateForm();
    const pageHtml = `<div style="display:flex; align-items:center; justify-content:center; min-height:70vh; padding:10px;">${xyz}</div>`;

    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(pageHtml);
    } else {
      alert('Unable to open a new window. Please check your browser settings.');
    }
  }

  handleGenerateForm():any{
    this.formDataArray.forEach((element, i) => {
      if(element.ElementType==="text" || element.ElementType==="email" || element.ElementType ==="password"){
        this.tempHtml = `<label>${element.ElementName}</label>\n`
        this.tempHtml += `<input type=${element.ElementType} ${element.Required?"required":""}></input> \n <br>\n`;
      }
      else if(element.ElementType ==="select"){
        this.tempHtml = `<label>${element.ElementName}</label>\n`
        this.tempHtml += '<select>';
        element.Options.forEach((ele)=>{
          this.tempHtml += `<option value=${ele}>${ele}</option>`;
        })
        this.tempHtml += `</select>\n<br>\n`
      }
      else{
        this.tempHtml = `<label>${element.ElementName}</label>`;
        element.Options.forEach((ele)=>{
          this.tempHtml += `<input type='radio' name=radio${i}></input>`;
          this.tempHtml += `<label>${ele}</label>`;
        })
        this.tempHtml += "\n";
      }
      this.rowMyHtml += this.tempHtml;

    });

    this.rowMyHtml += "<button type='submit'>submit</button>\n<br>\n</form>"
    this.rowHtml = this.rowMyHtml;
    this.rowMyHtml = `<form style="display:flex; flex-direction:column; gap:5px; border:2px solid gray; border-radius:5px; padding:10px;">\n`;
    return this.rowHtml;
    
  }
}

