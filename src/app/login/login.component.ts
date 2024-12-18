import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopupService} from '../services/utils/popup.service';
import {LoginService} from '../services/auth/login.service';
import {LoginUser} from '../services/interfaces/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  changeType: boolean = false;
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private popupService: PopupService,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  togglePassword(): void {
    this.changeType = !this.changeType;
  }

  enviar(): void {

    this.loginService.loginv2(this.loginForm.value as LoginUser).subscribe({
      next: response => {
        this.loginService.setUser(this.loginForm.value as LoginUser, response.user_id);

        this.popupService.loading(
          "Iniciar sesión",
          "Se ha iniciado sesión correctamente. espere unos segundos..."
        )

        setTimeout(() => {
            this.popupService.close()
            this.router.navigate(['/users'])
          },
          2000)
      },
      error: error => {
        if (error.status === 401) {
          this.popupService.showMessage(
            "error",
            "Oops... Contraseña incorrecta",
            "Inténtalo de nuevo"
          )
        } else {
          this.popupService.showMessage(
            "error",
            "Oops... Algo salió mal",
            "Inténtalo de nuevo"
          )
        }

      }
    })

    // if (this.loginForm.invalid) {
    //   return;
    // } else {
    //
    //   this.popupService.showMessage(
    //     "success",
    //     "Iniciar sesión",
    //     "Se ha iniciadio sesión correctamente.",
    //   )
    // }
  }
}
