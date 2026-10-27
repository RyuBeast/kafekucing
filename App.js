import OrderSummary from './components/ordersummary';
import MenuItem from './components/menuitem';

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
  { id: '4', nama: 'American Cappuccino', harga: 22000 },
  { id: '5', nama: 'Caramel Macchiato', harga: 24000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const tambahTotalPesanan = () => {
    setTotalPesanan(totalPesanan + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.judul}>Kafe Kucing</Text>
        <Text style={styles.subtitle}>
          Selamat datang di Kafe Kucing!
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <OrderSummary totalCount={totalPesanan} />

        <Text style={styles.sectionTitle}>
          Daftar Menu
        </Text>

        {DAFTAR_MENU.map((menu) => (
          <MenuItem
            key={menu.id}
            nama={menu.nama}
            harga={menu.harga}
            onTambahPesanan={tambahTotalPesanan}
          />
        ))}

        <Text style={styles.footer}>
          Terima kasih sudah mampir ke Kafe Kucing;)
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F3',
    paddingTop: 55,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 24,
  },
  judul: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#593D2B',
  },
  subtitle: {
    fontSize: 14,
    color: '#8A7160',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#593D2B',
    marginBottom: 12,
  },
  footer: {
    textAlign: 'center',
    color: '#8A7160',
    marginTop: 10,
    marginBottom: 25,
  },
});
