# React Native technical test

The object of this test is to create a passengers list for a flights provider company. the user will be able to add all the passengers that are going to travel together.

## Getting Started

Get the template from the following repository:
[technical test](https://github.com/Awaymo/react-native-technical-test)

It is recommended that all the work is done on a separate branch created by the candidate, including all the labelled commits

### Prerequisites

make sure you have _yarn_ installed in your machine

```
npm install -g yarn
```

### Installing

Use yarn to install all the dependencies (from the project folder)

```
yarn
```

Start the launcher

```
yarn start
```

## Objectives

- Create 2 screens, **passenger list** and **add passenger form**, following the designs supplied
- populate the first passenger with the information from this api call:
  - link to the get passenger info api call
- when clicking on a plus button navigate to the form screen
- when clicking complete on the form screen navigate back to the passengers list screen with the new passenger populated
- the solution should use the REDUX store, actions and reducers to manage the state

### Desired objectives

- Designs should work well on different iPhone screen sizes
- Add a scrollable list of avatars with the images supplied
- add the avatar selected to the passenger form
- use **react-thunk** to make the call to the api
- use **react-navigation** to navigate between screens

## Images

![passenger list empty](<https://github.com/Awaymo/react-native-technical-test/blob/master/test%20images/screens/small/Passenger%20List%20Default%20(Logged%20in%20state).png>)


