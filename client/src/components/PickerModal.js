import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

export default function PickerModal({
  visible,
  items,
  title,
  onClose,
  onSelect,
}) {
  return (
    <Modal animated transparent visible={visible} animationType="fade">
      <View style={styles.container}>
        <View styles={styles.pickerContainer}></View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  pickerContainer: {
    height: 200,
    width: '100%',
    backgroundColor: 'white',
  },
});
