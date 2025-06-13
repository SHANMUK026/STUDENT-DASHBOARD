import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students: { name: string; grade: string }[] = [];
  name: string = '';
  grade: string = '';
  addProfile() {
    if (this.name && this.grade) {
      this.students.push({ name: this.name, grade: this.grade });
      this.name = '';
      this.grade = '';
    }

}
}

