import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormHistoryComponent } from './form-history/form-history.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { FormFieldLabelExample } from './form-builder/form-builder.component';
import { AboutCompoComponent } from './about-compo/about-compo.component';
const routes: Routes = [
  {
    path: 'form-history',
    component: FormHistoryComponent,
  },
  {
    path: 'form/:id',
    component: FormPreviewComponent,
  },
  {
    path: 'form-builder',
    component: FormFieldLabelExample,
  },
  {
    path:"",
    component: FormFieldLabelExample,
  },
  {
    path: 'about',
    component: AboutCompoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
