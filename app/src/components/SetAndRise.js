import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchSetAndRise } from '../store/actions/actionIndex.js';




//-- Washington DC = lat=38.9072&lng=77.0369 ---- STARTING GET
//-- Paris = lat=48.8566  lng=2.3522 
//-- Istanbul = lat=41.0082  lng=28.9784 
//-- Tokyo = lat=35.6762  lng=139.6503 
// So i am going to have the site START in washington DC! then have, lets start with 3 buttons to set the sunrise/sunset latitude and longitude to those coordinates


const SetAndRise = props => {
    console.log('----------------', props.setandrise)
    // above is the DATA i need
    // from it i need .sunset and .sunrise as well as the country it is in
    // 38.9072, 77.0369

    const [latLng, setLatLng] = useState([38.9072, 77.0369])

    const washingtonDCLatLng = () => {
        setLatLng([38.9072, 77.0369])
        console.log('we are not looking at Washington DC')
        document.getElementById('infoContainer').className = "washingtonDCStyles"
    }
    const parisLatLng = () => {
        setLatLng([48.8566, 2.3522])
        console.log('we are not looking at Paris')
        document.getElementById('infoContainer').className = "parisStyles"
    }
    const istanbulLatLng = () => {
        setLatLng([41.0082, 28.9784])
        console.log('we are not looking at Istanbul')
        document.getElementById('infoContainer').className = "istanbulStyles"
    }
    const tokyoLatLng = () => {
        setLatLng([35.6762, 139.6503])
        console.log('we are not looking at Tokyo')
        document.getElementById('infoContainer').className = "tokyoStyles"
    }




    useEffect(() => {
        props.fetchSetAndRise(latLng[0], latLng[1]);
    }, [latLng]);


    return (
            <div id="allContainer">
                <div id="location-btns">
                    <button id="btn" className="washingtonDC" onClick={washingtonDCLatLng}>Washington D.C.</button>
                    <button id="btn" className="paris" onClick={parisLatLng}>Paris</button>
                    <button id="btn" className="istanbul" onClick={istanbulLatLng}>Istanbul</button>
                    <button id="btn" className="tokyo" onClick={tokyoLatLng}>Tokyo</button>
                </div>
                <div id="infoContainer" className="washingtonDCStyles">
                    <div className="props-info">
                        <p>Sunset Time: {props.setandrise.sunset}</p>
                        <p>Sunrise Time: {props.setandrise.sunrise}</p>
                        <p>Day Length: {props.setandrise.day_length}</p>
                    </div>
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
  