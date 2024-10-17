import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { PostComponent } from "../post/post.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent, PostComponent, CommonModule, RouterOutlet],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  isCollapsed = false;

  toggleSidebar(value: any) {
    this.isCollapsed = value;
  }
}
