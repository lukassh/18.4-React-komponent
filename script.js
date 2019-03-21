
var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'images/harry-potter.jpg'
  },
    {
    id: 2,
    title: 'Skazani na Shawshank ',
    desc: 'film o wiezieniu',
    img: 'images/skazani.jpg'
  },
    {
    id: 3,
    title: 'Nietykalni ',
    desc: 'film o niepelnosprawnosci',
    img: 'images/nietykalni.jpeg'
  },
    {
    id: 4,
    title: 'Zielona mila',
    desc: 'film o falszywym oskarzeniu',
    img: 'images/Zielona-mila.jpg'
  },
    {
    id: 5,
    title: 'Ojciec chrzestny ',
    desc: 'film o mafii',
    img: 'images/Ojciec-chrzestny.jpg'
  },
  {
    id: 6,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'images/krol-lew.jpg'
  }
];

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
        React.createElement('h2', {}, this.props.title)
    )
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});

var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
        React.createElement('img', {src: this.props.img})
      );
  }
});

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function (){
    return (
      React.createElement('li', {key: this.props.movie.id},
        React.createElement(MovieTitle, { title: this.props.movie.title}),
        React.createElement(MovieDescription, { desc: this.props.movie.desc}),
        React.createElement(MovieImage, { img: this.props.movie.img })
      )
    )
  }
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function () {
        var movies = this.props.movies.map(function (movie) {
            return React.createElement(Movie, {
                movie: movie,
                key: movie.id
            })
        })
        return (
            React.createElement('ul', {}, movies)
        );
    }
});


var element = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(element, document.getElementById('app'));
