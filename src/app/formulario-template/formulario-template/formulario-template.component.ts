import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-template',
  templateUrl: './formulario-template.component.html',
  styleUrls: ['./formulario-template.component.css']
})
export class FormularioTemplateComponent {

  @ViewChild('formularioTemplate')

  formularioTemplate! : NgForm;

  initialState = {
proyecto: '',
horas: '0',
tecnologia: ''
  }
  
  tecnologias: Array<string> = [];
  
  proyectos: any[] = [];

  agregarProyecto(){
    if( this.formularioTemplate.invalid){
      return;
    }

    this.proyectos.push({
      proyecto: this.formularioTemplate.controls['proyecto'].value,
      horas: this.formularioTemplate.controls['horas'].value,
      tecnologia: this.tecnologias,
    })

    this.formularioTemplate.resetForm();
    this.tecnologias = [];

    console.log(this.proyectos)
  }

  agregarTec(){
  
    if( this.formularioTemplate.controls['tecnologia'].invalid){
      return;
    }
     
      this.tecnologias.push(this.formularioTemplate.controls['tecnologia'].value);

    this.formularioTemplate.resetForm({ 
      ...this.formularioTemplate.value,
     tecnologia: ''
    
    }
    );
  }
}
