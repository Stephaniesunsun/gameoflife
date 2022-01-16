# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### How to play
1. Draw whatever pattern you want by clicking on the cell then click 'start'
2. Sit back and watch
3. You can always pause in the middle and change the patterns then click on 'start' again
4. There are sample interesting patterns on wikipedia by seaching 'Conway's Game if Life'
5. Have fun!

### Dev notes 
1. useRef doesn't Have to be present, but because the state updates are asynchronous
2. setTimeOut and setInterval have the same effect here
3. Again, because the state updates are asynchronous, it's good to call 'produce' as the callback function instead of assigning a new state to a variable and then set the new state.
