import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
  Animated,
} from 'react-native';
import {reserves} from '../../data/reserves';
import {news} from '../../data/news';

import SegmentedControl from 'react-native-segmented-control-2';

import {useNavigation} from '@react-navigation/native';

import Gradient from '../../components/RadialGradient';
import {useEffect, useState} from 'react';
import GradientText from '../../components/TextGradient';

import MainTigerCard from '../../components/MainTigerCard';

const DefaultMainScreen = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View style={{marginHorizontal: 16}}>
        <View
          style={{
            marginTop: 10,

            shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 1,
            shadowRadius: 2,
            width: 360,
          }}>
          <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
            Reserves and Volunteering
          </GradientText>
        </View>

        <SegmentedControl
          style={{
            marginTop: 19,
            marginBottom: 16,
            backgroundColor: '#EA4A56',
            borderRadius: 100,
            height: 40,
            width: '100%',
          }}
          activeTabColor="#fff"
          activeTextColor="#000"
          textStyle={{color: '#fff'}}
          tabs={['Reserves', 'News']}
          selectedTabStyle={{
            borderRadius: 100,
            borderColor: 'rgba(0, 0, 0, 0.04)',
            borderWidth: 0.5,

            textShadowColor: 'rgba(0, 0, 0, 0.04)',
            textShadowOffset: {width: 0, height: 3},

            textShadowRadius: 8,
          }}
          onChange={index => setSelectedIdx(index)}
        />
      </View>

      {selectedIdx === 0 ? (
        <ScrollView
          horizontal
          style={{paddingHorizontal: 16}}
          showsHorizontalScrollIndicator={false}>
          {reserves.map(item => (
            <MainTigerCard item={item} key={item.id} />
          ))}
        </ScrollView>
      ) : (
        <ScrollView style={{marginBottom: 80}}>
          <View style={{alignItems: 'center'}}>
            {news.map(item => (
              <View key={item.id}>
                <Pressable style={styles.newsImage} width={358}>
                  <Image source={item.image} />
                </Pressable>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 360,
                    }}>
                    <View
                      style={{
                        paddingLeft: 8,
                        marginHorizontal: 16,
                        width: 306,
                      }}>
                      <Text style={styles.newsTitle} numberOfLines={1}>
                        {item.title}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={styles.newsBtnContainer}
                        onPress={() =>
                          navigation.navigate('NewsDetails', {item})
                        }>
                        <Image
                          source={require('../../assets/newsImg/arrow.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{width: 358}}>
                    <Text style={styles.newsAboutText} numberOfLines={2}>
                      {item.aboutText}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    lineHeight: 36,
  },
  reservesContainer: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  newsContainer: {
    padding: 20,
    backgroundColor: 'yellow',
    borderRadius: 100,
  },
  mainImage: {},
  itemTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'Montserrat',
    marginLeft: 16,
    paddingRight: 20,
  },
  newsImage: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
  newsTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 6,
    marginRight: 0,
  },
  newsAboutText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
    marginHorizontal: 16,
    gap: 15,
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  newsBtnContainer: {
    width: 33,
    height: 33,
    backgroundColor: '#2A2A2A',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
});

export default DefaultMainScreen;
