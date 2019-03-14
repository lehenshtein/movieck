import {DiscoveredMovieInterface} from './discovered-movie.interface';

export interface DiscoverMoviesInterface {
  page: number;
  results: Array<DiscoveredMovieInterface>;
  total_pages: number;
  total_results: number;
}
