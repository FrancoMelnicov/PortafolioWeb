import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listTechnology: Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    this.listTechnology = [
      {
        name: "JavaScript",
        src: "./assets/images/logos/javascript.png"
      },
      {
        name: "Angular",
        src: "./assets/images/logos/angular.png"
      },
      {
        name: "Node.js",
        src: "./assets/images/logos/nodejs.png"
      },
      {
        name: "MongoDB",
        src: "./assets/images/logos/mongodb.png"
      },
      {
        name: "Bootstrap",
        src: "./assets/images/logos/bootstrap.png"
      },
      {
        name: "Xampp",
        src: "./assets/images/logos/xampp.png"
      }
    ]
  }

}
