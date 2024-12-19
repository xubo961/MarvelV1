import {Component, OnInit} from '@angular/core';
import {FavoritosService} from '../services/marvel/favoritos.service';
import {LoginUser} from '../services/interfaces/usuario';
import {LoginService} from '../services/auth/login.service';
import {PopupService} from '../services/utils/popup.service';
import {SeriesService} from '../services/marvel/series.service';
import {SerieFavorito, Series} from '../services/interfaces/series';

@Component({
  selector: 'app-favoritos-marvel',
  templateUrl: './favoritos-marvel.component.html',
  styleUrl: './favoritos-marvel.component.scss'
})
export class FavoritosMarvelComponent implements OnInit {

  seriesMarvel: Series[] = [];
  favoritosMarvel: Series[] = [];

  constructor(
    private favoritosService: FavoritosService,
    private loginService: LoginService,
    private popupService: PopupService,
    private seriesService: SeriesService,
  ) {
  }

  ngOnInit() {
    this.popupService.loading("Cargando datos", "Por favor espere...")
    this.seriesService.getAllSeries().subscribe({
      next: response => {
        this.seriesMarvel = response.data.results;
        this.popupService.close();
      },
      error: err => {
        console.log(err);
      },

      complete: () => {
        const usuario = this.loginService.getUser();

        if (usuario?.id) {
          this.favoritosService.getAll(usuario.id).subscribe({
            next: (response) => {
              const respuestaSpring: SerieFavorito[] = response

              this.favoritosMarvel = this.seriesMarvel.filter(serieDeMarvel =>
                respuestaSpring.some(serieGuardadaSpring => serieGuardadaSpring.serieMarvel == serieDeMarvel.id)
              )
                .map(favorito => {

                  const match = respuestaSpring.find(spring => spring.serieMarvel == favorito.id)
                  return {...favorito, idSpring: match?.id}
                })
            },
            error: (error) => {
              console.log(error);
            }
          })
        }
      }
    })
  }

  deleteFavorito(idFavorito: number|undefined) {
    if (idFavorito) {
      const usuario: LoginUser | null = this.loginService.getUser();
      if (usuario?.id) {
        this.favoritosService.deleteFavorito(usuario.id, idFavorito).subscribe({
          next: response => {
            this.popupService.showMessage(
              "success",
              "Elminado de favoritos",
              "Se ha eliminado tu serie de favoritos corréctamente"
            )
            setTimeout(() => {
              this.popupService.close();
              window.location.reload();
            },1500)
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
}
