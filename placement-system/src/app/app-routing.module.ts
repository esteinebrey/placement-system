import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { ApplicationComponent } from './application/application.component';
import { ViewApplicationsComponent } from './view-applications/view-applications.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'application', component: ApplicationComponent,canActivate:[AuthenticationGuardService] },
  { path: 'view-applications', component: ViewApplicationsComponent,canActivate:[AuthenticationGuardService] },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthenticationGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }