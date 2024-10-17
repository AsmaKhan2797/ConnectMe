import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  @Input("isCollapsed") isCollapsed = false;
}
