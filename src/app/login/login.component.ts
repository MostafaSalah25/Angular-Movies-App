import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService , private _Router: Router) { }
  error:string = '';
  loginForm: FormGroup = new FormGroup({

    email:new FormControl(null , [Validators.required  ,  Validators.email ]),
    password:new FormControl(null , [Validators.required ,  Validators.pattern(/^[A-Z][a-z]{2,5}$/)]  ),

  })
  
  submitLogin(  formInfo:FormGroup   ){
    this._AuthService.login(formInfo.value).subscribe( (response) => { 
      

      if (response.message == "success"){

        localStorage.setItem('userToken' , response.token );
        this._AuthService.setUserData();
        this._Router.navigate(['/home']);
      }
    
      else{
        this.error = 'Email  or pass is wrong ';
    
      }

    } );
  }
  ngOnInit(): void {
  }

}
