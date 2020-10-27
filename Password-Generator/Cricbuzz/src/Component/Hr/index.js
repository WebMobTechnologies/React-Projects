import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Color} from 'src/utils';

const styles = StyleSheet.create({
    line: {
        flex: 1,
        height: 0.5,
        backgroundColor: Color.SEPARATOR,
    },
    text: {
        flex: 1,
        textAlign: 'center',
        marginLeft: 0,
        marginRight: 15,
    },
});

const renderLine = (key = 0, props) => {
    let {lineStyle = {}} = props;
    return <View key={key} style={[styles.line, lineStyle]} />;
};

const renderText = (key = 0, props) => {
    let {textStyle = {}, text = ''} = props;
    return (
        <View key={key}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
    );
};

const renderInner = props => {
    let {text = ''} = props;
    if (!text) {
        return renderLine(0, props);
    }
    return [renderLine(1, props), renderText(2, props), renderLine(3, props)];
};

const Hr = props => {
    let {marginLeft = 0, marginRight = 0} = props;
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft,
                marginRight,
            }}>
            {renderInner(props)}
        </View>
    );
};

Hr.propTypes = {
    lineStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    text: PropTypes.string,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    textStyle: PropTypes.shape({}),
};

export default Hr;
