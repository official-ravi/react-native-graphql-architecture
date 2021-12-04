import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator, StyleSheet,
  View
} from 'react-native';
import RNShake from 'react-native-shake';
import { Planet, useGetPlanetByIdQuery } from '../common/generated/graphql';
import PlanetCard from './../common/components/PlanetCard';



const Home = () => {
  const [planetId, setPlanetId] = useState<string | null>('1');

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setPlanetId((Math.floor(Math.random() * 20) + 1).toString());
    })

    return () => {
      subscription.remove()
    }
  }, [])

  const { data, loading } =
    useGetPlanetByIdQuery({
      variables: {
        planetID: planetId
      },
    });

  if (!data && loading) {
    return (
      <View testID="progress" style={styles.container}>
        <ActivityIndicator color="#32B768" size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container} testID="container">
      <PlanetCard data={data?.planet as Planet} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterList: {
    padding: 16,
  },
});
