import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent implements OnInit {
  // we want to have individual access to each task
  @Input() task!: Task;
  faTimes = faTimes; // to use Awesome Fonts

  constructor() {}

  ngOnInit(): void {}
}
