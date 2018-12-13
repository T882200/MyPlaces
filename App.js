import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

import PlaceImage from "./assets/mbc.jpg";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import { addPlace, deletePlace, selectPlace, deselectPlace } from "./src/store/actions/index";

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import configureStore from './src/store/configureStore';

// const store = configureStore();
// const RNRedux = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )





class App extends Component {
  // state = {
  //   places: [],
  //   selectedPlace: null
  // };

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  
  



  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.props.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList 
          places={this.props.places} 
          onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name)=> dispatch(addPlace(name)),
    onDeletePlace: ()=> dispatch(deletePlace()),
    onSelectPlace: (key)=> dispatch(selectPlace(key)),
    onDeselectPlace: ()=> dispatch(deselectPlace())
  };
};

export default connect(mapStateProps, mapDispatchToProps)(App);
