import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { PanelControlComponent } from './panel-control/panel-control.component';
import { LayoutConHeaderComponent } from './layout-con-header/layout-con-header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {provideHttpClient, withInterceptors, withInterceptorsFromDi} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import {authInterceptor} from './services/interceptors/auth.interceptor';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { ModalAddUserComponent } from './modal-add-user/modal-add-user.component';
import { MarveliListComponent } from './marveli-list/marveli-list.component';
import { FavoritosMarvelComponent } from './favoritos-marvel/favoritos-marvel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelControlComponent,
    LayoutConHeaderComponent,
    RegisterComponent,
    UsersComponent,
    FormLayoutComponent,
    BottomNavComponent,
    ModalAddUserComponent,
    MarveliListComponent,
    FavoritosMarvelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
