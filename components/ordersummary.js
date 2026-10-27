
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderSummary = ({ totalCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ringkasan Pesanan</Text>

      <Text style={styles.total}>
        Total Item Dipesan : {totalCount}
      </Text>

      {totalCount >= 5 && (
        <Text style={styles.promo}>
          Selamat! Anda Mendapatkan Diskon 10%
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF3E6',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#593D2B',
  },
  total: {
    fontSize: 16,
    color: '#593D2B',
  },
  promo: {
    marginTop: 10,
    color: '#218838',
    fontWeight: 'bold',
  },
});

export default OrderSummary;
