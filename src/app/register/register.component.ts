import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PopupService} from '../services/utils/popup.service';
import {RegisterService} from '../services/auth/register.service';
import {Router} from '@angular/router';
import {NewUser} from '../services/interfaces/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  changeType: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private popupService: PopupService,
    private registerService: RegisterService,
    private router: Router,
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      edad: ['', Validators.required]
    });
  }

  togglePassword() {
    this.changeType = !this.changeType;
  }

  registrar(): void {
    if (this.registerForm.invalid)
      return;

    //Se puede hacer de dons maneras
    const nuevoUsuario: NewUser = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      nombre: this.registerForm.value.nombre,
      email: this.registerForm.value.email,
      edad: this.registerForm.value.edad
    }

    this.registerService.createUser(
      this.registerForm.value as NewUser
    ).subscribe({
      next: () => {
        this.popupService.showMessage(
          "success",
          "Registro",
          "Se ha registrado correctamente. "
        )
        // this.router.navigateByUrl("/login");
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
