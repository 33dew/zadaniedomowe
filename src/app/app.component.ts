import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type Page = {
  title: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  pages: Page[] = [];

  constructor(private _translateService: TranslateService) { }

  ngOnInit(): void {
    this._translateService.use(localStorage.getItem('lang') || 'pl');
    this.pages = [
      {
        title: 'COUNTER',
        path: '/counter'
      },
      {
        title: 'TODO',
        path: '/todo'
      },
      {
        title: 'FORM',
        path: '/form'
      }
    ]
  }

  switchLanguage() {
    localStorage.setItem('lang', this._translateService.currentLang === 'en' ? 'pl' : 'en');
    this._translateService.use(localStorage.getItem('lang') || 'pl');
  }
}
