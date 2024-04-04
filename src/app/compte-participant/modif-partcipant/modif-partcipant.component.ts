


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './password-validator.component';
import { UserService } from 'app/API_service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'app/models/user';


@Component({
  selector: 'app-modif-partcipant',
  templateUrl: './modif-partcipant.component.html',
  styleUrls: ['./modif-partcipant.component.css']
})
export class ModifPartcipantComponent implements OnInit{
   constructor(private route:ActivatedRoute,private userservice:UserService){}
  user!:User;
   userid!:any;
   errors: any= [];
   isLoading: boolean = false;
   ngOnInit(): void {
    this.userid=this.route.snapshot.paramMap.get('id');
    alert(this.userid);
    this.userservice.getuser(this.userid).subscribe(res =>{
      console.log(res);
      this.user=res.user ;
    });
   }
   update(){
var inputdata={
  nom:this.user.nom,
  prenom:this.user.prenom,
  login:this.user.login,
  password:this.user.password,
  email:this.user.email,
  companyid:this.user.company_id

}
this.userservice.update(inputdata,this.userid).subscribe({
  next : (res:any)=> {
console.log(res);
  },
  
      error: (err: any) => {
        console.error('Error loading users:', err);
        this.errors = err.error.errors;
        
      }
    });
  } 
}