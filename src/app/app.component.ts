import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemsComponent } from './items/items.component';
import { TareaComponent } from './tarea/tarea.component';

interface Items {
  id: number;
  nombre: string;
  completada: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, TareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  items: Items[] = [];
  
 
  
}
