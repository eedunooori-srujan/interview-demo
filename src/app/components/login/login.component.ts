import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(
    // private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
    
  

    private http: HttpClient
  ) { }
  
   

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

 
  
  onClickSubmit(data: { emailid: string; passwd: string; }) {
    //  alert("Entered Email id : " + data.emailid); 
    console.log(data)
    const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
  };
    this.http.post('http://localhost:3000/login',JSON.stringify(data) ,httpOptions).subscribe(res =>{
      console.log(res)
      if(res['status'] == 200){
         console.log("login")
        this.router.navigate(['/home']);
      }
      else{
        console.log("failed")
        alert("Invalid credentials");
      }
    }) 
  

  }
  }
  
  
  