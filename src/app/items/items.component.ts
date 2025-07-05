import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Items } from '../modelos/item'; // Importa la interfaz
@Component({
  selector: 'app-items',
  imports: [CommonModule, FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
@Input() items: Items[] = [];

 eliminarTarea(id: number): void {
    this.items = this.items.filter(tarea => tarea.id !== id);
  }
}
