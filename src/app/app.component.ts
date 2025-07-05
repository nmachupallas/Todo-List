import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareaComponent } from './tarea/tarea.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, TareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

    
}
