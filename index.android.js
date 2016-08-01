
// module imports
let React = require('react');
let { Text, View, AppRegistry } = require('react-native');

let styles = require('./lib/styles');
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
    var self = this;
    fetch('http://unsplash.it/list').then(function (response) {
      return response.json();
    }).then(function (jsonData) {
      console.log(jsonData);
      self.setState({ images: jsonData.slice(0, 5), isLoading: false });
    }).catch(function (error) {
      console.log('Fetch error ' + error);
    });
  },
  renderResultsScreen: function () {
    return (
      <View style={styles.container}>
        <Text>Results</Text>
      </View>
    );
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
