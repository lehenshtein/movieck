import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../movies.service';
import {Movie} from '../shared/interfaces/movies.interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  constructor(private moviesDB: MoviesService) { }
  movie: Movie;
  imgLink = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';

  ngOnInit() {
  }

}
