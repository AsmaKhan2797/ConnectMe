import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  @Output() openClose: EventEmitter<any> = new EventEmitter();

  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.openClose.emit(this.isCollapsed);
  }

}
