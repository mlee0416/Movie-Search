import React from 'react'

class MovieRow extends React.Component {
    viewMovie(){
        // console.log("trying to view movie")
        // console.log(this.props.movies.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movies.id
        window.location.href = url
    }
    render() {
        return <table key={this.props.movies.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="100" src= {this.props.movies.poster_src}/>
            </td>
            <td>
              <h3>{this.props.movies.title}</h3>
              <p> {this.props.movies.overview}</p>
              <input type="button" onClick={this.viewMovie.bind(this)} value= "View" />
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow