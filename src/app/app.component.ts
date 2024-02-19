import { Component } from '@angular/core';
import { Iplayers } from './shared/model/players';
import { cricketers } from './shared/const/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PipesFilter';
  searchedValue : string = ''
  players : Array<Iplayers> = cricketers;
}
