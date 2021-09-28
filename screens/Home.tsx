import React, { useState } from 'react';
import { Button, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import EditModal from './EditModal';

const data = [
  'a',
  'acvddd',
  'c',
  'd',
  'e',
  'b',
  'c',
  'd',
  'e',
  'b',
  'c',
  'd',
  'e',
  'b',
  'c',
  'd',
  'e',
  'b',
  'c',
  'd',
  'e',
  'b',
  'c',
  'd',
  'e',
];
const total = 1000;

const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const onAdd = () => {
    setShowModal(true);
  };

  const onSubmit = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.current}>目前餘額: {total}</Text>
      <View style={styles.button}>
        <Button title="新增帳目" onPress={onAdd} />
      </View>
      <View style={styles.head}>
        <Text style={styles.headItem}>日期</Text>
        <Text style={styles.headItem}>金額</Text>
        <Text style={styles.headItem}>備註</Text>
      </View>
      <ScrollView>
        {data.map((v: string, i: number) => (
          <View key={i} style={[styles.item, i % 2 === 0 ? styles.even : styles.odd]}>
            <Text>{v}</Text>
          </View>
        ))}
      </ScrollView>
      <Modal visible={showModal} animationType="slide">
        <EditModal onSubmit={onSubmit} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    marginBottom: 120,
  },
  current: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
  },
  head: {
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
  },
  headItem: {
    flex: 1,
    textAlign: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderTopColor: 'black',
    borderTopWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    paddingLeft: 50,
    paddingRight: 50,
    paddingBottom: 20,
  },
  item: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
  },
  odd: {
    backgroundColor: '#e6b4091f',
  },
  even: {},
});

export default Home;
