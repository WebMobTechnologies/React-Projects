import React, {useEffect, useState} from 'react';
import styles from './styles';
import {FlatList, Text, View} from 'react-native';

import axios from 'axios';
import moment from 'moment';
import Routes from '../../router/routes';
import {Ripple} from 'src/Component';

const Home = ({navigation}) => {
  useEffect(() => {
    getMatchesList();
  }, []);

  let [matchesList, setMatchesList] = useState([]);

  const getMatchesList = () => {
    axios
      .get('http://mapps.cricbuzz.com/cbzios/match/livematches')
      .then((res) => {
        if (res && res.data && res.data.matches) {
          setMatchesList(res.data.matches);
        } else {
          setMatchesList([]);
        }
      });
  };

  const renderItem = ({item}) => {
    console.log(item, 'item');
    return (
      <Ripple
        rippleContainerBorderRadius={30}
        style={styles.itemContainer}
        onPress={() => {
          navigation.navigate(Routes.MatchDetails, {
            matchId: item.match_id,
          });
        }}>
        <View style={{padding: 5, backgroundColor: 'grey'}}>
          <Text style={styles.headerText}>{item.series_name}</Text>
        </View>
        <Text
          style={
            styles.headerText
          }>{`${item.team1.name} Vs. ${item.team2.name}`}</Text>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.headerText}>
            {`${moment(parseInt(item.header.start_time * 1000)).format(
              'MMM DD',
            )} - ${moment(parseInt(item.header.end_time * 1000)).format(
              'MMM DD',
            )}`}
          </Text>
          <Text style={styles.headerText}>
            {`  ${moment(parseInt(item.header.start_time * 1000)).format(
              'hh:mm A',
            )}`}
          </Text>
        </View>

        <Text style={styles.headerText}>
          {`Location : ${item.venue.location}`}
        </Text>
        <Text style={styles.headerText}>{`Stadium : ${item.venue.name}`}</Text>

        <Text style={styles.headerText}>{item.header.status}</Text>
      </Ripple>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={matchesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FlatList
        data={matchesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FlatList
        data={matchesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      
    </View>
  );
};

export default Home;
