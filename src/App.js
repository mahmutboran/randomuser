
import './App.css';
import axios from "axios"
import { useEffect, useState } from "react";

import { ReactComponent as EmailSvg } from "./components/assets/email.svg"
import { ReactComponent as LocationSvg } from "./components/assets/location.svg"
import { ReactComponent as PhoneSvg } from "./components/assets/phone.svg"

function App() {

  const [user, setUser] = useState([])
console.log(user);
  const fetchRandomUser = () => {
 axios("https://randomuser.me/api/").then((res) => {
   
      setUser(res.data.results)
 

    })
 
    console.log(user);
  }


  useEffect(() => {
    fetchRandomUser()
  }, [])

  const handleClick = () => {
    fetchRandomUser()
  }

  console.log(user.length);





  return (

 <div className="App">
 
   {user.length >0 && (  <div className='box'>
        <div className='same-style'>
          <img src={user[0].picture.medium} alt="" style={{borderRadius:"50%"}} />
          <h5>{user[0].name.title} {user[0].name.first} {user[0].name.last}</h5>
        </div>
        <div className='same-style'>
          <span className='email-svg'>

            <EmailSvg />
          </span>
          <p>{user[0].email}</p>
        </div>
        <div className='same-style'>
          <span className='phone-svg'>
            <PhoneSvg  />
          </span>
          <p>{user[0].phone}</p>
        </div>
        <div className='same-style'>
          <span className='location-svg'>
            <LocationSvg  />
          </span>
          <p>{user[0].location.city} {user[0].location.country}</p>
        </div>
        <p>Age:{user[0].dob.age}</p>
        <p>Register Date:{user[0].dob.date.split("T")[0]}</p>
      </div> )}

      <div> 
        <button className='btn btn-primary mt-3' onClick={handleClick} >Random User</button>
      </div>






    </div>
  );
}

export default App;
