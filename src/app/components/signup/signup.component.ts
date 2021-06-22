import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
 import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private http: HttpClient,
    private router:Router,
    private signupservice:SignupService) { }

   
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      first_name: ['', [Validators.required,Validators.minLength(3),  ]],
 
      last_name: ['',[Validators.required,  ]],

    
      dob: ['',[Validators.required, ]],

      address: ['',[Validators.required,  ]],


      phone_number: ['', [Validators.required,  ]],

      
      email: ['', [Validators.required, Validators.email,]],
      
      password: ['', [Validators.required, ]],

      driving_license: ['', [Validators.required,  ]],


    });
  }
  

  get first_name() {
    return this.userForm.get("first_name");
  }

  get last_name() {
    return this.userForm.get("last_name");
  }
  
  get dob() {
    return this.userForm.get("dob");
  }
  get address() {
    return this.userForm.get("address");
  }
  get phone_number() {
    return this.userForm.get("phone_number");
  }
  get email() {
    return this.userForm.get("email");
  }
  
  get password() {
    return this.userForm.get("password");
  }
  get driving_license() {
    return this.userForm.get("driving_license");
  }

  clear() {
    this.userForm.reset();
    //this.username.setValue("");
  }
  onSubmit() {
    console.log(this.userForm.value);

    // let data={
    //   id:57,
    // address: "123 main",
    // dob: "2021-05-08",
    // role:"customer",
    // driving_license: "zxcvb12",
    // email: "srujans@123",
    // first_name: "srujans",
    // last_name: "kumars",
    // created_date:"23-05-2020",
    // is_active:"1",
    // password: "pavan123",
    // phone_number: "9999955555"
    // }
    // this.http.post('http://localhost:3000/register',JSON.stringify(data) ,httpOptions).subscribe(res =>{

    // console.log(res);
    //  if(res['status'] == 200){
    //   console.log("register")
    //   alert("successfully Registered")
    //    this.router.navigate(['/home']);

  // }
    this.signupservice.register(this.userForm.value)
      .subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
        
      );
    }

}