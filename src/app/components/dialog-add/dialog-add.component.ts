import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-dialog-add',
  templateUrl: './dialog-add.component.html',
  styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {

  form!: FormGroup;

  usuario!: String;
  email!: String;
  nombres!: String;
  apellidos!: string;
  estado!: boolean;

  constructor(
    private alertasService:AlertasService,
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario) { }

  ngOnInit() {
    this.form = this.fb.group({
      usuario: [this.data.usuario, Validators.compose([Validators.required, Validators.maxLength(20)])],
      email: [this.data.email, Validators.compose([Validators.required, Validators.email])],
      nombres: [this.data.nombres, Validators.compose([Validators.required, Validators.maxLength(100)])],
      apellidos: [this.data.apellidos, Validators.compose([Validators.required, Validators.maxLength(100)])],
      estado: [this.data.estado, Validators.compose([Validators.required])],
    });
  }

  save() {
    const { value, valid } = this.form;

    let primeraletra!: number;

    if (valid) {

      try {
        primeraletra = value.usuario.substring(0, 1);
      } catch (Exception) {

      }

      if (typeof primeraletra !== 'string') {
        this.alertasService.alertaWarning();
      } else {
        this.alertasService.alertasuccess();
        console.log(value);
        this.dialogRef.close(value);
      }
    }
  }

  cerrar() {
    this.dialogRef.close();
  }

  stringIsValid(myString: string): boolean {
    return typeof myString === 'string';
  }

}

export class Usuario {
  constructor(public usuario: string, public email: string, public nombres: string, public apellidos: string, public estado: boolean) {
  }
}
