import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Items } from '../modelos/item'; // Importa la interfaz
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-tarea',
  imports: [CommonModule, FormsModule, ItemsComponent],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})

export class TareaComponent {
  items: Items[] = [];
  tarea = 'Todo List';
   
   agregarTarea(nombre: string): void {
    if (nombre.trim()) {
      const nuevaTarea: Items = {
        id: this.items.length + 1,
        nombre: nombre.trim(),
        completada: false
      };
      this.items.push(nuevaTarea);
    }
  }
}
