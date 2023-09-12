# Demo link
https://myproject03-af5e9.web.app/

# About project
Sherlock Holmes Books store.
Example of React web project with using Redux, '@reduxjs/toolkit' package, and async code with the help of action creator functions.

<em>This project was created in the course React - The Complete Guide 2023 (incl. React Router & Redux) at Udemy.</em>

Cart data is stored in the Firebase Realtime Database. 
Cart content is fetched from the Firebase Realtime Database on every page reload action.
It is used async code for updating state at the Firebase Realtime Database on updating cart events.

User gets an app notification that disappears over time about the loading status.
User can add items to the cart one by one.
User can change item amounts in the cart, delete some items one by one, and get the total amount of the order.



## Used packages
+ @reduxjs/toolkit
+ react-redux

## Used React hooks
+ useDispatch
+ useSelector
+ useEffect
