import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.updateRepos = this.updateRepos.bind(this);
  }

  updateRepos () {
    axios.get('/repos')
    .then((data) => {
      this.setState({
        repos: data.data
      })
    })
    .catch(err => console.log('axios get error: ', err))
  }

  componentDidMount () {
    this.updateRepos();
  }

  search (term) {
    axios.post('/repos', {term})
    .then(data => this.updateRepos())
    .catch(err => console.log('axios post error: ', err))
  }


  render () {
    console.log(this.state.repos)
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));