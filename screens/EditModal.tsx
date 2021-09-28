import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

type Props = {
  onSubmit: () => void;
};

const EditModal = ({ onSubmit }: Props) => {
  const [value, setValue] = useState<string>('儲值');

  const onValueChange = (newValue: string) => setValue(newValue);

  return (
    <View style={styles.container}>
      <RadioButton.Group onValueChange={onValueChange} value={value}>
        <View style={styles.radioGroup}>
          <RadioButton.Item
            label="儲值"
            value="儲值"
            color="#005A9C"
            style={styles.radioItem}
            labelStyle={styles.text}
            position="leading"
          />
          <RadioButton.Item
            label="扣錢"
            value="扣錢"
            color="#005A9C"
            style={styles.radioItem}
            labelStyle={styles.text}
            position="leading"
          />
        </View>
      </RadioButton.Group>
      <View>
        <Text style={styles.text}>日期</Text>
      </View>
      <Button title="送出" onPress={onSubmit} />
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
});

export default EditModal;
