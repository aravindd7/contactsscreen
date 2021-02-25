
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import Skeleton from './components/Skeleton';

const App = () => {
  return (
    <View style={{flex:1,justifyContent:'space-evenly'}}>
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    </View>
  );
};

export default App;
