import { Component } from '@angular/core';

type Page = {
  title: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'zadaniedom';

  pages: Page[] = [
    { title: 'Counter', path: '/counter' },
    { title: 'Todo', path: '/todo' },
    { title: 'Form', path: '/form' }
  ]
}
