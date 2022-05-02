(() => {

    // función para obtener información de una película por Id
    function getMovieInformationById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActorsInformationById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorInformationById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface Movie {
        title:       string; 
        description: string; 
        rating:      number; 
        cast:        string[];
    }
    function createMovie({title, description, rating cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthDate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;

    }
})();
