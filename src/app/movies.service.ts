import {Injectable} from '@angular/core';
import {apiKey} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from './shared/interfaces/movies.interface';
import {catchError} from 'rxjs/internal/operators';
import {DiscoverMoviesInterface} from './shared/interfaces/discover-movies.interface';

@Injectable({
  providedIn: 'root'
})


export class MoviesService {

  constructor(private http: HttpClient) {
  }

  getMovie(): Observable<Movie> {
    const rand = Math.floor(Math.random() * 500000) + 1;
    return this.http.get<Movie>(`https://api.themoviedb.org/3/movie/${rand}?api_key=${apiKey}`)
      .pipe(catchError(() => this.getMovie()));
  }
  discoverMovie(voteAverage, year): Observable<DiscoverMoviesInterface> {
    return this.http.get<DiscoverMoviesInterface>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&primary_release_year=${year}&vote_average.gte=${voteAverage}&`
    );
  }
}
