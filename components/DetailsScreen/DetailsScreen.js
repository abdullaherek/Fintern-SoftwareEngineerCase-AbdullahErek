/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import moment from 'moment';
import {style} from './style';

const DetailsScreen = ({route}) => {
  const {title, date, desc, background} = route.params;
  return (
    <View style={style.container}>
      <View>
        <ImageBackground
          source={{uri: `https://image.tmdb.org/t/p/w200/${background}`}}
          resizeMode="cover"
          style={style.image}
        />
      </View>

      <Text style={style.title}>{title}</Text>
      <Text style={style.desc}>{desc}</Text>
      <Text style={style.text}>
        Çıkış Tarihi: {moment(date).format(' MMMM D, YYYY')}
      </Text>
    </View>
  );
};

export default DetailsScreen;
