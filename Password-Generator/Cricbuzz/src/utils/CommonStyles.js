import {Image, StyleSheet} from 'react-native';
import {Color} from './Color';
import ThemeUtils from './ThemeUtils';
import React from "react";

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.WHITE,
    },
    content_center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    full_center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tab_bar_adjust: {
        paddingBottom: 70,
    },
    floating_adjust: {
        paddingBottom: 40,
    },
    tab_bar_floating_adjust: {
        paddingBottom: 110,
    },
    adjust_detail_header: {
        paddingTop:
            ThemeUtils.fontNormal +
            4 * ThemeUtils.fontSmall +
            ThemeUtils.APPBAR_HEIGHT +
            ThemeUtils.fontXSmall +
            140,
        paddingBottom: ThemeUtils.relativeHeight(15),
    },
    noDataImgSm: {
        height: ThemeUtils.relativeHeight(15),
        width: ThemeUtils.relativeHeight(15),
    },
    noDataImgLg: {
        height: ThemeUtils.relativeHeight(20),
        width: ThemeUtils.relativeHeight(20),
    },
    liveLeadIcon : {
        height: 25,
        width:25
    }
});

export default Style;
