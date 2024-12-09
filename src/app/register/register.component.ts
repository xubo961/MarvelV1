import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  changeType: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  togglePassword() {
    this.changeType = !this.changeType;
  }

  enviar() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('Form Data:', formData);
    } else {
      console.log('Formulario inválido');
      this.registerForm.markAllAsTouched();
    }
  }
}
