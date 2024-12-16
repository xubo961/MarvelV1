import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() {
  }

  showMessage(
    type: 'success' | 'error' | 'warning' | 'info' | 'question',
    tittle: string, message: string) {
    Swal.fire({
      title: tittle,
      text: message,
      icon: type,
      confirmButtonText: 'Cerrar',
    })
  }

  loading(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      timerProgressBar: true,
      didOpen() {
        Swal.showLoading()
      }
    })
  }

  close() {
    Swal.close()
  }
}
