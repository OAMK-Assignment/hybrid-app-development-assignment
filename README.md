[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/DaqLFyo0)
# Hybrid App Development Week Assignment 2

Your task is to create a simple React Native app that uses Expo Contacts API
to fetch all contacts from the device and display them in a list.
Here is the contact API documentation: https://docs.expo.dev/versions/latest/sdk/contacts/

## Functional requirements
1. The app should have a button with text "Open Contacts"
2. When the user presses the button, Haptic feedback should be triggered with selectionAsync() method.
This is the documentation for Haptic feedback: https://docs.expo.dev/versions/latest/sdk/haptics/
3. When the user presses the button, the app should use Expo Contacts API to fetch all 
contacts from the device.
4. After the contacts have been fetched, the app should display the contacts in a list. The contacts
should be displayed under heading "Contacts list:".
5. The app should render the contact's full name in the list. If the user's first name is "John" and
last name is "Doe", the app should display "John Doe" in the list.

## Technical requirements
1. The app should be implemented in App.tsx file. You can use child components if you want to.
2. The app should be implemented using React Native and Expo.
3. The app should be implemented using functional components and hooks.

## Getting started
1. Clone this repository from your own Github Classroom repository to your own computer.
2. Execute command "npm install" in the terminal to install the dependencies.
3. Execute command "npm start" in the terminal to start the Expo development server.

## Testing
You can run the validation tests on your own machine by running "npm run test" in the terminal.

## Submission
Commit and push your solution to your own Github Classroom repository.
