import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { PopupComponent } from './pages/popup/popup.component';
const routes: Routes = [
  { path: '', component: MainViewComponent }
  // , {
  //   path: 'pop-up', component: PopupComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
