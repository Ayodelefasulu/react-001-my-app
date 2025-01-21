import { Component, React } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenre } from "../services/fakeGenreService";
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showDiv: true
    };
  }

  render() {
    const allMovies = getMovies();
    
    

    const handleDelete = (id) => {
      const updateMovie = deleteMovie(id);
      return this.setState({allMovies: updateMovie});
      
    };

    
    return (
      <>
        <br></br>
        <div style={{}} className="container">
          {allMovies.length !== 0 ? <h3>The number of rows are {allMovies.length}</h3>: (<h3 className="text-danger">No more rows</h3>) }
          {allMovies.length !== 0 ? <div></div> : <h4>finsihed</h4>}
        </div>
        
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
              
              {allMovies.map((m) => (
                <tr key={m._id}>{m.title}
                  <th scope="row">{m.genre.name}</th>
                  <th scope="row">{m.numberInStock}</th>
                  <th scope="row">{m.dailyRentalRate}</th>
                  <th><button onClick={()=>{handleDelete(m._id)}} className="btn p-2 m-2 btn-danger btn-lg shadow">Erase</button></th>
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