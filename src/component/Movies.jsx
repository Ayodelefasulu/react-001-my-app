import { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenre } from "../services/fakeGenreService";
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      allMovies: getMovies()
    };
  }
  render() {
    //const allMovies = getMovies();
    const handleDelete = (id) => {
      const updateMovie = deleteMovie(id);
      return this.setState({allMovies: updateMovie});
      
    };
    // const deleteM = function() {
    //   const d = document.getElementById("key");
    //   deleteMovie(d);
    // };
    return (
      <>
        <h3>The numebr of rows are {this.state.allMovies.length}</h3>
        <div className="container table-responsive">
          <table className="table table-hover table-striped table-sm">
            <thead className="thead-dark text-success">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
              </tr>
            </thead>
            <tbody className="text-success">
              {this.state.allMovies.map((m) => (
                <tr key={m._id}>{m.title}
                  <th scope="row">{m.genre.name}</th>
                  <th scope="row">{m.numberInStock}</th>
                  <th scope="row">{m.dailyRentalRate}</th>
                  <th><button onClick={()=>handleDelete(m._id)} className="btn p-2 m-2 btn-danger btn-lg shadow">Erase</button></th>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </>
    )
  }
}

export default Movies;