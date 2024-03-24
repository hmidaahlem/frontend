
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PasswordValidation } from './password-validator.component';

declare interface User {
    text?: string;
    email?: string; //  must be valid email format
    password?: string; // required, value must be equal to confirm password.
    confirmPassword?: string; // required, value must be equal to password.
    number?: number; // required, value must be equal to password.
    url?: string;
    idSource?: string;
    idDestination?: string;
  
    nom?: string;
    prenom?: string;
    login?: string;
    companyNom?: string;
    companyAdresse?: string;
    companySubdomaine?: string;
    companyLogo?: File;
}

@Component({
  selector: 'app-ajout-admin',
  templateUrl: './ajout-admin.component.html',
  styleUrls: ['./ajout-admin.component.css']
})

export class AjoutAdminComponent{

    public register: User;
    public login: User;
    public typeValidation: User;

    ngOnInit() {
        this.register = {
            email: '',
            password: '',
            confirmPassword: '',
            nom: '',
            prenom: '',
            login: '',
            companyNom: '',
            companyAdresse:'',
            companySubdomaine: '',
            companyLogo: null,
        }
        this.typeValidation = {
            text: '',
            email: '',
            idSource: '',
            idDestination: '',
            url: ''
        }
    }

    save(model: User, isValid: boolean) {
    // call API to save customer
        if(isValid){
            console.log(model, isValid);
        }
    }
    save1(model: User, isValid: boolean) {
    // call API to save customer
        if(isValid){
            console.log(model, isValid);
        }
    }
    save2(model: User, isValid: boolean) {
    // call API to save customer
        if(isValid){
            console.log(model, isValid);
        }
    }
    onSubmit(value: any):void{
        console.log(value);
    }
}
