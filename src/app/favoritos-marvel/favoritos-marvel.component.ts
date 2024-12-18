import {Component, OnInit} from '@angular/core';
import {FavoritosService} from '../services/marvel/favoritos.service';
import {LoginUser} from '../services/interfaces/usuario';
import {LoginService} from '../services/auth/login.service';

@Component({
  selector: 'app-favoritos-marvel',
  templateUrl: './favoritos-marvel.component.html',
  styleUrl: './favoritos-marvel.component.scss'
})
export class FavoritosMarvelComponent implements OnInit {

  constructor(
    private favoritosService: FavoritosService,
    private loginService: LoginService,
  ) {
  }

  ngOnInit() {
    const usuario: LoginUser | null = this.loginService.getUser();

    if (usuario?.id) {
      this.favoritosService.getAll(usuario.id).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      })
    }

  }

}
