import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addAccounting } from 'src/redux/walletSlice';

type Props = {
  closeModal: () => void;
};

const EditModal = ({ closeModal }: Props) => {
  const dispatch = useDispatch();
  const [type, setType] = useState<string>('add');
  const [date, setDate] = useState<Date>(new Date());
  const [amount, setAmount] = useState<number>(0);
  const [note, setNote] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onChangeMoney = (v: string) => setAmount(Number(v));

  const onChangeNote = (v: string) => setNote(v);

  const showDatepicker = () => setShow(true);

  const onValueChange = (newValue: string) => setType(newValue);

  const onSubmit = () => {
    dispatch(addAccounting({ type, date: moment(date).format('YYYY-MM-DD'), amount, note }));
    closeModal();
  };

  const onCancel = () => {
    closeModal();
  };

  return (
    <View style={styles.container}>
      <RadioButton.Group onValueChange={onValueChange} value={type}>
        <View style={styles.radioGroup}>
          <RadioButton.Item
            label="儲值"
            value="add"
            color="#005A9C"
            style={styles.radioItem}
            labelStyle={styles.text}
            position="leading"
          />
          <RadioButton.Item
            label="扣錢"
            value="minus"
            color="#005A9C"
            style={styles.radioItem}
            labelStyle={styles.text}
            position="leading"
          />
        </View>
      </RadioButton.Group>
      <View style={styles.item}>
        <Text style={[styles.text, styles.key]}>日期</Text>
        <Text style={[styles.text, styles.value]} onPress={showDatepicker}>
          {moment(date).format('YYYY-MM-DD')}
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={[styles.text, styles.key]}>金額</Text>
        <TextInput
          style={[styles.value, styles.text]}
          keyboardType="numeric"
          onChangeText={onChangeMoney}
          value={String(amount)}
        />
      </View>
      <View style={styles.item}>
        <Text style={[styles.text, styles.key]}>備註</Text>
        <TextInput
          style={[styles.value, styles.text]}
          placeholder="備註"
          onChangeText={onChangeNote}
          value={note}
        />
      </View>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="送出" onPress={onSubmit} />
        </View>
        <View style={styles.button}>
          <Button color="grey" title="取消" onPress={onCancel} />
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  key: {
    flex: 1,
    textAlign: 'center',
  },
  value: {
    flex: 2,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default EditModal;
