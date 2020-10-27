import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  Dimensions,
  Easing,
  Keyboard,
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native';

import {ThemeUtils} from 'src/utils';

const TOAST_MAX_WIDTH = 0.9;
const TOAST_ANIMATION_DURATION = 200;

const positions = {
  TOP: 20,
  BOTTOM: -20,
  CENTER: 0,
};

const durations = {
  LONG: 3500,
  SHORT: 2000,
};

let styles = StyleSheet.create({
  defaultStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 7,
  },
  shadowStyle: {
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 10,
  },
  textStyle: {
    fontSize: ThemeUtils.fontSmall,
    color: '#000',
    textAlign: 'left',
  },
  messageContainer: {
    justifyContent: 'center',
    paddingStart: 15,
    paddingEnd: 20,
    paddingVertical: 10,
  },
  iconClose: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 20,
  },
  titleStyle: {
    fontSize: ThemeUtils.fontNormal,
    fontWeight: 'bold',
    lineHeight: 26,
    textAlign: 'left',
    marginBottom: 3,
  },
});

class ToastContainer extends Component {
  static displayName = 'ToastContainer';

  static propTypes = {
    ...ViewPropTypes,
    containerStyle: ViewPropTypes.style,
    duration: PropTypes.number,
    visible: PropTypes.bool,
    position: PropTypes.number,
    animation: PropTypes.bool,
    shadow: PropTypes.bool,
    backgroundColor: PropTypes.string,
    opacity: PropTypes.number,
    shadowColor: PropTypes.string,
    titleTextColor: PropTypes.string,
    descTextColor: PropTypes.string,
    textStyle: Text.propTypes.style,
    delay: PropTypes.number,
    hideOnPress: PropTypes.bool,
    onHide: PropTypes.func,
    onHidden: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    iconColor: PropTypes.string,
  };

  static defaultProps = {
    visible: false,
    duration: durations.SHORT,
    animation: true,
    shadow: true,
    position: positions.BOTTOM,
    opacity: 1,
    delay: 0,
    backgroundColor: '#02d0a3',
    titleTextColor: '#fff',
    descTextColor: '#fff',
    hideOnPress: true,
    iconColor: '#fff',
  };

  constructor() {
    super(...arguments);
    const window = Dimensions.get('window');
    this.state = {
      visible: this.props.visible,
      opacity: new Animated.Value(0),
      windowWidth: window.width,
      windowHeight: window.height,
      keyboardScreenY: window.height,
    };
  }

  componentDidMount = () => {
    Dimensions.addEventListener('change', this._windowChanged);
    Keyboard.addListener(
      'keyboardDidChangeFrame',
      this._keyboardDidChangeFrame,
    );
    if (this.state.visible) {
      this._showTimeout = setTimeout(() => this._show(), this.props.delay);
    }
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.visible !== this.props.visible) {
      if (nextProps.visible) {
        clearTimeout(this._showTimeout);
        clearTimeout(this._hideTimeout);
        this._showTimeout = setTimeout(() => this._show(), this.props.delay);
      } else {
        this._hide();
      }

      this.setState({
        visible: nextProps.visible,
      });
    }
  }

  componentDidUpdate() {
    const {windowHeight, keyboardScreenY} = this.state;
    this._keyboardHeight = Math.max(windowHeight - keyboardScreenY, 0);
  }

  componentWillUnmount = () => {
    Dimensions.removeEventListener('change', this._windowChanged);
    Keyboard.removeListener(
      'keyboardDidChangeFrame',
      this._keyboardDidChangeFrame,
    );
    this._hide();
  };

  _animating = false;
  _root = null;
  _hideTimeout = null;
  _showTimeout = null;
  _keyboardHeight = 0;

  _windowChanged = ({window}) => {
    this.setState({
      windowWidth: window.width,
      windowHeight: window.height,
    });
  };

  _keyboardDidChangeFrame = ({endCoordinates}) => {
    this.setState({
      keyboardScreenY: endCoordinates.screenY,
    });
  };

  _show = () => {
    clearTimeout(this._showTimeout);
    if (!this._animating) {
      clearTimeout(this._hideTimeout);
      this._animating = true;
      this._root.setNativeProps({
        pointerEvents: 'auto',
      });
      this.props.onShow && this.props.onShow(this.props.siblingManager);
      Animated.timing(this.state.opacity, {
        toValue: this.props.opacity,
        duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
        easing: Easing.out(Easing.ease),
      }).start(({finished}) => {
        if (finished) {
          this._animating = !finished;
          this.props.onShown && this.props.onShown(this.props.siblingManager);
          if (this.props.duration > 0) {
            this._hideTimeout = setTimeout(
              () => this._hide(),
              this.props.duration,
            );
          }
        }
      });
    }
  };

  _hide = () => {
    clearTimeout(this._showTimeout);
    clearTimeout(this._hideTimeout);
    /*console.log(this.props,this.props.reference )
        this.props.reference && this.props.reference.destroy();*/
    if (!this._animating) {
      this._root.setNativeProps({
        pointerEvents: 'none',
      });
      this.props.onHide && this.props.onHide(this.props.siblingManager);
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: this.props.animation ? TOAST_ANIMATION_DURATION : 0,
        easing: Easing.in(Easing.ease),
      }).start(({finished}) => {
        if (finished) {
          this._animating = false;
          this.props.onHidden && this.props.onHidden(this.props.siblingManager);
        }
      });
    }
  };

  _getContainerPosition = () => {
    return this.state.opacity.interpolate({
      inputRange: [0, this.props.opacity],
      outputRange: [0, ThemeUtils.TAB_HEIGHT],
    });
  };

  render() {
    const containerPosition = this._getContainerPosition();
    let {props} = this;
    const {windowWidth} = this.state;
    /*let offset = props.position;*/
    /* let position = offset ? {
             [offset < 0 ? 'bottom' : 'top']: offset < 0 ? (this._keyboardHeight - offset) : offset,
         } : {
             top: 0,
             bottom: this._keyboardHeight,
         };*/

    return this.state.visible || this._animating ? (
      <Animated.View
        style={[
          styles.defaultStyle,
          // position,
          props.position === positions.TOP
            ? {top: containerPosition}
            : {bottom: containerPosition},
        ]}
        pointerEvents="box-none">
        <Animated.View
          style={[
            styles.containerStyle,
            {width: windowWidth - windowWidth * ((1 - TOAST_MAX_WIDTH) / 2)},
            props.containerStyle,
            props.backgroundColor && {backgroundColor: props.backgroundColor},
            {
              opacity: this.state.opacity,
            },
            props.shadow && styles.shadowStyle,
            props.shadowColor && {shadowColor: props.shadowColor},
          ]}
          pointerEvents="none"
          ref={(ele) => {
            this._root = ele;
          }}>
          {this.props.duration <= 0 && (
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.iconClose}
              onPress={this.props.hideOnPress ? this._hide : null}>
              {/* <MaterialCommunityIcons
                            name={'close'}
                            size={19}
                            color={props.iconColor}/>*/}
              <Text
                style={[
                  styles.textStyle,
                  props.textStyle,
                  props.descTextColor && {color: props.descTextColor},
                  {
                    marginEnd: 20,
                  },
                ]}>
                {this.props.retryText}
              </Text>
            </TouchableOpacity>
          )}
          <View
            style={{
              width: 12,
              backgroundColor: '#00000044',
              borderTopStartRadius: 7,
              borderBottomStartRadius: 7,
            }}
          />

          <View style={styles.messageContainer}>
            {this.props.title && (
              <Text
                style={[
                  styles.titleStyle,
                  props.textStyle,
                  props.titleTextColor && {color: props.titleTextColor},
                ]}>
                {this.props.title}
              </Text>
            )}
            <Text
              style={[
                styles.textStyle,
                props.textStyle,
                props.descTextColor && {color: props.descTextColor},
              ]}>
              {this.props.children}
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
    ) : null;
  }
}

export default ToastContainer;
export {positions, durations};
