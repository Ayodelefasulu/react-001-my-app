import { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import "bootstrap/dist/css/bootstrap.min.css";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDiv: true,
      showBtn: false,
      count: 0,
      allMovies: getMovies(), // Manage movies dynamically in state
    };
  }

  handleDelete = (id) => {
    const updatedMovies = this.state.allMovies.filter((movie) => movie._id !== id);

    // Hide the table if no movies are left
    this.setState({
      allMovies: updatedMovies,
      showDiv: updatedMovies.length !== 0,
    });
  };

  addRow = () => {
    const { count, allMovies } = this.state;

    if (count < allMovies.length) {
      // Increment the count to "add" the next movie
      this.setState((prevState) => ({
        count: prevState.count + 1,
        showBtn: true, // Show the button for the new row
      }));
    } else {
      alert("No more movies to add!");
    }
  };

  render() {
    const { allMovies, count, showDiv, showBtn } = this.state;

    return (
      <>
        <div className="container">
          {allMovies.length !== 0 ? (
            <h3>The number of rows is {allMovies.length}</h3>
          ) : (
            <h3 className="text-danger">No more rows</h3>
          )}
        </div>

        {showDiv && (
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
                {/* Render existing rows */}
                {allMovies.map((movie) => (
                  <tr key={movie._id}>
                    <td scope="row">{movie.title}</td>
                    <td scope="row">{movie.genre.name}</td>
                    <td scope="row">{movie.numberInStock}</td>
                    <td scope="row">{movie.dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie._id)}
                        className="btn p-2 m-2 btn-danger btn-sm shadow"
                      >
                        Erase
                      </button>
                    </td>
                  </tr>
                ))}

                {/* Render the additional row */}
                {showBtn && count < allMovies.length && (
                  <tr key={allMovies[count]._id}>
                    <td scope="row">{allMovies[count].title}</td>
                    <td scope="row">{allMovies[count].genre.name}</td>
                    <td scope="row">{allMovies[count].numberInStock}</td>
                    <td scope="row">{allMovies[count].dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(allMovies[count]._id)}
                        className="btn p-2 m-2 btn-danger btn-sm shadow"
                      >
                        Erase
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className="container m-auto w-250 row justify-content-center">
          <button
            id="addbtn"
            onClick={this.addRow}
            className="btn p-2 m-2 btn-success btn-lg shadow"
          >
            Add row
          </button>
        </div>
      </>
    );
  }
}

export default Movies;
