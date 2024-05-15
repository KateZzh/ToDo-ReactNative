import { StyleSheet, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: 'buy milk', key: '1' },
    { text: 'drink coffee', key: '2' },
    { text: 'clean the apartment', key: '3' },
    { text: 'take a shower', key: '4' },
    { text: 'go to bed', key: '5' },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [{ text: text, key: Math.random().toString(36).substring(7) }, ...list];
    });
  };

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key !== key);
    });
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => <ListItem el={item} deleteHandler={deleteHandler} />} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
