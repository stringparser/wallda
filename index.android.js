
// module imports
let React = require('react');
let { AppRegistry } = require('react-native');

// app startup components
let Loading = require('./lib/Loading');
let ImageCarousel = require('./lib/ImageCarousel');

let App = React.createClass({
  getInitialState: function () {
    return ({
      images: [],
      isLoading: true
    });
  },
  componentDidMount: function () {
    this.fetchImages();
  },
  fetchImages: function () {
    var url = 'https://www.instagram.com/berlinninja/media/';
    var self = this;
    fetch(url).then(function (res) {
      return res.json();
    }).then(function (data) {
      self.setState({
        images: data.items.map(function (item) {
          return ({
            url: item.images.standard_resolution.url,
            date: item.caption.created_time,
            label: item.caption.text.match(/[^\.]+/).pop(),
            author: item.user.username,
            caption: item.caption.text
          });
        }),
        isLoading: false
      });
    }).catch(function (error) {
      console.log('Fetch error ' + error);
    });
  },
  render: function() {
    if (this.state.isLoading) {
      return <Loading/>;
    } else {
      return <ImageCarousel {...this.state}/>;
    }
  }
});

AppRegistry.registerComponent('wallda', () => App);
