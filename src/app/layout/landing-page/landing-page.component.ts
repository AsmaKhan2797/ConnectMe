import { Component, Input, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { SideBarComponent } from "../side-bar/side-bar.component";
import { PostComponent } from "../post/post.component";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../../models/Profile';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent, PostComponent, CommonModule, RouterOutlet,HttpClientModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {
 
  @Input("isCollapsed") isCollapsed = false;
  userName: string = "asmak";
  profile: Profile = {
    profileId: '',
    profileImage: '',
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    age: '',
    contactNo: '',
    emailId: '',
    userName: '',
    password: '',
    isActive: '',
    address: {
      addressId: '',
      userName: '',
      addressLine1: '',
      addressLine2: '',
      addressLine3: '',
      state: '',
      city: '',
      zipCode: '',
      country: ''
    },
    postDetails: [],
    toryDetails: []
  };
  imageUrl: any;

  constructor(private profileService: ProfileService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.profileService.getProfileDetails(this.userName).subscribe((data) => {
      this.profile = data;
      this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
        + this.profile.profileImage);
    });
  }

  toggleSidebar(value: any) {
    this.isCollapsed = value;
  }
}
