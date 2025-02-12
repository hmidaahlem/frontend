import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { ModifAdminComponent } from './modif-admin/modif-admin.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';
import { SupprimerAdminComponent } from './supprimer-admin/supprimer-admin.component';
import { RouterModule } from '@angular/router';
import { FormRoutes } from 'app/form/form.routing';
import { FormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListeAdminComponent,
    ModifAdminComponent,
    AjoutAdminComponent,
    SupprimerAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FormRoutes),
    FormsModule,
    TagInputModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class CompteAdminModule { }
