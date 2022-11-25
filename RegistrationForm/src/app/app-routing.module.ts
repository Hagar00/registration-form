import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './Components/register-form/register-form.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';

const routes: Routes = [
  {path:"" , component:RegisterFormComponent},
  {path:"RegisterForm" , component:RegisterFormComponent},
  {path:"welcome" , component:WelcomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
