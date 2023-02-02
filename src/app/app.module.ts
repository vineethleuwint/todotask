import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './pages/board/board.component';

@NgModule({
  declarations: [AppComponent, MainViewComponent, BoardComponent],
  imports: [BrowserModule, AppRoutingModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
