
// deps
let React = require('react');
let TimerMixin = require('react-timer-mixin');
let { ActivityIndicator } = require('react-native');

// modules
let styles = require('./styles');

let Loading = React.createClass({
  mixin: [TimerMixin],
  getInitialState: function() {
    return ({
      animating: true
    });
  },
  render: function () {
    return (
      <ActivityIndicator
        size="large"
        style={styles.container}
        animating={this.state.animating}
      />
    );
  }
});

exports = module.exports = Loading;
