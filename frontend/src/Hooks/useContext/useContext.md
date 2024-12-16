=>useContext is a react Hook that allow you access data from any component with explicitly passing it down through props at every level.
=>useContext is used to manage globle data in react app.

for useContext or make any state globle we need three steps
Step 1 => Create a context using createContext() like in themeContext.jsx 
Step 2 => wrap parent component or app component in contextProvider like app.jsx
Step 3 => use created context by useContext() hook  like header.jsx aur app.jsx