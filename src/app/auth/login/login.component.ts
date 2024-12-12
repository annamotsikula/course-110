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
    userName: new FormControl(null, [Validators.required]),
    pwd: new FormControl(null, [Validators.required]),
  })

  login() {
    console.log(this.authForm)
    if(this.authForm.valid) {
      const { userName, pwd } = this.authForm.value
      if(!!userName && !!pwd) {
        this._authService.authUser(userName, pwd).subscribe((res) => {
          console.log(res)
          // this._router.navigate(['/products'])
        })
      }
    }
  }

}
