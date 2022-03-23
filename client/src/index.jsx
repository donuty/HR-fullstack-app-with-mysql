import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    return $.ajax({
      method: 'POST',
      url: '/repos',
      contentType: 'application/json',
      data: JSON.stringify({term}),
      success: function(data) {
        // says this is not a function
        // this.setState({ repos: data });
        if (data) {
          console.log('success from main component ajax search: ', data);
        }
      },
      error: function(err) {
        console.log('error in client/index/search ajax');
      }
    })
  }

    // fetch('/repos', {
    //   body: JSON.stringify({term}),
    //   method: 'POST'
    // })
    // .then(res => res.json())
    // .then(results => console.log(results))
    // .catch(err => console.log('error fetching repos in search client: ', err))

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));