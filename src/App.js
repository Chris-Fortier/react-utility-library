import React from "react";
import "./style/master.scss";
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";

export default class App extends React.Component {
   constructor() {
      super();
      console.log(uiData);
   }

   render() {
      return (
         <div className="container">
            <div className="row">
               {uiData.map((functionUI) => {
                  return <FunctionUI ui={functionUI} />;
               })}
            </div>
         </div>
      );
   }
}
