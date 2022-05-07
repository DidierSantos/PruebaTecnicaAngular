import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
  })
  export class AlertasService {
    alertaWarning() {
    Swal.fire({
        title: 'Información!',
        text: 'El usuario debe empezar por una letra',
        icon: 'warning',
        confirmButtonText: 'ok'
    })};

    alertasuccess() {
        Swal.fire({
            title: 'Correcto!',
            text: 'Usuario guardado correctamente',
            icon: 'success',
            confirmButtonText: 'ok'
        })};

    alertasuccessm() {
        Swal.fire({
            title: 'Correcto!',
            text: 'Usuario modificado correctamente',
            icon: 'success',
            confirmButtonText: 'ok'
          });
    }
  }