import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DialogAddComponent } from '../../dialog-add/dialog-add.component';
import Swal from 'sweetalert2'
import { DialogReadComponent } from '../../dialog-read/dialog-read.component';
import { DialogUpdateComponent } from '../../dialog-update/dialog-update.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  datosBusqueda!: Usuario[];
  dataSource: any = null;

  usuarios: Usuario = new Usuario("", "", "", "", true);

  columnas: string[] = ['Usuario', 'Email', 'Nombres', 'Apellidos', 'Estado', 'Consultar', 'Modificar'];

  datos: Usuario[] = [new Usuario("didier.santos", 'didier@hotmail.com', 'Didier', 'Santos', true),
  new Usuario("lina.cataño", 'Lina@hotmail.com', 'Lina', 'Cataño', true),
  new Usuario("juan.santos", 'Juan@hotmail.com', 'JuanFe', 'Santos', true),
  new Usuario("ruby.lopez", 'Ruby@hotmail.com', 'Ruby', 'Lopez', true),
  new Usuario("ahsoka.husky", 'Ahsoka@hotmail.com', 'Ahsoka', 'Husky', true),
  ];

  @ViewChild(MatTable) tabla1!: MatTable<Usuario>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Usuario>(this.datos);
    this.dataSource.paginator = this.paginator;

    this.dataSource.filterPredicate = (data: Usuario, filter: string) => {
      return data.usuario.trim().toLowerCase() == filter;
    };
    this.dataSource.filterPredicate = (data: Usuario, filter: string) => {
      return data.email.trim().toLowerCase() == filter;
    };
    this.dataSource.filterPredicate = (data: Usuario, filter: string) => {
      return data.nombres.trim().toLowerCase() == filter;
    };
    this.dataSource.filterPredicate = (data: Usuario, filter: string) => {
      return data.apellidos.trim().toLowerCase() == filter;
    };
  }

  agregar(user: Usuario) {
    //console.log(user);
    this.datos.push(user);
    this.tabla1.renderRows();
    this.usuarios = new Usuario("", "", "", "", true);
  }

  dialogAgregar() {
    const dialogo = this.dialog.open(DialogAddComponent, {
      data: new Usuario("", "", "", "", true)
    });

    dialogo.afterClosed().subscribe((user: Usuario) => {
      if (user != undefined)
        this.agregar(user);
    });
  }

  consultar(user: Usuario) {
    this.dialog.open(DialogReadComponent, {
      data: user
    });
  }

  modificar(user: Usuario) {
    this.dialog.open(DialogUpdateComponent, {
      data: user
    });
  }

  buscar() {
    this.dataSource.filter = this.usuarios.usuario.trim().toLowerCase();
    this.dataSource.filter = this.usuarios.email.trim().toLowerCase();
    this.dataSource.filter = this.usuarios.nombres.trim().toLowerCase();
    this.dataSource.filter = this.usuarios.apellidos.trim().toLowerCase();
    this.tabla1.renderRows();
  }

}

export class Usuario {
  constructor(public usuario: string, public email: string, public nombres: string, public apellidos: string, public estado: boolean) {
  }
}
