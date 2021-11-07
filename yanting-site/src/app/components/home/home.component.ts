import { Component, OnInit } from '@angular/core';
import { HomeDataService, Url, Content } from '../../services/home-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contentList: Content[] = [];
  urlList: Url[] = [];
  iconList: Url[] = [
    {
      name: "facebook",
      url: "https://www.facebook.com/junfusky.wu"
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/ytt/"
    },
    {
      name: "envelope",
      url: "mailto: yonna5081@gmail.com"
    },
    {
      name: "github",
      url: "https://github.com/Junfusky"
    }
  ]

  constructor(private _homeDataService: HomeDataService) { }

  ngOnInit(): void {
    this.contentList = this._homeDataService.aboutMe;
    this.urlList = this._homeDataService.urls;
  }

}
