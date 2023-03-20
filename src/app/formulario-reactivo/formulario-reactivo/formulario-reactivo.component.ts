import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {

  formularioReactivo: FormGroup = this.fb.group({
    proyectos: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    horas: this.fb.control(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(24)
    ]),
    tecnologias: this.fb.array([])
  })

  tecnologia: FormControl = this.fb.control('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(10)
  ])

proyectos: any[] = [];

get tecnologias(){
  return this.formularioReactivo.get('tecnologias') as FormArray;
}

  constructor(private fb: FormBuilder){}

  validar(){
    return this.formularioReactivo.invalid && this.formularioReactivo.touched
  }

  agregarTecnologia(){
    if(this.tecnologia.invalid){
      this.formularioReactivo.markAllAsTouched();
      return;
    }
    this.tecnologias.push(this.fb.control(this.tecnologia.value))
    this.tecnologia.reset();
  }

  agregarProyecto(){

    if(this.formularioReactivo.invalid){
      this.formularioReactivo.markAllAsTouched();
      return;
    }

    this.proyectos.push(this.formularioReactivo.value);
    this.formularioReactivo.reset();
    this.tecnologias.clear();
  }
}
