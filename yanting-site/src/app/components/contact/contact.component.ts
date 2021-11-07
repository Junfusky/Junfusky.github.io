import { Url } from './../../services/home-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
