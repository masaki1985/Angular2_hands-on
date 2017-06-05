import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
@Component({
  selector: 'app-hiro-detail',
  templateUrl: './hiro-detail.component.html',
  styleUrls: ['./hiro-detail.component.css']
})
export class HiroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
