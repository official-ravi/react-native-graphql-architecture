import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PlanetFilmsConnection } from './../generated/graphql';


interface Props {
  data: {
    id?: string | null;
    name?: string | null;
    filmConnection?: PlanetFilmsConnection | null
  };
}

const PlanetCard: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.textTitle}>{`Moonoa 🌙`}</Text>
        <View style={{ borderColor: '#fff', borderWidth: 1, paddingVertical: 20, paddingHorizontal: 30, marginTop: 30 }}>
          <Text style={styles.movieNameText}>{data.name}</Text>
          <View style={{ flexDirection: 'column', paddingVertical: 20 }}>
            {data?.filmConnection?.films?.map((film, index) => (
              <Text style={styles.subText}>{`${index + 1}.  ${film?.title}`}</Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlanetCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 24,
    flexDirection: 'row',

  },
  image: { width: 70, height: 70 },
  details: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  movieNameText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  textTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff'
  },
  subText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey'
  },
  choseQuantityContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  choseQuantityText: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
