
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import APIkey from './components/config';
import PageNotFound from './components/PageNotFound';
import SearchInput from './components/SearchInput';
import PhotoGalleryParent from './components/PhotoGalleryParent';
import ProjectTitle from './components/ProjectTitle';
import PhotosNavBars from './components/PhotosNavBars';
import Footer from './components/Footer';


class App extends Component {
  state = {
      photoContainer:[],
      dogs: [],
      monkeys: [],
      trees: [],
      flowers: [],
      queryString: "",
      loading: true
}    
  

componentDidMount() {
    this.searchDogsData();
    this.searchMonkeysData();
    this.searchFlowersData();
    this.searchTreesData();
};

  handleSearchForm = (query = "dogs") => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIkey}&tags=${query}&per_page=24&format=json&nojsoncallback=1&content_type=1`;
    axios.get(url)
    .then(responseData => {
      this.setState({
        photoContainer: responseData.data.photos.photo,
        loading: false,
        queryString: query
      })
    })
    .catch(error => this.setState({ error, loading: false}));
    this.setState({ loading: true }); 
  }

  searchDogsData = () => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIkey}&tags=dogs&per_page=24&format=json&nojsoncallback=1&content_type=1`;
    axios.get(url)
    .then(responseData => {
      this.setState({
        dogs: responseData.data.photos.photo,
        loading: false
      });
    })
    .catch(error => this.setState({ error, loading: false}));
    this.setState({ loading: true }); 
  }

  searchMonkeysData = () => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIkey}&tags=monkeys&per_page=24&format=json&nojsoncallback=1&content_type=1`;
    axios.get(url)
    .then(responseData => {
      this.setState({
        monkeys: responseData.data.photos.photo,
        loading: false
      })
    })
    .catch(error => this.setState({ error, loading: false}));
    this.setState({ loading: true }); 
  }

  searchTreesData = () => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIkey}&tags=trees&per_page=24&format=json&nojsoncallback=1&content_type=1`;
    axios.get(url)
    .then(responseData => {
      this.setState({
        trees: responseData.data.photos.photo,
        loading: false
      })
    })
    .catch(error => this.setState({ error, loading: false}));
    this.setState({ loading: true }); 
  }

  searchFlowersData = () => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIkey}&tags=flowers&per_page=24&format=json&nojsoncallback=1&content_type=1`;
    axios.get(url)
    .then(responseData => {
      this.setState({
        flowers: responseData.data.photos.photo,
        loading: false
      })
    })
    .catch(error => this.setState({ error, loading: false}));
    this.setState({ loading: true }); 
  }
      
   
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <ProjectTitle title="React Photo Gallery Application" />
          <SearchInput handleSearchData={this.handleSearchForm} />
          <PhotosNavBars />
          <p className="current-search-result">Current Search: 
          <span className="returned-results-name">{" "} 
          {this.state.queryString}</span></p>

          <Switch>
            <Route 
              exact
              path="/" 
              render={ () =>
                <Redirect to="/dogs" 
            />}/>
              
            <Route 
              exact 
              path="/dogs"
              render={ () =>
                <PhotoGalleryParent
                  data={this.state.dogs}
                  title={this.state.dogsTitle}
                  loading={this.state.loading}   
            />}/>
              
            <Route 
              exact 
              path="/monkeys"
              render={ () => 
                <PhotoGalleryParent
                  data={this.state.monkeys}
                  title={this.state.monkeysTitle}
                  loading={this.state.loading}
            />}/>
              
            <Route
              exact 
              path="/trees"
              render={ () =>
                <PhotoGalleryParent
                  data={this.state.trees}
                  title={this.state.treesTitle}
                  loading={this.state.loading}
            />}/>
                    
            <Route 
              exact
              path="/flowers"
              render={ () =>
                <PhotoGalleryParent
                  data={this.state.flowers}
                  title={this.state.flowersTitle}
                  loading={this.state.loading}
            />}/>
                  
            <Route 
              path="/search"
              render={ () =>
                <PhotoGalleryParent
                  data={this.state.photoContainer}
                  title={this.state.searchTitle}
                  loading={this.state.loading}
            />}/>
              
            <Route component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
   
export default App;
