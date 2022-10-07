import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject(null);

  constructor( private _HttpClient: HttpClient  , private _Router:Router ) { 
    if(localStorage.getItem('userToken') != null){ // stay loggedin if refresh 
      
      this.setUserData(); // so userData != null 
    }

    this.userData.subscribe( () => {
      if (this.userData.getValue() != null) {
        // setTimeout( ()=> { this.logout() }, 5000) // log out after login 
      }
    })
  }

  
  register(userData : object):Observable<any> 
  { 
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup' , userData );
  }
  
  login(userDetailes : object):Observable<any> 
  { 
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin' , userDetailes );
  }

  setUserData(): void  {
  let decodedToken:any =  jwtDecode(  JSON.stringify(localStorage.getItem('userToken')) ); 

  this.userData.next(decodedToken) ;
}


logout (): void {
  localStorage.removeItem('userToken');
  this.userData.next(null);
  this._Router.navigate(['/login']);
}
             
  


}
