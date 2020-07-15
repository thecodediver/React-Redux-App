import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchSetAndRise } from '../store/actions/actionIndex.js';




//-- Washington DC = lat=38.9072&lng=77.0369 ---- STARTING GET
//-- Paris = lat=48.8566  lng=2.3522 
//-- Istanbul = lat=41.0082  lng=28.9784 
//-- Tokyo = lat=35.6762  lng=139.6503 
// So i am going to have the site START in washington DC! then have, lets start with 3 buttons to set the sunrise/sunset latitude and longitude to those coordinates







const SetAndRise = props => {
    let lat = 0
    let lng = 0

    const washDCLatLng = () => {
        lat = (lat * 0) + 38.9072
        lng = (lng * 0) + 77.0369
        return [lat, lng]
    }
    // const parisLatLng = () => {
    //     lat = (lat * 0) + 48.8566
    //     lng = (lng * 0) + 2.3522
    // }
    




    useEffect(() => {
        props.fetchSetAndRise(lat, lng);
    }, []);
    console.log(lat, lng)
    return (
            <div>
                <div className="location-btns">
                    <button className="washingtonDC" onClick={washDCLatLng()}>Washington D.C.</button>
                    <button className="paris" >Paris</button>
                    <button className="istanbul">Istanbul</button>
                    <button className="tokyo">Tokyo</button>
                </div>

                {props.isLoading && <h4>Loading Sunset and Sunrise data...</h4>}
                {props.error && (
                    <p className="error">Uh Oh, something went wrong.... {props.error}</p>
                )}                
            </div>
    )
}

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      setandrise: state.setandrise,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps, 
    { fetchSetAndRise }
  )(SetAndRise);
  