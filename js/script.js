const app = new Vue(
    {
        el: '#app',
        data: {
          newMovie: '',  
          movie: [
              'film 1',
              'film 2',
              'film 3',
              'film 4',
              'film 5'
          ]  
        },
        methods: {
            addMovie(){
                this.movie.push(this.newMovie);
            }
            
        }
    }
);