import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeParticipantComponent } from './liste-participant/liste-participant.component';
import { AjoutPartcipantComponent } from './ajout-partcipant/ajout-partcipant.component';
import { ModifPartcipantComponent } from './modif-partcipant/modif-partcipant.component';
import { SupprimerPartcipantComponent } from './supprimer-partcipant/supprimer-partcipant.component';
import { RouterModule } from '@angular/router';
import { FormRoutes } from 'app/form/form.routing';
import { TagInputModule } from 'ngx-chips';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from 'app/API_service/user.service';
import { AppComponent } from 'app/app.component';


@NgModule({
  declarations: [
    ListeParticipantComponent,
    AjoutPartcipantComponent,
    ModifPartcipantComponent,
    SupprimerPartcipantComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FormRoutes),
    FormsModule,
    TagInputModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [UserService], 
  bootstrap: [AppComponent]
})
export class CompteParticipantModule { }
