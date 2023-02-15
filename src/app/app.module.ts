// import { MatDatepickerModule } from '@angular/material/datepicker';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBodyComponent } from './pages/dialog-body/dialog-body.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './pages/popup/popup.component';
import { DatetimeComponent } from './pages/datetime/datetime.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    DialogBodyComponent,
    PopupComponent,
    DatetimeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule


    // DialogBodyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
