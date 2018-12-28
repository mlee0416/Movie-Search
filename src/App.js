import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {
  constructor(props){
    super(props);
    this.state={}
    console.log("This is my console.log")

    // const movies = [
    //   {id:0, poster_src:"https://cdn1.thr.com/sites/default/files/imagecache/NFE_portrait/2018/03/avengers-infinity_wars_key_art_poster.jpg", title: "Avengers:Infinity War",overview: "test test"},
    //   {id:1, poster_src:"https://boygeniusreport.files.wordpress.com/2018/04/avengers-infinity-war3.jpg?quality=98&strip=all&w=782", title: "The Avengers",overview: "test test2"},
    // ]

    // var movieRows = []
    // movies.forEach(movies => {
    //   console.log(movies.title)
    //   const movieRow = <MovieRow movies={movies}/>

    //   movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}

    this.performSearch("avengers")
  }

  performSearch(searchTerm){
    console.log("Performs Search")
    const urlString= "https://api.themoviedb.org/3/search/movie?api_key=9acbdee7d8ffd00946d49d494f0e996e&query="+ searchTerm
    $.ajax({

      url:urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        console.log(searchResults)
        const results = searchResults.results
        console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {

          movie.poster_src= "http://image.tmdb.org/t/p/w185/" + movie.poster_path
          // console.log(movie.poster_path)

          const movieRow = <MovieRow key= {movie.id} movies={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})

      },
      error: (xhr, status, err) => {
        console.error ("Failed to fetch data")
      }
      
    })
}
      searchChangeHandler(event){
        console.log(event.target.value)
        const boundObject = this
        const searchTerm = event.target.value
        boundObject.performSearch(searchTerm)
      }
  render() {
    return (
      <div>
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="app icon" width="50" src="logo.png"/>
            </td>
            <td>
              <h1>MoviesDB Search</h1>
            </td>
          </tr>
        </tbody>
      </table>

      <input onChange= {this.searchChangeHandler.bind(this)}className="inputSearch" placeholder="Enter movie search term"></input>

      {this.state.rows}

      </div>
    );
  }
}

export default App;
