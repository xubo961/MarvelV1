import {Component} from '@angular/core';
import {PopupService} from '../services/utils/popup.service';
import {LoginService} from '../services/auth/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class BottomNavComponent {

  constructor(
    private popupService: PopupService,
    private loginService: LoginService,
    private router: Router
  ) {
  }

  closeSesion(): void {
    this.popupService.loading("Cerrando sesión", "Por favor esepere");
    setTimeout(() => {
        this.popupService.close();
        this.loginService.deleteUser();
        this.router.navigate(['/login']);
      },
      2000)
  }

}
