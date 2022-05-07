import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicioComponent/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogAddComponent } from './components/dialog-add/dialog-add.component';
import { DialogReadComponent } from './components/dialog-read/dialog-read.component';
import { DialogUpdateComponent } from './components/dialog-update/dialog-update.component';
import { AlertasService } from './services/alertas.service'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DialogAddComponent,
    DialogReadComponent,
    DialogUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlertasService],
  bootstrap: [AppComponent]
})
export class AppModule { }