import { Component, OnInit } from '@angular/core';
import { NgForm ,FormBuilder, FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../shared/usuario.service';
import { Usuario} from '../shared/usuario.model';
import { EncuestadorService} from '../shared/encuestador.service';
import{ Encuestador } from '../shared/encuestador.model';



declare var M:any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService,
    EncuestadorService
  ]
})
export class UsuarioComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private encuestadorService: EncuestadorService) { }

  ngOnInit() {
    this.resetForm();
    this.obtenerUsuarios();
    this.obtenerUbications();
    this.refreshUsuario();
  }

  //modificacion

  resetForm(form?: NgForm){
    if(form)
      form.reset();
    this.usuarioService.selectUsuario= {
      _id: "",
      nombre: "",
      direccion: ""
    }

  }

  submit(){
    console.log("hola");
  }

  //onsubmit sale del nombre principal del formulario
  onSubmit(form: NgForm){
    if(form.value._id){
      this.encuestadorService.postUsuario(form.value).subscribe((res) =>{
        this.resetForm(form);
        this.refreshUsuario();
        M.toast({html: 'Guardado exitosamente', classes: 'rounded'});
      });
    }else{
      this.encuestadorService.putUsuario(form.value).subscribe((res) =>{
        this.resetForm(form);
        this.refreshUsuario();
        M.toast({html: 'Se a actualizado exitosamente', classes: 'rounded'});
      });

    }
  }

  obtenerUsuarios(){
    this.encuestadorService.getUsuario().subscribe((res1)=>{
      console.log(res1);
      this.encuestadorService.encuestadores=res1 as Encuestador[];
    });
  }

  obtenerUbications(){
    this.usuarioService.getUbicacion().subscribe((res) => {
      this.usuarioService.usuarios=res as Usuario[];
    });
  }

  refreshUsuario(){
    
    this.encuestadorService.getUsuario().subscribe((res)=>{
      this.encuestadorService.encuestadores= res as Encuestador[];

    });
  }

  onEdit(usr : Encuestador, form:NgForm){
    console.log("aqui e");
    this.encuestadorService.selectEncuestador = usr;
    this.resetForm(form);
    console.log("user");
    console.log(usr);
    console.log(this.encuestadorService.selectEncuestador);

  }

  onDelete(_id: string, form: NgForm){

    if(confirm('deseas borrarlo?')==true){
      this.encuestadorService.deleteUsuario(_id).subscribe((res) =>{
        this.refreshUsuario();
        this.resetForm(form);
        M.toast({ html: 'Borrado exitoso', classes: 'rounded'});
      });

    }

  }

}
