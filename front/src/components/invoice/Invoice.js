import React, { useState } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import './invoice.css';

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: '50px',
    backgroundColor: '#E4E4E4'
  },
  section: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginLeft: 100,
    flexGrow: 1,
    fontSize: 35,
    height: 0,
    marginBottom: -100,
    marginTop: 100,
    padding: 0
  },
  title: {
    marginLeft: 600,
    marginTop: 100,
    fontSize: 100,
    fontWeight: 'ultrabold'
  }
});

const Invoice = () => {
  const [numberCommand] = useState(24578);
  const [type] = useState('client');

  return (
    <Document>
      <Page size="A1" style={styles.page}>
        <View style={styles.title}>
          <Text>Facture</Text>
        </View>
        <View style={styles.section}>
          <Text>
            Commande n°
            {numberCommand}
          </Text>
        </View>
        <View style={styles.section}>
          <Text>Commandé le : 25/10/2019</Text>
        </View>
        <View style={styles.section}>
          <Text>Reçu le : 27/10/2019 à 9h55</Text>
        </View>
        <View style={styles.section}>
          {type === 'client' ? (
            <Text>Livré par nico Pastille</Text>
          ) : (
            <Text>Commandé par amina faseur</Text>
          )}
        </View>
        <View style={styles.section}>
          {type === 'client' ? (
            <Text>note attribué 4/5</Text>
          ) : (
            <Text>note reçu 4/5</Text>
          )}
        </View>
        <View style={styles.section}>
          <Text>Prix de la commande HT : 20€</Text>
        </View>
        <View style={styles.section}>
          <Text>Prix de la commande TTC : 24€</Text>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
