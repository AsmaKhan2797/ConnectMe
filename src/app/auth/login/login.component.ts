import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserCredentials } from '../models/UserCredentials';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  userCredentials: UserCredentials
  loginForm: FormGroup | undefined;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.userCredentials = {}
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({});
  }

  login() {
    this.authService.login(this.userCredentials).subscribe((data) => {
      if (null != data.userId) {
        this.route();
      }
    });
  }

  route(): void {
    this.router.navigateByUrl("/home");
  }

}
