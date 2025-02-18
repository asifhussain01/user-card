import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'


function App() {
  
const [users, setUsers] = useState([]); 

  const generateData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();

      const { name, email, gender, picture } = data.results[0];

     
      const newUser = {
        id: Date.now(), 
        name: `${name.first} ${name.last}`,
        email,
        gender,
        picture: picture.large,
      };
      
      setUsers((prevUsers) => [...prevUsers, newUser]);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };



  return (
    <>
      <div className=" w-full h-screen "> 
          <Button onClick={generateData} />
          <div className="flex flex-wrap justify-center">
          {users.map((user) => (
          <Card key={user.id} name={user.name} email={user.email} gender={user.gender} picture={user.picture} />
        ))}
          </div>
          
      </div>
        
    </>
  )
}

export default App;

