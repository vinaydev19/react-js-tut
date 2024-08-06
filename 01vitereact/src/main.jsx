import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Insidefuc(){
    return(
        <h1>chai is ready | vinay</h1>
    )
}

// const reactElement = {
//     type: "a",
//     props: {
//       href: "http://google.com",
//       target: "_blank",
//     },
//     content: "click me to go google.com",
//   };

const reactElement = React.createElement(
    'a',
    {href: "http://google.com", target: "_blank"},
    'click me to google ||'
)



const anotherElement = (
    <a href='http://google.com' target='_blank'>click me</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
