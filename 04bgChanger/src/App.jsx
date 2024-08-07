import { useState } from "react"


function App() {

  const [color, setColor] = useState('blue')

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-md px-3 py-2">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'green'}} onClick={()=> setColor('green')}>green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'red'}} onClick={()=> setColor('red')}>red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'blue'}} onClick={()=> setColor('blue')}>blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'Crimson'}} onClick={()=> setColor('Crimson')}>Crimson</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'Pink'}} onClick={()=> setColor('Pink')}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'OrangeRed'}} onClick={()=> setColor('black')}>OrangeRed</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'Tomato'}} onClick={()=> setColor('Tomato')}>Tomato</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'Lavender'}} onClick={()=> setColor('Lavender')}>Lavender</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'HotPink'}} onClick={()=> setColor('HotPink')}>HotPink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'Aqua'}} onClick={()=> setColor('Aqua')}>Aqua</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'DarkGreen'}} onClick={()=> setColor('DarkGreen')}>DarkGreen</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'LimeGreen'}} onClick={()=> setColor('LimeGreen')}>LimeGreen</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'DarkViolet'}} onClick={()=> setColor('DarkViolet')}>DarkViolet</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'Violet'}} onClick={()=> setColor('Violet')}>Violet</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:'black'}} onClick={()=> setColor('black')}>black</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
