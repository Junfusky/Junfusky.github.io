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

  constructor(private _homeDataService: HomeDataService) { }

  ngOnInit(): void {
    this.contentList = this._homeDataService.aboutMe;
    this.urlList = this._homeDataService.urls;
  }

}
