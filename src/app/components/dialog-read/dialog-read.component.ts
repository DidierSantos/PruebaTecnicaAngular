import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-read',
  templateUrl: './dialog-read.component.html',
  styleUrls: ['./dialog-read.component.css']
})
export class DialogReadComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogReadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario) { }

  ngOnInit() {
  }

  cerrar() {
    this.dialogRef.close();
  }

}

export class Usuario {
  constructor(public usuario: string, public email: string, public nombres: string, public apellidos: string, public estado: string) {
  }
}
