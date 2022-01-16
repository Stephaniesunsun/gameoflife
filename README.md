### To run this in development mode, run
`yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
<img width="1058" alt="Screen Shot 2022-01-16 at 5 43 21 PM" src="https://user-images.githubusercontent.com/43166288/149681146-857c0211-ebde-4bec-8e42-600215082adb.png">
<img width="1049" alt="Screen Shot 2022-01-16 at 5 43 37 PM" src="https://user-images.githubusercontent.com/43166288/149681151-3ea00d56-2801-48ab-a230-85234bf297d3.png">
