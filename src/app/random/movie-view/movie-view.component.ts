import {Component, Input} from '@angular/core';
import {Movie} from '../../shared/interfaces/movies.interface';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.sass']
})
export class MovieViewComponent {
  imgLink = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
  @Input() movieData: Movie;

}
