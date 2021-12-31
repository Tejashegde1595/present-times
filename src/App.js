import React, { Component } from 'react'
import News from './components/news/news'
import HttpService from './service/http.service'
import './App.css'
import {Link} from 'react-router-dom';
export const config = { amp: true }


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      news: null,
      isMenuShown: false,
      isLoaderShown: false,
      countryCode: 'in'
    }
  }

  getNewsData = (category) =>{
    this.setState({isLoaderShown: true});
    const service = new HttpService();
    service.getNews(category, this.state.countryCode)
            .then(r => {this.setState({news: r, isLoaderShown: false})})
            .catch(err => {this.setState({isLoaderShown: true})});
  }

  getSearchData = (q) => {
    this.setState({isLoaderShown: true});
    const service = new HttpService();
    service.getNewsSearch(q, this.state.countryCode)
            .then(r => {this.setState({news: r, isLoaderShown: false})})
            .catch(err => {this.setState({isLoaderShown: false})});
  }
  
  componentWillMount(){
    this.getNewsData('business');
  }

  handleCategory = (event) =>{
    this.getNewsData(event.target.value);
    this.setState({isMenuShown: !this.state.isMenuShown});
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.getSearchData(event.target.value);
      this.setState({isMenuShown: !this.state.isMenuShown});
    }
  }

  showMenu = () => {
    this.setState({isMenuShown: !this.state.isMenuShown})
  }

  handleCountry = (e) => {
    this.setState({countryCode: e.target.value});
    this.getNewsData(e.target.value);
  }

  render() {
    return (
      <div className="app">
      <button className={this.state.isMenuShown ? "nav__mobile-button active" : "nav__mobile-button"} onClick={this.showMenu}>
        <span className="nav__cross cross--left"></span>
        <span className="nav__cross cross--right"></span>
      </button>
        <nav className={this.state.isMenuShown ? "nav nav--tablet nav--mobile active" : "nav nav--tablet nav--mobile"}>
          <div className="nav__brand">NEWS</div>
            <ul className="nav__options">
                <li className="nav__items">
                    <input type="text" className="nav__search" placeholder="🔍 Search News" onKeyUp={this.handleKeyPress}/>
                </li>
                <li className="nav__items">
                <button className="nav__button" onClick={this.handleCategory} value={"business"}>Business</button>
                </li>
                <li className="nav__items">
                    <button className="nav__button" onClick={this.handleCategory} value={"entertainment"}>Entertainment</button>
                </li>
                <li className="nav__items">
                    <button className="nav__button" onClick={this.handleCategory} value={"general"}>General</button>
                </li>
                <li className="nav__items">
                    <button className="nav__button" onClick={this.handleCategory} value={"health"}>Health</button>
                </li>
                <li className="nav__items">
                    <button className="nav__button" onClick={this.handleCategory} value={"science"}>Science</button>
                </li>
                <li className="nav__items">
                    <button className="nav__button" onClick={this.handleCategory} value={"sports"}>Sports</button>
                </li>
                <li className="nav__items">
                    <button className="nav__button" onClick={this.handleCategory} value={"technology"}>Technology</button>
                </li>
                <li className="nav__items">
                    <button className="nav__button"  value={"article"}><Link to="/amp">Articles</Link></button>
                </li>
                <li className="nav__items">
                    <select  onChange={this.handleCountry} className="nav__select">
                      <option value="in" > IN INDIA</option>
                      <option value="us"> US US</option>
                    </select>
                </li>
            </ul>
        </nav>
        <News defaultValue={this.state.news} />
        <div className={this.state.isLoaderShown ? "loader active": "loader"}>
          <h1>Fetching Data</h1>
          <div className="loader__spinner"></div>
        </div>
      </div>
    )
  }
}

export default App
