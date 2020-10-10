import React, {useEffect} from 'react';
import styles from './styles';
import {Text, View} from 'react-native';

import axios from 'axios';

const MatchDetails = ({navigation, route}) => {
    console.log(route, 'route');
    useEffect(() => {
        if (route && route.params && route.params.matchId) {
            getMatchesDetails(route.params.matchId);
        }
    }, []);

    const getMatchesDetails = (matchId) => {
        axios
            .get(`http://mapps.cricbuzz.com/cbzios/match/${matchId}`)
            .then((res) => {
                console.log(res,"matchId response");
                if (res && res.data && res.data.matches) {
                    // setMatchesList(res.data.matches);
                } else {
                    // setMatchesList([]);
                }
            });
    };

    return (
        <View style={styles.container}>
            <Text>{'Match Details'}</Text>
        </View>
    );
};

export default MatchDetails;
