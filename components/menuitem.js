
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MenuItem = ({ nama, harga, onTambahPesanan }) => {
  const [qty, setQty] = useState(0);

  const tambahPesanan = () => {
    setQty(qty + 1);
    onTambahPesanan();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nama}>{nama}</Text>
      <Text style={styles.harga}>
        Rp{harga.toLocaleString('id-ID')}
      </Text>
      <Text style={styles.qty}>Jumlah dipesan : {qty}</Text>

      <Button
        title="Tambah Pesanan"
        onPress={tambahPesanan}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8D8C8',
  },
  nama: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#593D2B',
  },
  harga: {
    fontSize: 15,
    marginVertical: 6,
  },
  qty: {
    marginBottom: 10,
    color: '#666666',
  },
});

export default MenuItem;
