// import * as React from 'react';
// import {StyleSheet, Text, View, Dimensions} from 'react-native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {DraxProvider, DraxView, DraxList} from 'react-native-drax';

// const gestureRootViewStyle = {flex: 1};

// export default function Puzzles() {
//   const draggableItemList = [
//     {
//       id: 1,
//       name: 'A',
//       background_color: 'red',
//     },
//     {
//       id: 2,
//       name: 'B',
//       background_color: 'pink',
//     },
//     {
//       id: 3,
//       name: 'C',
//       background_color: 'orange',
//     },
//     {
//       id: 4,
//       name: 'D',
//       background_color: '#aaaaff',
//     },
//     {
//       id: 5,
//       name: 'E',
//       background_color: 'blue',
//     },
//     {
//       id: 6,
//       name: 'F',
//       background_color: 'green',
//     },
//     {
//       id: 7,
//       name: 'G',
//       background_color: 'brown',
//     },
//     {
//       id: 8,
//       name: 'H',
//       background_color: '#aaaaff',
//     },
//     {
//       id: 9,
//       name: 'I',
//       background_color: 'red',
//     },
//     {
//       id: 10,
//       name: 'J',
//       background_color: 'pink',
//     },
//     {
//       id: 11,
//       name: 'K',
//       background_color: 'orange',
//     },
//     {
//       id: 12,
//       name: 'L',
//       background_color: '#aaaaff',
//     },
//   ];
//   const FirstReceivingItemList = [
//     {
//       id: 13,
//       name: 'M',
//       background_color: '#ffaaff',
//     },
//     {
//       id: 14,
//       name: 'N',
//       background_color: '#ffaaff',
//     },
//     {
//       id: 15,
//       name: 'O',
//       background_color: '#ffaaff',
//     },
//     {
//       id: 16,
//       name: 'P',
//       background_color: '#ffaaff',
//     },
//   ];

//   const [receivingItemList, setReceivedItemList] = React.useState(
//     FirstReceivingItemList,
//   );
//   const [dragItemMiddleList, setDragItemListMiddle] =
//     React.useState(draggableItemList);

//   const DragUIComponent = ({item, index}) => {
//     return (
//       <DraxView
//         style={[
//           styles.centeredContent,
//           styles.draggableBox,
//           {backgroundColor: item.background_color},
//         ]}
//         draggingStyle={styles.dragging}
//         dragReleasedStyle={styles.dragging}
//         hoverDraggingStyle={styles.hoverDragging}
//         dragPayload={index}
//         longPressDelay={150}
//         key={index}>
//         <Text style={styles.textStyle}>{item.name}</Text>
//       </DraxView>
//     );
//   };

//   const ReceivingZoneUIComponent = ({item, index}) => {
//     return (
//       <DraxView
//         style={[
//           styles.centeredContent,
//           styles.receivingZone,
//           {backgroundColor: item.background_color},
//         ]}
//         receivingStyle={styles.receiving}
//         renderContent={({viewState}) => {
//           const receivingDrag = viewState && viewState.receivingDrag;
//           const payload = receivingDrag && receivingDrag.payload;
//           return (
//             <View>
//               <Text style={styles.textStyle}>{item.name}</Text>
//             </View>
//           );
//         }}
//         key={index}
//         onReceiveDragDrop={event => {
//           let selected_item = dragItemMiddleList[event.dragged.payload];
//           console.log('onReceiveDragDrop::index', selected_item, index);
//           console.log('onReceiveDragDrop :: payload', event.dragged.payload);
//           let newReceivingItemList = [...receivingItemList];
//           console.log(
//             'onReceiveDragDrop :: newReceivingItemList',
//             newReceivingItemList,
//           );
//           newReceivingItemList[index] = selected_item;
//           setReceivedItemList(newReceivingItemList);

//           let newDragItemMiddleList = [...dragItemMiddleList];
//           console.log(
//             'onReceiveDragDrop :: newDragItemMiddleList 1',
//             newDragItemMiddleList,
//           );
//           newDragItemMiddleList[event.dragged.payload] =
//             receivingItemList[index];
//           console.log(
//             'onReceiveDragDrop :: newDragItemMiddleList 2',
//             newDragItemMiddleList,
//           );
//           setDragItemListMiddle(newDragItemMiddleList);
//         }}
//       />
//     );
//   };

//   const FlatListItemSeparator = () => {
//     return <View style={styles.itemSeparator} />;
//   };

//   return (
//     <GestureHandlerRootView style={gestureRootViewStyle}>
//       <View>
//         <Text style={styles.headerStyle}>
//           {'Drag drop and swap between lists'}
//         </Text>
//       </View>
//       <DraxProvider>
//         <View style={styles.container}>
//           <View style={styles.receivingContainer}>
//             {receivingItemList.map((item, index) =>
//               ReceivingZoneUIComponent({item, index}),
//             )}
//           </View>
//           <View style={styles.draxListContainer}>
//             <DraxList
//               data={dragItemMiddleList}
//               renderItemContent={DragUIComponent}
//               keyExtractor={(item, index) => index.toString()}
//               numColumns={4}
//               ItemSeparatorComponent={FlatListItemSeparator}
//               scrollEnabled={true}
//             />
//           </View>
//         </View>
//       </DraxProvider>
//     </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 12,
//     paddingTop: 40,
//     justifyContent: 'space-evenly',
//   },
//   centeredContent: {
//     borderRadius: 10,
//   },
//   receivingZone: {
//     height: Dimensions.get('window').width / 4 - 12,
//     borderRadius: 10,
//     width: Dimensions.get('window').width / 4 - 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 5,
//   },
//   receiving: {
//     borderColor: 'red',
//     borderWidth: 2,
//   },
//   draggableBox: {
//     width: Dimensions.get('window').width / 4 - 12,
//     height: Dimensions.get('window').width / 4 - 12,
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 5,
//   },
//   dragging: {
//     opacity: 0.2,
//   },
//   hoverDragging: {
//     borderColor: 'magenta',
//     borderWidth: 2,
//   },
//   receivingContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   itemSeparator: {
//     height: 15,
//   },
//   draxListContainer: {
//     padding: 5,
//     height: 200,
//   },
//   receivingZoneContainer: {
//     padding: 5,
//     height: 100,
//   },
//   textStyle: {
//     fontSize: 18,
//   },
//   headerStyle: {
//     marginTop: 20,
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 20,
//   },
// });

//------------------------------------------------------------------->

// import React from 'react';
// import {Image, StyleSheet, Text, View} from 'react-native';
// import DragAndDrop from 'volkeno-react-native-drag-drop';

// export default function Puzzles() {
//   const [items, setItems] = React.useState([
//     {id: 1, text: 'Test item 1', image: require('../../assets/quiz/tiger.png')},
//     {id: 2, text: 'Test item 2'},
//     {id: 3, text: 'Test item 3'},
//     {id: 4, text: 'Test item 4'},
//     {id: 5, text: 'Test item 5'},
//     {id: 6, text: 'Test item 6'},
//   ]);
//   const [zones, setZones] = React.useState([
//     {
//       id: 1,
//       text: 'Test zone 1',
//       items: [{id: 5, text: 'Test existing item 5'}],
//     },
//     {
//       id: 2,
//       text: 'Test zone 2',
//     },
//   ]);

//   return (
//     <DragAndDrop
//       style={styles.container}
//       contentContainerStyle={styles.contentContainerStyle}
//       itemKeyExtractor={item => item.id}
//       zoneKeyExtractor={zone => zone.id}
//       zones={zones}
//       items={items}
//       itemsContainerStyle={styles.itemsContainerStyle}
//       zonesContainerStyle={styles.zonesContainerStyle}
//       onMaj={(zones, items) => {
//         setItems(items);
//         setZones(zones);
//       }}
//       itemsInZoneStyle={styles.itemsInZoneStyle}
//       renderItem={item => {
//         return (
//           <View style={styles.dragItemStyle}>
//             <Text style={styles.dragItemTextStyle}>{item.text}</Text>
//             <Image style={{width: 40, height: 40}} source={item.image} />
//           </View>
//         );
//       }}
//       renderZone={(zone, children, hover) => {
//         return (
//           <View
//             style={{
//               ...styles.dragZoneStyle,
//               backgroundColor: hover ? '#E2E2E2' : '#FFF',
//             }}>
//             <Text stylae={styles.dragZoneTextStyle}>{zone.text}</Text>
//             {children}
//           </View>
//         );
//       }}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   itemsInZoneStyle: {
//     width: '100%',
//   },
//   contentContainerStyle: {
//     padding: 20,
//     paddingTop: 40,
//   },
//   itemsContainerStyle: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   zonesContainerStyle: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   dragItemStyle: {
//     borderColor: 'red',
//     borderWidth: 1,
//     width: '47%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 5,
//     backgroundColor: '#F5F5F5',
//     padding: 10,
//   },
//   dragItemTextStyle: {
//     color: '#011F3B',
//     fontWeight: '700',
//     textAlign: 'center',
//   },
//   dragZoneStyle: {
//     borderColor: '#F39200',
//     borderWidth: 1,
//     width: '47%',
//     padding: 15,
//     minHeight: 130,
//     marginVertical: 15,
//   },
//   dragZoneTextStyle: {
//     position: 'absolute',
//     opacity: 0.2,
//     zIndex: 0,
//     alignSelf: 'center',
//     top: '50%',
//   },
// });
//////////////////////////////////////////////////////////

// import React from 'react';
// import {Text, StyleSheet, SafeAreaView} from 'react-native';
// import DragProvider from 'react-native-useful-dnd';

// const dragItemStyles = StyleSheet.create({
//   view: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#FFD517',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: 40,
//   },
//   drag: {
//     borderWidth: 1,
//     borderColor: 'red',
//   },
//   dragOver: {
//     borderWidth: 5,
//     borderColor: 'olive',
//   },
// });

// const DragItem = ({style, color, drag, dragOver, ...props}) => (
//   <SafeAreaView
//     {...props}
//     style={[
//       dragItemStyles.view,
//       {backgroundColor: color},
//       drag && dragItemStyles.drag,
//       dragOver && dragItemStyles.dragOver,
//       style,
//     ]}>
//     <Text>DRAG_MEssssss</Text>
//   </SafeAreaView>
// );

// export default class AboutUs extends React.Component {
//   handleDrop = (DropZoneId, draggableId) =>
//     console.log('onDrop', DropZoneId, draggableId);

//   handleDragStart = draggableId => console.log('handleDragStart', draggableId);

//   handleDragMove = draggableId => console.log('handleDragMove', draggableId);

//   handleDragEnter = (draggableId, DropZoneId) =>
//     console.log('handleDragEnter', draggableId, DropZoneId);

//   handleDragLeave = (draggableId, DropZoneId) =>
//     console.log('handleDragLeave', draggableId, DropZoneId);

//   handleDrop = (draggableId, DropZoneId) =>
//     console.log('handleDrop', draggableId, DropZoneId);

//   handleDragEnd = draggableId => console.log('handleDragEnd', draggableId);

//   render() {
//     return (
//       <DragProvider
//         onDragStart={this.handleDragStart}
//         onDragMove={this.handleDragMove}
//         onDragEnter={this.handleDragEnter}
//         onDragLeave={this.handleDragLeave}
//         onDrop={this.handleDrop}
//         onDragEnd={this.handleDragEnd}>
//         <View style={{height: 150, backgroundColor: '#eaeaea'}}>
//           <DragProvider.Draggable id="purple">
//             {({dragOver, drag}) => (
//               <DragItem color="purple" drag={drag} dragOver={dragOver} />
//             )}
//           </DragProvider.Draggable>

//           <DragProvider.Draggable id="orange">
//             <DragItem color="orange" />
//           </DragProvider.Draggable>
//         </View>

//         <DragProvider.DropZone id="myDropZone">
//           {({dropOver}) => (
//             <View
//               style={[
//                 {
//                   height: 100,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   backgroundColor: 'yellow',
//                 },
//                 dropOver && {backgroundColor: 'orange'},
//               ]}>
//               <Text>Dropzone</Text>
//             </View>
//           )}
//         </DragProvider.DropZone>
//       </DragProvider>
//     );
//   }
// }

//-------------------------------------------------------.....

import {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
const Puzzles = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [chooseZone, setChooseZone] = useState(false);

  return (
    <View style={styles.box}>
      <View style={styles.a}></View>

      {!chooseZone && (
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../../assets/encyclopediaImg/tiger1.png')}
          />
        </TouchableOpacity>
      )}
      <TouchableOpacity>
        <Image
          style={{width: 40, height: 40}}
          source={require('../../assets/encyclopediaImg/tiger1.png')}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setChooseZone(!chooseZone)}>
        <View
          style={{
            borderWidth: 2,
            width: 40,
            height: 50,
            marginTop: 100,
          }}>
          {chooseZone && (
            <Image
              style={{width: 40, height: 40}}
              source={require('../../assets/encyclopediaImg/tiger1.png')}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {marginTop: 50, marginLeft: 90},
  a: {gridarea: '1/1', width: ' 0%', background: 'red', transition: '0s .2s'},
});

export default Puzzles;

// import React, {useRef, useState} from 'react';
// import {View, StyleSheet, PanResponder, Animated, Image} from 'react-native';

// const DragAndDropImage = ({imageUrl}) => {
//   const position = useRef(new Animated.ValueXY()).current;
//   const [dragging, setDragging] = useState(false);

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderGrant: () => {
//         setDragging(true);
//       },
//       onPanResponderMove: Animated.event(
//         [
//           null,
//           {
//             dx: position.x,
//             dy: position.y,
//           },
//         ],
//         {useNativeDriver: false},
//       ),
//       onPanResponderRelease: () => {
//         setDragging(false);
//       },
//     }),
//   ).current;

//   return (
//     <Animated.View
//       style={[
//         styles.imageContainer,
//         {
//           transform: position.getTranslateTransform(),
//           opacity: dragging ? 0.8 : 1,
//         },
//       ]}
//       {...panResponder.panHandlers}>
//       <Image style={styles.image} source={{uri: imageUrl}} />
//     </Animated.View>
//   );
// };

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <DragAndDropImage>
//         <Image source={require('../../assets/encyclopediaImg/tiger1.png')} />
//       </DragAndDropImage>
//       <DragAndDropImage imageUrl="../../assets/encyclopediaImg/tiger2.png" />
//       <DragAndDropImage imageUrl="https://media.geeksforgeeks.org/wp-content/uploads/20230721212132/Geeksforgeeks-logo.png" />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5F5F5',
//   },
//   imageContainer: {
//     width: 100,
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 10,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 8,
//   },
// });
// export default App;

//-------------------------------------------------------...
