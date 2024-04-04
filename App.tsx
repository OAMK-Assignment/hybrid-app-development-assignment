import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import * as Haptics from 'expo-haptics';

interface Contact {
  id: string;
  firstName: string;
  lastName: string;
}

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isContactsFetched, setIsContactsFetched] = useState(false);

  const openContactsHandler = async () => {
    try {
      await Haptics.selectionAsync();
      const { status } = await Contacts.requestPermissionsAsync();
      
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: ['firstName', 'lastName'],
        });
        
        if (data.length > 0) {
          setContacts(data as Contact[]);
          setIsContactsFetched(true);
        }
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hybrid App Development Week Assignment 2</Text>
      <Button title="Open Contacts" onPress={openContactsHandler} />

      {isContactsFetched && (
        <View>
          <Text style={styles.contactsHeading}>Contacts list:</Text>
          <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Text style={styles.contactName}>
                {item.firstName} {item.lastName}
              </Text>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  contactsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  contactName: {
    fontSize: 16,
    marginTop: 10,
  },
});
