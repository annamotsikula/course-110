import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent {
  @Input({required: true}) title: string = ''
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

}
