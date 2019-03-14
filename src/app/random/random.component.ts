import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import {MoviesService} from '../movies.service';
import {Movie} from '../shared/interfaces/movies.interface';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.sass']
})
export class RandomComponent {

  constructor(private moviesDB: MoviesService) { }
  movieData: Movie;

  filterForm = new FormGroup({
    voteAverage: new FormControl('10'),
    year: new FormControl('')
  });
  onSubmit() {
    console.log(+this.filterForm.value.voteAverage, +this.filterForm.value.year);
    this.discoverMovie(this.filterForm.value.voteAverage, this.filterForm.value.year);
  }
  getMovie() {
    this.moviesDB.getMovie()
      .subscribe(
        data => {
          this.movieData = data;
          console.log(data);
        }
      );
  }
  discoverMovie(voteAverage: number, year: number) {
    this.moviesDB.discoverMovie(voteAverage, year)
      .subscribe(data => console.log(data));
  }

}
