import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  authForm = new FormGroup({
    userName: new FormControl('emilys', [Validators.required]),
    pwd: new FormControl('emilyspass', [Validators.required]),
    rememberUser: new FormControl(false)
  })

  login() {
    if(this.authForm.valid) {
      const { userName, pwd, rememberUser } = this.authForm.value
      if(!!userName && !!pwd) {
        this._authService.authUser({username: userName, pwd, saveLogInInfo: rememberUser || false }).subscribe((res) => {
          this._router.navigate(['/home']);
        })
      }
    }
  }

}
