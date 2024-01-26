import PrimaryLayout from "../../Component/PrimaryLayout"
import MovieList from "../../Component/MovieList";

export default function HomePage() {
    return(
        <PrimaryLayout>
            <MovieList apiUrl="movies" genreTitle="Action" />
            <MovieList apiUrl="movies?page=2" genreTitle="Adventure" />
            <MovieList apiUrl="movies?page=3" genreTitle="Crime" />
            <MovieList apiUrl="movies?page=4" genreTitle="Drama" />
        </PrimaryLayout>
    );
}