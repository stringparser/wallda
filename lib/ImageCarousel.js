
// deps
let React = require('react');
let {View, Dimensions} = require('react-native');

// plugins
let Swiper = require('react-native-swiper');
let Progress = require('react-native-progress');
let NetworkImage = require('react-native-image-progress');

console.log(process);

let ImageCarousel = React.createClass({
  getDefaultProps: function () {
    return ({
      images: []
    });
  },
  getImageProps: function (img, dim) {
    return ({
      style: {
        flex: 1,
        width: dim.width,
        height: dim.height
      },
      source: {
        uri: `https://unsplash.it/${dim.width}/${dim.height}?image=${img.id}`
      },
      indicator: Progress.Circle
    });
  },
  render: function () {
    let dim = Dimensions.get('window');

    return (
      <Swiper>
        {this.props.images.map(function (img, index) {
          return (
            <View key={index}>
              <NetworkImage {...this.getImageProps(img, dim)}>
              </NetworkImage>
            </View>
          );
        }, this)}
      </Swiper>
    )
  }
});

exports = module.exports = ImageCarousel;
