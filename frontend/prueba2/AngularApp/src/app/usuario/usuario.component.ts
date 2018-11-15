import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario} from '../shared/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService]
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.resetForm();
    this.obtenerUbications();
  }

  //modificacion

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.usuarioService.selectUsuario= {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
    }

  }

  //onsubmit sale del nombre principal del formulario
  onSubmit(form: NgForm){
   // this.usuarioService.postUsuario(form.value);
  }

  obtenerUbications(){
    this.usuarioService.getUbicacion().subscribe((res) => {
      this.usuarioService.usuarios=res as Usuario[];
      console.log("hola")

    });
  }

  

}
