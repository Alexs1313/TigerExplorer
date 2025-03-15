import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import GradientText from '../../components/TextGradient';
import Gradient from '../../components/RadialGradient';
import GoBackButton from '../../components/GoBackButton';
import {useState} from 'react';
import FaqQuestion from '../../components/FaqQuestion';

const FaqScreen = () => {
  const data = [
    {
      id: 1,
      title: 'What are the goal of this app?',
      text: `An educational and interactive app about tigers, their habitats, breeds, and ways to help conserve their population. It also includes developmental games for children and adults.`,
    },
    {
      id: 2,
      title:
        'What are the fascinating characteristics of tigers that make them such incredible creatures?',
      text: `Tigers are remarkable creatures with a multitude of fascinating characteristics. Firstly, their magnificent striped fur is not only beautiful but also helps them to camouflage in the wild. Secondly, tigers are excellent swimmers and can cover great distances in water. Their powerful muscles and sharp claws make them incredibly agile hunters. 

Additionally, tigers possess a unique ability to communicate, using various sounds and gestures to interact with one another. These majestic animals are also known for their independent lifestyle, which makes them even more mysterious and intriguing.`,
    },
    {
      id: 3,
      title:
        'How do tigers communicate with each other in the wild, and what unique sounds do they make?',
      text: `Tigers have a complex system of communication that involves vocalizations, body language, and scent marking. They are known for their diverse range of sounds, each serving a specific purpose. 

1. Vocalizations: Tigers can produce a variety of sounds, including roars, growls, chuffing, and moans. The most iconic is the roar, which can be heard up to two miles away. This powerful vocalization serves multiple functions, such as establishing territory, signaling strength, and attracting mates. 

2. Chuffing: This is a friendly sound made by tigers when they greet each other or when they are feeling content. It resembles a series of short, soft coughs and indicates a non-threatening demeanor.

3. Body Language: Tigers also use body language to communicate. For instance, a raised tail can indicate excitement or curiosity, while flattened ears may signal aggression or fear.

4. Scent Marking: Scent marking is crucial for tigers to communicate their presence and territorial boundaries. They use urine and scratch trees to leave their scent, which conveys information about their identity, reproductive status, and territorial claims to other tigers.

Through these various methods, tigers can effectively communicate their intentions and emotions to one another in the vast landscapes they inhabit.`,
    },
    {
      id: 4,
      title:
        'What adaptations do tigers have that enable them to be such effective hunters in their natural habitat?',
      text: `Tigers are apex predators with several remarkable adaptations that make them highly effective hunters. These adaptations can be categorized into physical traits, sensory capabilities, and behavioral strategies.

1. Physical Traits: 

   • Powerful Musculature: Tigers possess strong muscles and a robust build that allow them to take down large prey, such as deer and wild boar. Their powerful forelimbs enable them to pounce and deliver a fatal bite.

   • Camouflage: Their distinctive orange coat with black stripes provides excellent camouflage in their natural habitats, such as forests and grasslands. This allows them to stalk prey without being easily detected.

2. Sensory Capabilities:

   • Acute Vision: Tigers have excellent night vision, which allows them to hunt effectively during dawn and dusk when many of their prey species are active.

   • Enhanced Hearing: Their keen sense of hearing helps them detect the sounds of prey moving through the underbrush, enabling them to approach stealthily.

3. Behavioral Strategies:

   • Stalking Technique: Tigers are solitary hunters that prefer to stalk their prey rather than chase it over long distances. They use their stealth and patience to get as close as possible before launching a surprise attack.

   • Ambush Hunting: They often take advantage of their surroundings by hiding in tall grass or behind trees until they are within striking distance of their prey.

These adaptations not only enhance their hunting efficiency but also ensure their survival in diverse ecosystems where they play a crucial role in maintaining the balance of the food chain.`,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Gradient />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowOffset: {width: 0, height: 4},
            textShadowRadius: 4,
          }}>
          <GoBackButton />
          <GradientText colors={['#F2EA5C', '#E9A90C']} style={styles.title}>
            FAQ
          </GradientText>
        </View>
      </View>
      <ScrollView>
        {data.map(item => (
          <FaqQuestion item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'red'},
  title: {
    marginLeft: 16,

    fontFamily: 'Montserrat',
    fontWeight: '800',
    fontSize: 28,
  },
  arrowIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#E9A90C',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FaqScreen;
