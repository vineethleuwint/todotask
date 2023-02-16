import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './pages/board/board.component';
import { AddInputComponent } from './pages/add-input/add-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    BoardComponent,
    AddInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
