import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block'
  },
  animations:[
    flyInOut(),
    expand(),
  ]
})
export class LearnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
