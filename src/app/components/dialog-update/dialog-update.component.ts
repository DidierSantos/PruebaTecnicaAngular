import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.css']
})
export class DialogUpdateComponent implements OnInit {

  form!: FormGroup;

  usuario!: String;
  email!: String;
  nombres!: String;
  apellidos!: string;
  estado!: boolean;

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogUpdateComponent>,
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
    if (valid) {
      Swal.fire({
        title: 'Correcto!',
        text: 'Usuario modificado correctamente',
        icon: 'success',
        confirmButtonText: 'ok'
      });
      this.dialogRef.close(value);
    }
  }


  cerrar() {
    this.dialogRef.close();
  }

}

export class Usuario {
  constructor(public usuario: string, public email: string, public nombres: string, public apellidos: string, public estado: string) {
  }
}