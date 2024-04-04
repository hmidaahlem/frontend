import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/API_service/user.service';
import { Router } from '@angular/router';
import { User } from 'app/models/user';

@Component({
  selector: 'app-ajout-partcipant',
  templateUrl: './ajout-partcipant.component.html',
  styleUrls: ['./ajout-partcipant.component.css']
})
export class AjoutPartcipantComponent {

  nom: string;
  prenom: string;
  login: string;
  password: string;
  email: string;
  company_id: number;
  errors: any = [];
  isLoading: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  saveUser(): void {
    this.isLoading = true;
    const userData: User = {
      nom: this.nom,
      prenom: this.prenom,
      login: this.login,
      password: this.password,
      email: this.email,
      company_id: this.company_id,
      id: 0, 
      created_at: '', 
      updated_at: '' 
    };
    this.userService.saveUser(userData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        this.isLoading = false;
        // Rediriger vers une autre page après l'enregistrement réussi si nécessaire
        this.router.navigate(['/compte-participant']);
      },
      error: (err: any) => {
        console.error('Error loading users:', err);
        this.errors = err.error.errors;
        this.isLoading = false;
      }
    });
  }  
}
