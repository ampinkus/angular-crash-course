import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  // we need to get the inputs for the text and color fields
  @Input() text!: string;
  @Input() color!: string;
  // we will export button click event with the name btnClick
  @Output() btnClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  // the function we launch when we click the Add button in button.component.html
  onClick() {
    // each time we click on the button we output the click
    this.btnClick.emit();
  }
}
