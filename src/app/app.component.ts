import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eurder';

  changeColor() {

    let pathName = location.href;
    let index = pathName.lastIndexOf('/') + 1;
    let nameOfNav = pathName.substr(index);
    console.log(nameOfNav);
    let monA = document.getElementById(nameOfNav);
    monA.className = 'active';

    console.log(monA.className);
  }
}
