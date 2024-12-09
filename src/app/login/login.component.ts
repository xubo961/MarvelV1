import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PopupService} from '../services/utils/popup.service';

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
    private popupService: PopupService
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
    if (this.loginForm.invalid) {
      return;
    } else {

      this.popupService.showMessage(
        "success",
        "Iniciar sesión",
        "Se ha iniciadio sesión correctamente.",
      )
    }
  }

}
