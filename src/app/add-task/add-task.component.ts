import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() taskAdded = new EventEmitter<string>();

  addNewTask(name: string) {
    if (name && name.trim()) {
      this.taskAdded.emit(name);
    }
  }
}