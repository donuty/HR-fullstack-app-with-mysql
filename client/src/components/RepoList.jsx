import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <h4> Some of the Repos: </h4>
    {props.repos.map((repo) => {
      return (
        <div className='RepoName' key={repo.id}>
          <h5>
          <a href={repo.repo_url} >
          {repo.repo_name} by {repo.owner_login}
          </a>
          </h5>
        </div>)
      })}
  </div>
)

export default RepoList;