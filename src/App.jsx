// import { useLoaderData } from 'react-router-dom'
// import './App.css'
// import CoffeeCard from './components/CoffeeCard';
// import { useState } from 'react';

// function App() {

//   const loadedCoffees = useLoaderData();
//   const [coffees, setCoffees] = useState(loadedCoffees);
 

//   return (
//     <div className='m-20'>
      
//       <h1 className=' text-6xl text-purple-600 text-center my-20'>Hot Coffee: {coffees.length}</h1>
//       <div className='grid md:grid-cols-2 gap-4'>
//       {
//         coffees.map(coffee =><CoffeeCard
//         key = {coffee._id}
//         coffee={coffee}
//         coffees={coffees}
//         setCoffees={setCoffees}

//         ></CoffeeCard>)
//       }
//       </div>
      
//     </div>
//   )
// }

// export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App