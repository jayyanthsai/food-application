import Home from "./components/home";
import Search from "./components/search";
//import "./css/index.css"
import { Routes,Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "./components/ApiUrl";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Restaurant from "./components/restaurant";



function App() {

  let getUserDetails = () => {
    // // #1 get data from localStorage
    let token = localStorage.getItem("zc_auth_token");
    if (token === null) {
      return null;
    } else {
      try {
        let data = jwt_decode(token);
        return data;
      } catch (error) {
        return null;
      }
    }
  };


  let [user, setUser] = useState(getUserDetails());
  let [locationList,setLocationList]=useState([]);
  let getLocationList=async ()=>{
    let url=BASE_URL+"locations";

    // method ====> 1
    // let Responce=await fetch(url,{method:"get"})
    // let data=await Responce.json();

    // method =====>2
    // destructuring the below code because "axios.get(url)" will return an object, with in that we contain the data object.
    try {
        let {data}=await axios.get(url)
        setLocationList(data.locationList);
        //console.log("hello world");
        //console.log(data.locationList);
        //console.log("hello world");
    } catch (error) {
        console.log("error occures in App.jsx ===> getLocationList method");
    }
  };
  useEffect(()=>{getLocationList();},[]);
  return (<><Routes>
    <Route path="/" element={<Home locationList={locationList} user={user}/>} />
    <Route path="/restaurant/:id" element={<Restaurant  /* locationList={locationList} */ user={user}/>}/>
    <Route path="/search/:id/:name" element={<Search locationList={locationList} user={user}/>} />
    
  </Routes>
  </>
  );
}

export default App;
