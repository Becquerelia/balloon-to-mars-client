//!IMPORTS:
import ProfileSideBar from "../../components/ProfileSideBar"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import {editUserService} from "../../services/profile.services"

//!MAIN FUNCTION:
function UpdateAccount() {

  //!CONSTANTS & HOOKS:
    
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const navigate = useNavigate()
    
  //!INTERNAL FUNCTIONS:

    //HANDLE FUNCTIONS:
    const handleUsername = (e) => {setUsername(e.target.value)}
    const handleEmail = (e) => {setEmail(e.target.value)}
    const handlePassword = (e) => {setPassword(e.target.value)}
    const handleCity = (e) => {setCity(e.target.value)}
    const handleCountry = (e) => {setCountry(e.target.value)}

   
    
    //FUNCTION TO EDIT USER:  
    const handleSubmit = async (e) =>{    
      e.preventDefault()  
      try {
        const updateUser = {username, email, password, city, country}
        await editUserService(updateUser)
        navigate("/profile")           
      }
      catch(err){
        navigate("/error")
      }    
    }

  return (
    <div className="my-profile" > 
      <ProfileSideBar />
      <div className="card-profile" >
        <h1>Update Account:</h1>
        <div>
          <form onSubmit={handleSubmit} className="formDisposition" >

            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={username} onChange={handleUsername} />

            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={email} onChange={handleEmail} />

            <label htmlFor="description">Password:</label>
            <input type="text" name="email" value={password} onChange={handlePassword} />

            <label htmlFor="city">City:</label>
            <input type="text" name="city" value={city} onChange={handleCity} />

            <label htmlFor="country">Country:</label>
            <input type="text" name="country" value={country} onChange={handleCountry} />        

            <button className="formBtn" >Update User</button>

          </form>
        </div>  
      </div>
    </div>
  )
}

export default UpdateAccount