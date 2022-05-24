import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroComponent } from './erro/erro.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { InicioComponent } from './page/Início/inicio.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "erro", component: ErroComponent},
  {path: "login", component: LoginComponent},
  {path: "news", component: NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
