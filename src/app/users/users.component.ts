import {Component, OnInit} from '@angular/core';
import {PopupService} from '../services/utils/popup.service';
import {AllUser} from '../services/interfaces/usuario';
import {UserService} from '../services/auth/user.service';
import * as bootstrap from 'bootstrap';
import {Modal} from 'bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  allUsers: AllUser[] = [];
  showData: boolean = false;
  showModal: boolean = true;

  constructor(
    private popupService: PopupService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.popupService.loading("Cargando datos", "Por favor espera");
    this.userService.getAllUsers().subscribe({
      next: data => {

        if (this.allUsers.length <= 0) {
          this.showData = true;
        }
        this.popupService.close()
      },
      error: err => {
        console.log(err);
      }
    })

    //Aquí hacemos lo de cargar los datos
    //Cuando entremos en el next hacemos:

    //this.popupService.close();
  }

  addNewUser(): void {
    const modalElement:HTMLElement|null = document.getElementById('modalUser');
    if (modalElement) {
      const  modalInstance = new bootstrap.Modal(modalElement);
      if (!this.showModal) {
        modalInstance.show();
      }
    }
  }

}
