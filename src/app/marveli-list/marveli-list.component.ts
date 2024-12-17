import { Component, OnInit } from '@angular/core';
import { PopupService } from '../services/utils/popup.service';
import { SeriesService } from '../services/marvel/series.service';
import {Series} from '../services/interfaces/series';

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
}
