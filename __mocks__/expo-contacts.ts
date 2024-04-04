// __mocks__/expo-contacts.ts

export const fakeContactData = [
  {"contactType": "person",
   "firstName": "John",
   "id": "C5D6EEA8-BF6A-48CC-96FA-5499B96A4466",
   "imageAvailable": false,
   "lastName": "Doe",
   "name": "John Doe"
  },
  {"contactType": "person",
   "firstName": "Jane",
   "id": "C5D6EEA8-BF6A-48CC-96FA-5499B96A4467",
   "imageAvailable": false,
   "lastName": "Doe",
   "name": "Jane Doe"
  },
  {"contactType": "person",
   "firstName": "John",
   "id": "C5D6EEA8-BF6A-48CC-96FA-5499B96A4468",
   "imageAvailable": false,
   "lastName": "Smith",
   "name": "John Smith"
  },
  {"contactType": "person",
   "firstName": "Jane",
   "id": "C5D6EEA8-BF6A-48CC-96FA-5499B96A4469",
   "imageAvailable": false,
   "lastName": "Smith",
   "name": "Jane Smith"
  }
]; 

export const requestPermissionsAsync: any = jest.fn(() => Promise.resolve({ status: 'granted' }));
export const getContactsAsync: any = jest.fn(() => Promise.resolve({ data: fakeContactData }));