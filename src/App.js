import React from "react";
import "./style/master.scss";
import { videos } from "./data/videos";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";

export default class App extends React.Component {
   constructor() {
      super(); // boilerplate line that needs to be in the constructor
      console.log(videos);

      // initialize state inside the constructor via this.state = {key: value, key: value,};
      // set default state values for each component
      // define a component's initial state
      this.state = {
         isFavoritesChecked: false,
         allFuncs: orderBy(videos, "publishDate", "desc"),
         displayedFuncs: orderBy(videos, "publishDate", "desc"),
         orderBy: '["publishDate", "desc"]',
         showTV: true,
         showStore: true
      };

      // this.methodName = this.methodName.bind(this) // example boilerplate to bind this for each method
   }

   // methods happen here, such as what happens when you click on a button

   filterVideos(e) {
      // const isFavoritesChecked = document.getElementById("viewMode-favorites")
      //    .checked; // get the id of what the user clicked on
      const searchInput = document
         .getElementById("search-input")
         .value.toLowerCase(); // get the search input from the user
      const allFuncs = [...this.state.allFuncs]; // make a shallow copy of the array
      // if (isFavoritesChecked) {
      //    // if the user clicked on favorites
      //    this.setState({ isFavoritesChecked: true }); // toggle isFavoritesChecked
      //    const favoriteFuncs = allFuncs.filter((func) => {
      //       // filter only the favorite ones
      //       return func.isFavorite;
      //    });
      //    console.log(favoriteFuncs);
      //    const filteredFuncs = favoriteFuncs.filter((func) => {
      //       // filter only items whose name contains the search input
      //       return func.title.toLowerCase().indexOf(searchInput) >= 0;
      //    });
      //    const orderArr = JSON.parse(this.state.orderBy);
      //    console.log("orderArr:", ...orderArr);
      //    const orderedFuncs = orderBy(filteredFuncs, ...orderArr);
      //    this.setState({ displayedFuncs: orderedFuncs }); // set the displayed functions to all the functions
      this.setState({ isFavoritesChecked: false }); // toggle isFavoritesChecked
      const filteredFuncs = allFuncs.filter((func) => {
         // filter only items whose name contains the search input
         return func.title.toLowerCase().indexOf(searchInput) >= 0;
      });
      const orderArr = JSON.parse(this.state.orderBy);
      console.log("orderArr:", ...orderArr);
      const orderedFuncs = orderBy(filteredFuncs, ...orderArr);

      const categoryFilteredVideos = orderedFuncs.filter((func) => {
         // filter only items that have the keyword "store"
         return func.categories.indexOf("Store") >= 0;
      });
      this.setState({ displayedFuncs: categoryFilteredVideos });


   }

   changeOrder(e) {
      this.setState({ orderBy: e.target.value }, () => {
         this.filterVideos();
      });
   }

   render() {
      // In the render() method, before the return statement,
      // you can write JavaScript directly. For example, you could declare functions,
      // access data from state or props, perform computations on this data, and so on.

      // const getFunctionsNum = () => {
      //    return videos.length;
      // };

      return (
         <div className="container">
            <div className="row">
               <div className="col-12 col-lg-8 offset-lg-2 mb-5">
                  <h1 className="d-flex justify-content-center">
                     Las Vegas Coin Company Videos
                  </h1>
                  {/* <p className="text-center lead mb-4">
                     {getFunctionsNum()}&nbsp;functions documented
                  </p> */}

                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-all"
                        name="viewMode"
                        className="custom-control-input"
                        checked={!this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.filterVideos(e);
                        }} // onChange, call this function
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-all"
                     >
                        Show all
                     </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input
                        type="radio"
                        id="viewMode-favorites"
                        name="viewMode"
                        className="custom-control-input"
                        checked={this.state.isFavoritesChecked}
                        onChange={(e) => {
                           this.filterVideos(e);
                        }} // onChange, call this function
                     />
                     <label
                        className="custom-control-label"
                        htmlFor="viewMode-favorites"
                     >
                        Favorites
                     </label>
                  </div>


                  <div className="form-check form-check-inline">
                     <input className="form-check-input" type="checkbox" id="checkbox-store" value="option1"/>
                     <label className="form-check-label" for="checkbox-store">Store</label>
                  </div>
                  <div className="form-check form-check-inline">
                     <input className="form-check-input" type="checkbox" id="checkbox-tv" value="option2"/>
                     <label className="form-check-label" for="checkbox-tv">TV</label>
                  </div>

                  <div className="row mt-3">
                     <div className="col-6">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Search all functions"
                           aria-label="Search all functions"
                           aria-describedby="search-input"
                           id="search-input"
                           onChange={(e) => {
                              this.filterVideos(e);
                           }} // onChange, call this function
                        />
                     </div>
                     <div className="col-6">
                        <select
                           value={this.state.orderBy}
                           className="form-control"
                           onChange={(e) => this.changeOrder(e)}
                        >
                           <option value='["publishDate","desc"]'>
                              Newest on Top
                           </option>
                           <option value='["publishDate","asc"]'>
                              Oldest on Top
                           </option>
                           <option value='["title", "asc"]'>A - Z</option>
                           <option value='["title", "desc"]'>Z - A</option>
                        </select>
                     </div>
                  </div>
               </div>
               {this.state.displayedFuncs.map((functionUI) => {
                  const { title, link, description } = functionUI;
                  return (
                     <FunctionUI
                        key={title}
                        title={title}
                        link={link}
                        description={description}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
