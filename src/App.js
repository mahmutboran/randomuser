
import './App.css';
import axios from "axios"
import { useEffect, useState } from "react";

import { ReactComponent as EmailSvg } from "./components/assets/email.svg"
import { ReactComponent as LocationSvg } from "./components/assets/location.svg"
import { ReactComponent as PhoneSvg } from "./components/assets/phone.svg"

function App() {

  const [user, setUser] = useState([])

  const fetchRandomUser = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      setUser(res.data.results[0])

    }).catch((err) => {
      console.log(err);
    })
    console.log(user);
  }


  useEffect(() => {
    fetchRandomUser()
  }, [])

  const handleClick = () => {
    fetchRandomUser()
  }

  console.log(user);





  return (
    <div className="App">

      <div className='box'>
        <div className='same-style'>
          <img src={user.picture.medium} alt="" style={{borderRadius:"50%"}} />
          <h5>{user.name.title} {user.name.first} {user.name.last}</h5>
        </div>
        <div className='same-style'>
          <span className='email-svg'>

            <EmailSvg />
          </span>
          <p>{user.email}</p>
        </div>
        <div className='same-style'>
          <span className='phone-svg'>
            <PhoneSvg  />
          </span>
          <p>{user.phone}</p>
        </div>
        <div className='same-style'>
          <span className='location-svg'>
            <LocationSvg  />
          </span>
          <p>{user.location.city} {user.location.country}</p>
        </div>
        <p>Age:{user.dob.age}</p>
        <p>Register Date:{user.dob.date.split("T")[0]}</p>
      </div>
      <div> 

        <button className='btn btn-primary mt-3' onClick={handleClick} >Random User</button>
      </div>






    </div>
  );
}

export default App;
