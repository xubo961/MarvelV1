import { Component, OnInit } from '@angular/core';
import { PopupService } from '../services/utils/popup.service';
import { SeriesService } from '../services/marvel/series.service';
import {Series} from '../services/interfaces/series';
import {FavoritosService} from '../services/marvel/favoritos.service';
import {LoginService} from '../services/auth/login.service';
import {LoginUser} from '../services/interfaces/usuario';

@Component({
  selector: 'app-marveli-list',
  templateUrl: './marveli-list.component.html',
  styleUrl: './marveli-list.component.scss'
})
export class MarveliListComponent implements OnInit {

  seriesMarvel: Series[] = [];
  constructor(
    private popupService: PopupService,
    private seriesService: SeriesService,
    private favoritosService: FavoritosService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.popupService.loading("Cargando datos", "Por favor espere...")
    this.seriesService.getAllSeries().subscribe({
      next: response => {
        this.seriesMarvel = response.data.results;
        this.popupService.close();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  addFavorito(idFavorito: number) {
    const usuario:LoginUser|null = this.loginService.getUser();
    if (usuario?.id) {
      this.favoritosService.addFavorto(usuario.id, idFavorito).subscribe({
        next: response => {
          this.popupService.showMessage(
            "success",
            "Añadidio a favoritos",
            "Se ha añadidio tu serie a favoritos corréctamente"
          )
        },
        error: err => {
          this.popupService.showMessage(
            "error",
            "Ops. Error al añadir favoritos",
            "Algo ha salido mal. Error: " + err
          )
        }
      })
    }
  }
}
