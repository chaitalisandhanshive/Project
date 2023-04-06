import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  repeatPass: string='none';
   
  displayMsg :string='';
  isAccountCreated:boolean=false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  

   registerForm= new FormGroup({
   FullName:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z].*")]),
   FathersName:new FormControl(""),
   MobileNumber:new FormControl(" ",[Validators.required,Validators.pattern("[0-9]*"),
   Validators.minLength(10),Validators.maxLength(10)]),
   Email:new FormControl(" ",[Validators.required,Validators.email]),
   AadharNumber:new FormControl(""),
   DateOfBirth:new FormControl(""), 
   Address:new FormControl(""),
   Occupation:new FormControl(""),
   AnnualIncome:new FormControl(""), 
   Password:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
   ConfirmPassword:new FormControl(""),
     });
     registerSubmitted()
     {
      if(this.Password.value == this.ConfirmPassword.value){
         console.log(this.registerForm.valid);
         this.repeatPass='none' 
      // }
      //  {
      //    console.log("this.registerForm.Valid");
        this.repeatPass='none';
         this.authService
         .registerUser([
         this.registerForm.value.FullName as string,
         this.registerForm.value.FathersName as string ,
         this.registerForm.value.MobileNumber as string,
         this.registerForm.value.Email as string,
         this.registerForm.value.AadharNumber as string,
         this.registerForm.value.DateOfBirth as string,
         this.registerForm.value.Address as string,
         this.registerForm.value.Occupation as string,
         this.registerForm.value.AnnualIncome as string,
         this.registerForm.value.Password as string,
         this.registerForm.value.ConfirmPassword as string,
         


          ]).subscribe((res) =>{
         if(res=='Success'){
           this.displayMsg = 'Account Created Sucessfully!';
           this.isAccountCreated = true;
        }
        else if (res == 'AlreadyExists'){
         this.displayMsg='Account Already Exists ,Try Another Email.';
        }

            console.log(res);
         })
         
         }
    
    else
        {
           this.repeatPass='inline';
        }
      }
      

        get FullName():FormControl
        {
           return this.registerForm.get("FullName") as FormControl;
        }
          get FathersName():FormControl
          {
             return this.registerForm.get("FathersName") as FormControl;
          }
          get MobileNumber():FormControl
          {
             return this.registerForm.get("MobileNumber") as FormControl;
          }
          get Email():FormControl
          {
             return this.registerForm.get("Email") as FormControl;
          }
          get AadharNumber():FormControl
          {
             return this.registerForm.get("AadharNumber") as FormControl;
          }
          get DateOfBirth():FormControl
          {
             return this.registerForm.get("DateOfBirth") as FormControl;
          }
          get Address():FormControl
          {
          return this.registerForm.get("Address") as FormControl;
          }
          get Occupation():FormControl
          {
             return this.registerForm.get("Occupation") as FormControl;
          }
            
          get AnnualIncome():FormControl
          {
            return this.registerForm.get("AnnualIncome") as FormControl;
          }
          get Password():FormControl
          {
             return this.registerForm.get("Password") as FormControl;
          }
          get ConfirmPassword():FormControl
          {
            return this.registerForm.get("ConfirmPassword") as FormControl;
         }
      }
          
         
    




  





