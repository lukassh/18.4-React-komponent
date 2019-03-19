
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

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function(){
    return ( 
      React.createElement('li', {src: this.props.movie.id},
      React.createElement(MovieTitle, { title: this.props.movie.title}),
      React.createElement(MovieDescription, { desc: this.props.movie.desc}),
      React.createElement(MovieImage, { src: this.props.movie.img })
      )
    )
  }
});

var MovieList = React.createClass({
  render: function() {
    return React.createElement('ul', {}, moviesElements)
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.object.isRequired,
  },
  render: function() {
    return ( 
        React.createElement('h2', {}, this.props.title)
    )
  }
});

var MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.object.isRequired, 
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});

var MovieImage = React.createClass({
  propTypes: {
    images: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
        React.createElement('img', {src: this.props.movie.img})
      );
  }
});

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', { src: movie.img })
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));