import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'

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

      //TODO validar si al convertir a número se revienta
      try {
        primeraletra = value.usuario.substring(0, 1);
      } catch (Exception) {

      }

      if (typeof primeraletra !== 'string') {
        Swal.fire({
          title: 'Información!',
          text: 'El usuario debe empezar por una letra',
          icon: 'warning',
          confirmButtonText: 'ok'
        });
      } else {
        Swal.fire({
          title: 'Correcto!',
          text: 'Usuario guardado correctamente',
          icon: 'success',
          confirmButtonText: 'ok'
        });
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
