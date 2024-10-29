import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Profile } from '../../models/Profile';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Input("profile") profile: Profile | undefined;
  @Input("imageUrl") imageUrl: any;
}
