import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarea {
  id: number;
  nombre: string;
  completada: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tarea = 'Todo List';
  tareas: Tarea[] = [];

  agregarTarea(nombre: string): void {
    if (nombre.trim()) {
      const nuevaTarea: Tarea = {
        id: this.tareas.length + 1,
        nombre: nombre.trim(),
        completada: false
      };
      this.tareas.push(nuevaTarea);
    }
  }
  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }
  
}
