/* eslint-disable prettier/prettier */
import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import {style} from './style';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const HomePage = ({navigation}) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getData();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getData = () => {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=a5ee370d9b36303f9a4e64c5398ce3b7',
      )
      .then(res => setData(res.data.results))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  const sortedArray = data
    .sort(
      (a, b) =>
        new moment(a.release_date).format('YYYYMMDD') -
        new moment(b.release_date).format('YYYYMMDD'),
    )
    .reverse();

  return (
    <View style={style.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {sortedArray.map(datum => (
          <View key={datum.id}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {
                  title: datum.title,
                  date: datum.release_date,
                  desc: datum.overview,
                  background: datum.poster_path,
                })
              }>
              <Text style={style.title}>{datum.title}</Text>
            </TouchableOpacity>
            <Text style={style.text} numberOfLines={3}>
              Özet: {datum.overview}
            </Text>
            <Text style={style.text}>
              Çıkış Tarihi: {moment(datum.release_date).format(' MMMM D, YYYY')}
            </Text>
            <Text style={style.text}>IMDB Puanı: {datum.vote_average}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomePage;
