const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({

  const blogSchema = new Schema({
    repo_name: String,
    repo_url: String,
    owner_login: String,
    forks: Number
  });

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (newRepo) => {

  // newRepo.something(blah blah blah/ upsert and save)


}

module.exports.save = save;