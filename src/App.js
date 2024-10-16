import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router ,
  Routes,
  Route ,
  } from 'react-router-dom';

export default class App extends Component {
  pageno =5;
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<News key="general" country='us' page={ this.pageno } category='general' />}></Route>
          <Route exact path="/business" element={<News key="business" country='us' page={this.pageno} category='business' />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" country='us' page={this.pageno} category='entertainment' />}></Route>
          <Route exact path="/generalhealth" element={<News key="generalhealth" country='us' page={this.pageno} category='generalhealth' />}></Route>
          <Route exact path="/science" element={<News key="science" country='us' page={this.pageno} category='science' />}></Route>
          <Route exact path="/sports" element={<News key="sports" country='us' page={this.pageno} category='sports' />}></Route>
          <Route exact path="/technology" element={<News key="technology" country='us' page={this.pageno} category='technology' />}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
