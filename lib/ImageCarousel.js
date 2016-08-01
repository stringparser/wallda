
// deps
let React = require('react');
let {Text, View, Dimensions, StyleSheet} = require('react-native');

// plugins
let Swiper = require('react-native-swiper');
let Progress = require('react-native-progress');
let NetworkImage = require('react-native-image-progress');

let style = StyleSheet.create({
  container: {
    top: 25,
    left: 20,
    padding: 5,
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },
  textContent: {
    color: '#fff',
    fontSize: 15
  }
});

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
        uri: img.url
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
                <View style={style.container}>
                  <Text style={style.textContent}>
                    {'@' + img.author + ' | ' + img.label}
                  </Text>
                </View>
              </NetworkImage>
            </View>
          );
        }, this)}
      </Swiper>
    )
  }
});

exports = module.exports = ImageCarousel;
