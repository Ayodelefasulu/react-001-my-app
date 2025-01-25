import { Component, createElement, React } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenre } from "../services/fakeGenreService";
import 'bootstrap/dist/css/bootstrap.min.css';

class Movies extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showDiv: true,
      showBtn: false,
      count: 0,
    };
  }

  //variable
  allMovies = getMovies();

  //method
  handleDelete(id){
    const updateMovie = deleteMovie(id);
    
    //this logic hides the table when row number reaches 0
    if (this.allMovies.length === 0) {
      this.setState({showDiv: false});
    }
    this.setState({allMovies: updateMovie});
  };

  // I FIND OUT THAT VARIABLES, METHODS, FUNCTIONS CAN BE
  // DEFINED OUTSIDE THE RENDER FUNCTION. THIS WILL MAKE THEM HAVE ACCESS
  // TO THE "THIS" PROPERTY OF THE COMPONENT

  render() {

    return (
      <>
        <br></br>
        <div style={{}} className="container">
          {this.allMovies.length !== 0 ? <h3>The number of rows are {this.allMovies.length}</h3>: (<h3 className="text-danger">No more rows</h3>) }
          {/* {allMovies.length !== 0 ? <div></div> : <h4>finsihed</h4>} */}
        </div>
        
        {this.state.showDiv && (
        <div id="hide" className="container table-responsive">
          <table className="table table-hover table-striped table-sm">
            <thead className="thead-dark text-success">
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="text-success">
              
              {this.allMovies.map((m) => (
                <tr key={m._id}>
                  <td scope="row">{m.title}</td>
                  <td scope="row">{m.genre.name}</td>
                  <td scope="row">{m.numberInStock}</td>
                  <td scope="row">{m.dailyRentalRate}</td>
                  <td><button onClick={()=>{this.handleDelete(m._id)}} className="btn p-2 m-2 btn-danger btn-sm shadow">Erase</button></td>
                </tr>
                ))
              }
              {this.state.showBtn && (
                <tr key={this.ind._id}>
                  <td scope="row">{this.ind.title}</td>
                  <td scope="row">{this.ind.genre.name}</td>
                  <td scope="row">{this.ind.numberInStock}</td>
                  <td scope="row">{this.ind.dailyRentalRate}</td>
                  <td><button onClick={()=>{this.handleDelete(this.ind._id)}} className="btn p-2 m-2 btn-danger btn-sm shadow">Erase</button></td>
                </tr>
                )
              }
            </tbody>
          </table>
        </div>)}
        <div className="container m-auto w-250 row justify-content-center">
          <button id="addbtn" onClick={this.addRow} className="btn p-2 m-2 btn-success btn-lg shadow">Add row</button>
        </div>
      </>
    )
  }

  
  items = this.allMovies;
  ind = this.items[this.state.count];

  addRow = () => {
    //const newRow = document.getElementById('newRow');
    //const newElement = document.createElement('td');
    //newElement.textContent = this.allMovies.map((m) => m.title);
    //newRow.appendChild(newElement);
    this.setState({count: this.state.count + 1});
    this.setState({showBtn: true});
  };
}

export default Movies;