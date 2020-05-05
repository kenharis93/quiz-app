import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
registerForm: FormGroup;


    constructor(private auth: AuthService) {}

ngOnInit(){

    this.registerForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });
}

register(registerForm){
    console.log(registerForm);
    this.auth.register(registerForm);
}

}