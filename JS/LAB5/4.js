function processMovieCommands(commands) {
    const movies = [];

    for (const command of commands) {
        if (command.startsWith('addMovie ')) {
            const movieName = command.substring('addMovie '.length);
            movies.push({ name: movieName });
        }
        else if (command.includes(' directedBy ')) {
            const [movieName, director] = command.split(' directedBy ');
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.director = director;
            }
        }
        else if (command.includes(' onDate ')) {
            const [movieName, date] = command.split(' onDate ');
            const movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    const completeMovies = movies.filter(movie =>
        movie.name && movie.director && movie.date
    );
    completeMovies.forEach(movie => {
        console.log(JSON.stringify(movie));
    });
}

const input = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
];

processMovieCommands(input);