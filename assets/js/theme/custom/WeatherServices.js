// import React from 'react'
// import ReactDOM from 'react-dom'
// import PageManager from '../page-manager'

// const WeatherConditions = () => (
//     <div>
//         <p>Its Cold out There Today</p>
//     </div>
// )



// export default class WeatherServices extends PageManager {
//   onReady() {        
//       const container = $('#root')[0]
//       ReactDOM.render(<WeatherConditions context={this.context}/>, container)
//   }
// }  


// !!!BEST ATTEMPT HERE!!!

// componentDidMount() {
//   Weather.getCurrent("Kansas City", function(current) {
//     console.log(
//       ["currently:",current.temperature(),"and",current.conditions()].join(" ")
//     );
//   });
    
//   Weather.getForecast("Kansas City", function(forecast) {
//     console.log("forecast high: " + forecast.high());
//     console.log("forecast low: " + forecast.low());
//   });Weather.getCurrent("Kansas City", function(current) {
//     console.log(
//       ["currently:",current.temperature(),"and",current.conditions()].join(" ")
//     );
//   });
    
//   Weather.getForecast("Kansas City", function(forecast) {
//     console.log("forecast high: " + forecast.high());
//     console.log("forecast low: " + forecast.low());
//   });
// }










    //     fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
    //       .then(res => res.json())
    //       .then(json => this.setState({ data: json }));

    // async componentDidMount() {
    //     try {
    //         const response = await fetch(`https://api.com/v1/ticker/?limit=10`);
    //         const json = await response.json();
    //         console.log(json);
    //         // this.setState({ data: json });
    //       } catch (error) {
    //         console.log(error);
    //       }
    //   }



    // makeApiCall = () => {
    //     fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
    //       .then(response => response.json())
    //       .then(
    //         (jsonifiedResponse) => {
    //           this.setState({
    //             isLoaded: true,
    //             headlines: jsonifiedResponse.results
    //           });
    //         })
    //         .catch((error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         });
    //   }

    // componentDidMount() {
    //     this.makeApiCall()
    //   }  
    // onReady() {
    //     const container = $('#root')[0]
    //     ReactDOM.render(<StoreHours context={this.context}/>, container)
    // }




// export class BikeService {
//     async getBike(bikeColor, bikeCity) {
//       try {
//         let response = await fetch(`https://bikeindex.org/api/v3/search?location=97201&distance=1&stolenness=proximity&color=Red&access_code=5f1812606c637a072c56027f4855fe9a717831421245f455ff5f5945bdb6169d`);
//         console.log(response);
//         let jsonifiedResponse = await response.json();
//         console.log(jsonifiedResponse);
//         return jsonifiedResponse;
//       } catch(error) {
//         console.error("There was an error handling your request: " + error.message);
//       }
//     }
//   }
  
//   https://bikeindex.org/api/v3/search?location=${bikeCity}&distance=1&stolenness=proximity&color=${bikeColor}&access_token=${process.env.BIKE_API_KEY}
