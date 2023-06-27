import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "./ApiUrl";
import Header from "./header";

const Search=(props)=>{
  let params = useParams();
  let id = params.id;
  // let name = params.name;

  let navigate=useNavigate();

    // meal_type,loc_id,cuisine,lcost,hcost,sort,page_no
  let {locationList}=props;
  console.log(locationList);
    let [filterData,setFilterData]=useState({meal_type:id,sort:1});
    let setFilterForPage=(event)=>{
      let {value,name}=event.target;
      console.log(value,name);
      switch (name) {
        case "selection_operation": 
          if(value===""){
            delete filterData.loc_id;
            setFilterData({...filterData});
          }
          else{
            setFilterData({...filterData,loc_id:Number(value)});
            console.log(filterData);
          }
          break;
        case "sort_operation":
          setFilterData({...filterData,sort:value});
          break;
        
        case "cost_for_two_operation":
          let arr=value.split("-")
          setFilterData({...filterData,lcost:Number(arr[0]),hcost:Number(arr[1])});
          break;
      }
    }
    
    let [restaurants,setRestaurants]=useState([]);
    let getFilterData=async()=>{
      try {
        console.log(filterData);
        console.log("check...");
        let url=BASE_URL+"filter"
        let {data}=await axios.post(url,filterData)
        console.log("hello");
        console.log(data.restaurantList);
        setRestaurants(data.restaurantList);
      } catch (error) {
        console.log("error occured at search component.");
      }
    }
    useEffect(()=>{
      getFilterData();
    },[filterData])
    return <>
        <div className="container-fluid">
        <div className="row bg-danger justify-content-center">
          {/* <div className="col-10 d-flex justify-content-between py-2">
            <p className="m-0 brand">e!</p>
            <div>
              <button className="btn text-white">Login</button>
              <button className="btn btn-outline-light">
                <i className="fa fa-search" aria-hidden="true"></i>Create a
                Account
              </button>
            </div>
          </div> */}
          <Header logo={false} user={props.user}  />
        </div>
         {/* <!-- section -->  */}
        <div className="row">
          <div className="col-12 px-5 pt-4">
            <p className="h3">Breakfast Places In Mumbai</p>
          </div>
           {/* <!-- food item -->  */}
          <div className="col-12 d-flex flex-wrap px-lg-5 px-md-5 pt-4">
            <div className="food-shadow col-12 col-lg-3 col-md-4 me-5 p-3 mb-4">
              <div className="d-flex justify-content-between">
                <p className="fw-bold m-0">Filter</p>
                <button
                  className="d-lg-none d-md-none btn"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFilter"
                  aria-controls="collapseFilter"
                >
                  <span className="fa fa-eye"></span>
                </button>
              </div>
               {/* <!-- Collapse start  -->  */}
              <div className="collapse show" id="collapseFilter">
                <div>
                  <label htmlFor="" className="form-label">
                    Select Location
                  </label>
                  <select className="form-select form-select-sm" name="selection_operation" onChange={setFilterForPage}>
                  <option value="">--Select Location--</option>
                {locationList?.map((location,index)=>{
                    return <option key={index} value={location.location_id}>{location.name},{location.city}</option>
                })}
                  </select>
                </div>
                <p className="mt-4 mb-2 fw-bold">Cuisine</p>
                <div>
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label ms-1">
                      North Indian
                    </label>
                  </div>
                </div>
                <p className="mt-4 mb-2 fw-bold">Cost For Two</p>
                <div>
                  <div className="ms-1">
                    <input type="radio" onChange={setFilterForPage} name="cost_for_two_operation" className="form-check-input" id="x<500" value="0-500" />
                    <label htmlFor="x<500" className="form-check-label ms-1">
                      less then 500
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="radio" onChange={setFilterForPage} name="cost_for_two_operation" className="form-check-input" value="500-1000" id="500<x<1000" />
                    <label htmlFor="500<x<1000" className="form-check-label ms-1">
                      500 to 1000
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="radio" onChange={setFilterForPage} name="cost_for_two_operation" className="form-check-input" value="1000-1500" id="1000<x<1500" />
                    <label htmlFor="1000<x<1500" className="form-check-label ms-1">
                      1000 to 1500
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="radio" onChange={setFilterForPage} name="cost_for_two_operation" className="form-check-input" value="1500-2000" id="1500<x<2000" />
                    <label htmlFor="1500<x<2000" className="form-check-label ms-1">
                      1500 to 2000
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="radio" onChange={setFilterForPage} name="cost_for_two_operation" className="form-check-input" value="2000-9999" id="2000<x"/>
                    <label htmlFor="2000<x" className="form-check-label ms-1">
                      2000+
                    </label>
                  </div>
                </div>
                <p className="mt-4 mb-2 fw-bold">Sort</p>
                <div>
                  <div className="ms-1">
                    <input type="radio" className="form-check-input" name="sort_operation" checked={filterData.sort==1? true:false}   id="low_to_high_id" onChange={setFilterForPage} value={1} />
                    <label htmlFor="low_to_high_id" className="form-check-label ms-1" >
                      Price low to high
                    </label>
                  </div>
                  <div className="ms-1">
                    <input type="radio" className="form-check-input" name="sort_operation" checked={filterData.sort==-1? true:false} id="high_to_low_id" onChange={setFilterForPage} value={-1} />
                    <label htmlFor="high_to_low_id" className="form-check-label ms-1">
                      Price high to low
                    </label>
                  </div>
                </div>
              </div>
               {/* <!-- Collapse end -->  */}
            </div>
             {/* <!-- search result -->  */}
            <div className="col-12 col-lg-8 col-md-7">
            {restaurants.length==0 ? (<><p className="h2 my-4 text-center">No Restaurant Found</p></>) :
              (restaurants?.map((restaurant,index)=>{
                return               <div onClick={()=>navigate("/restaurant/"+(restaurant._id))} key={index} className="col-12 food-shadow p-4 mb-4">
                <div className="d-flex align-items-center">
                  <img src="/images/food-item.png" className="food-item" />
                  <div className="ms-5">
                    <p className="h4 fw-bold">{restaurant.name}</p>
                    <span className="fw-bold text-muted">FORT</span>
                    <p className="m-0 text-muted">
                      <i
                        className="fa fa-map-marker fa-2x text-danger"
                        aria-hidden="true"
                      ></i>
                      {restaurant.locality} {restaurant.city}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="d-flex">
                  <div>
                    <p className="m-0">CUISINES:</p>
                    <p className="m-0">COST FOR TWO:</p>
                  </div>
                  <div className="ms-5">
                    <p className="m-0 fw-bold">
                    {restaurant.cuisine?.map((value)=>{
                      return value.name
                    }).join(", ")}
                    </p>
                    <p className="m-0 fw-bold">
                      <i className="fa fa-inr mx-1" aria-hidden="true"></i>
                      {restaurant.min_price} /-
                    </p>
                  </div>
                </div>
              </div>
              }))
            }
              <div className="col-12 pagination d-flex justify-content-center">
                <ul className="pages">
                  <li>&lt;</li>
                  <li className="active">1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>&gt;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
}
export default Search;