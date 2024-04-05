import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  //console.log(puppies)

  return (
    <>

      <div className="App">
        {
          puppies.map((puppy) => {
            const featuredPup = puppies.find((pup) => pup.id === featPupId);
            console.log(featuredPup)
            return <p onClick={() => { setFeatPupId(puppy.id) }} key={puppy.id} > {puppy.name}</p>
          })
        
        }
      </div>
      {featPupId && (
        <div>
          <h2>{setPuppies.name}</h2>
          <ul>
            <li>Age: {setPuppies.age}</li>
            <li>Email: {setPuppies.email}</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App
