import { useEffect, useState } from "react";
import { BASE_URL } from "./ApiUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./header";
const Home=(props)=>{

    // let [locationList,setLocationList]=useState();
    let [mealTypeList,setMealTypeList]=useState();
    let navigate=useNavigate();
    // let goPage=()=>{
    //     navigate("/search");
    // };
    // let getLocationList=async ()=>{
    //     let url=BASE_URL+"locations";

    //     // method ====> 1
    //     // let Responce=await fetch(url,{method:"get"})
    //     // let data=await Responce.json();

    //     // method =====>2
    //     // destructuring the below code because "axios.get(url)" will return an object, with in that we contain the data object.
    //     try {
    //         let {data}=await axios.get(url)
    //         setLocationList(data.locationList);
    //         console.log("hello world");
    //         console.log(locationList);
    //         console.log("hello world");
    //     } catch (error) {
    //         console.log("error occures in App.jsx ===> getLocationList method");
    //     }
    // };
    let {locationList}=props;
    let getMealType=async()=>{
        let url=BASE_URL+"meal-type";
        try{
            let {data}=await axios.get(url);
            console.log(data.mealtypeList);
            setMealTypeList(data.mealtypeList);
        }
        catch(error){
            console.log("error occured in home component ===> getMealType method");
        }
    }

    // mounting
    useEffect(()=>{getMealType();},[]);
    
    return <>
    <main className="container-fluid">
        <section className="row main-section align-content-start">
          {/* <header className="col-12 py-3">
            <div className="container d-lg-flex justify-content-end d-none">
              <button className="btn text-white me-3">Login</button>
              <button className="btn text-white border border-white">
                Create an account
              </button>
            </div>
          </header> */}
          <Header logo={false} user={props.user}  />
          <section className="col-12 d-flex flex-column align-items-center justify-content-center">
            <p className="brand-name fw-bold my-lg-2 mb-0">e!</p>
            <p className="h1 text-white my-3 text-center">
              Find the best restaurants, cafés, and bars
            </p>
            <div className="search w-50 d-flex mt-3">
              <select
                type="text"
                className="form-control mb-3 mb-lg-0 w-50 me-lg-3 py-2 px-3"
                placeholder="Please type a location"
              >
                <option>--Select Location--</option>
                {locationList?.map((location,index)=>{
                    return <option key={index} value={location.location_id}>{location.name},{location.city}</option>
                })}
              </select>
              <div className="w-75 input-group">
                <span className="input-group-text bg-white">
                  <i className="fa fa-search text-primary"></i>
                </span>
                <input
                  type="text"
                  className="form-control py-2 px-3"
                  placeholder="Search for restaurants"
                />
              </div>
            </div>
          </section>
        </section>
        <section className="row justify-content-center">
          <section className="col-10 mt-3">
            <h3 className="fw-bold text-navy">
              {/* <link to="/search">Quick Searches</link> */}

            </h3>
            <p className="text-secondary">Discover restaurants by Searches</p>
          </section>
          <section className="col-10">
            <section className="row py-2">
              <section  className="col-12 px-0 d-flex justify-content-between flex-wrap">
                {/* <section className="px-0 d-flex border border-1 quick-search-item">
                  <img
                    src="/images/search-item.png"
                    alt=""
                    className="image-item"
                  />
                  <div className="pt-3 px-2">
                    <h4 className="text-navy">Breakfast</h4>
                    <p className="small text-muted">
                      Start your day with exclusive breakfast options
                    </p>
                  </div>
                </section> */}
                {mealTypeList?.map((meals,index)=>{
                    return (<section onClick={()=>{navigate(`/search/${meals.meal_type}/${meals.name}`)}}  key={meals._id} value={meals.meal_type} className="px-0 d-flex border border-1 quick-search-item">
                  <img
                    src={"/images/"+meals.image}
                    alt=""
                    className="image-item"
                  />
                  <div className="pt-3 px-2">
                    <h4 className="text-navy">{meals.name}</h4>
                    <p className="small text-muted">
                      {meals.content}
                    </p>
                  </div>
                </section>)
                })}
                {/* <section className="px-0 d-flex border border-1 quick-search-item">
                  <img
                    src="/images/search-item.png"
                    alt=""
                    className="image-item"
                  />
                  <div className="pt-3 px-2">
                    <h4 className="text-navy">Breakfast</h4>
                    <p className="small text-muted">
                      Start your day with exclusive breakfast options
                    </p>
                  </div>
                </section>
                <section className="px-0 d-flex border border-1 quick-search-item">
                  <img
                    src="/images/search-item.png"
                    alt=""
                    className="image-item"
                  />
                  <div className="pt-3 px-2">
                    <h4 className="text-navy">Breakfast</h4>
                    <p className="small text-muted">
                      Start your day with exclusive breakfast options
                    </p>
                  </div>
                </section>
                <section className="px-0 d-flex border border-1 quick-search-item">
                  <img
                    src="/images/search-item.png"
                    alt=""
                    className="image-item"
                  />
                  <div className="pt-3 px-2">
                    <h4 className="text-navy">Breakfast</h4>
                    <p className="small text-muted">
                      Start your day with exclusive breakfast options
                    </p>
                  </div>
                </section>

                <section className="px-0 d-flex border border-1 quick-search-item">
                  <img
                    src="/images/search-item.png"
                    alt=""
                    className="image-item"
                  />
                  <div className="pt-3 px-2">
                    <h4 className="text-navy">Breakfast</h4>
                    <p className="small text-muted">
                      Start your day with exclusive breakfast options
                    </p>
                  </div>
                </section> */}
                {/* <section className="px-0 d-flex border border-1 quick-search-item">
                  <img
                    src="/images/search-item.png"
                    alt=""
                    className="image-item"
                  />
                  <div className="pt-3 px-2">
                    <h4 className="text-navy">Breakfast</h4>
                    <p className="small text-muted">
                      Start your day with exclusive breakfast options
                    </p>
                  </div>
                </section> */}
              </section>
            </section>
          </section>
        </section>
      </main>
    </>
}
export default Home;