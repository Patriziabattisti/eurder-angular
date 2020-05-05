import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eurder';

  changeColor(name: string) {
    const monA = document.getElementById(name);
    const maNav = document.querySelectorAll('a');

    maNav.forEach(el => el.classList.remove('active'));

    monA.classList.toggle('active');
  }
}
