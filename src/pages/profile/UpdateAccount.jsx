//!IMPORTS:
import ProfileSideBar from "../../components/ProfileSideBar"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {getProfileService} from "../../services/profile.services";
import {editUserService} from "../../services/profile.services";
import {uploadPicService} from "../../services/upload.services";

//!MAIN FUNCTION:
function UpdateAccount() {

  //!CONSTANTS & HOOKS:
  const [picProfileUrl, setPicProfileUrl] = useState("")
  const [image, setImage] = useState(false);
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const navigate = useNavigate()

  useEffect(()=>{
    getUserInfo()
  }, [])
    
  //!INTERNAL FUNCTIONS:

    //HANDLE FUNCTIONS:
    const handleUsername = (e) => {setUsername(e.target.value)}
    const handleEmail = (e) => {setEmail(e.target.value)}
    const handlePassword = (e) => {setPassword(e.target.value)}
    const handleCity = (e) => {setCity(e.target.value)}
    const handleCountry = (e) => {setCountry(e.target.value)}

   //FUNCTION TO GET USER INFO AND AUTOFILL FORM:
   const getUserInfo = async () => {
    try {
      const response = await getProfileService();
      //console.log(response.data)
      setPicProfileUrl(response.data.imageUrl)
      setUsername(response.data.username)
      setEmail(response.data.email)
      setPassword(response.data.password)
      setCity(response.data.city)
      setCountry(response.data.country)
    }      
    
    catch(err){
      if(err.response.status === 401){
        navigate("/login")
      } else {
        navigate("/error")
      }      
    }
  }

  //FUNCTION TO UPLOAD A PROFILE PIC:
  const handleFileUpload = (e) => {    
    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0])
    setImage(true)
    uploadPicService(uploadData)
      .then(response => {
        console.log(response)
        setImage(false)
        setPicProfileUrl(response.data.fileUrl);          
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };
      
   //FUNCTION TO EDIT USER:  
    const handleSubmit = async (e) =>{    
      e.preventDefault()  
      try {
        const updateUser = {username, email, password, city, country, picProfileUrl}
        await editUserService(updateUser)
        navigate("/profile")           
      }
      catch(err){
        navigate("/error")
      }    
    }
    
  return (
    <div className="profileBox">
     <div className="my-profile" > 
       <ProfileSideBar />
       <div className="card-profile" >
         <h1>Update Account:</h1>
         <div>
            <form onSubmit={handleSubmit} className="formDisposition" >
              <img src={picProfileUrl} alt="pic" width="250rem" className="avatar"/>
              <label htmlFor="pic">Avatar:</label>             
              <input type="file" name="pic" onChange={handleFileUpload} /> 
              
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" value={username} onChange={handleUsername} />

              <label htmlFor="email">Email:</label>
              <input type="email" name="email" value={email} onChange={handleEmail} />

              <label htmlFor="password">Password:</label>
              <input type="password" name="password" value={password} onChange={handlePassword} />

              <label htmlFor="city">City:</label>
              <input type="text" name="city" value={city} onChange={handleCity} />

              <label htmlFor="country">Country:</label>
              <input type="text" name="country" value={country} onChange={handleCountry} />        

               <button className="formBtn" >Update User</button>

            </form>
          </div>  
        </div>
     </div>
    </div>
  )
}

export default UpdateAccount