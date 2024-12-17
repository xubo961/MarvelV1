import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';
import {LayoutConHeaderComponent} from './layout-con-header/layout-con-header.component';
import {PanelControlComponent} from './panel-control/panel-control.component';
import {RegisterComponent} from './register/register.component';
import {UsersComponent} from './users/users.component';
import {isLoggedGuard} from './services/guards/is-logged.guard';
import {FormLayoutComponent} from './form-layout/form-layout.component';
import {MarveliListComponent} from './marveli-list/marveli-list.component';

const routes: Routes = [
  { path: '', redirectTo: "login" ,pathMatch: "full" },
  {
    path:"", component:FormLayoutComponent, children:[

      {path:"login",component: LoginComponent},
      {path:"register",component: RegisterComponent,}
    ]
  },
  {path: "", component: LayoutConHeaderComponent, canActivate: [isLoggedGuard], children:[
      {path:"users", component: UsersComponent},
      {path:"marvel", component: MarveliListComponent},
    ]}
  // {
  //    path: 'app', component: LayoutConHeaderComponent, children: [
  //      { path: "", redirectTo: "panel-control", pathMatch: "full" },
  //      { path: "panel-control", component: PanelControlComponent },
  //    ]
  //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
