import React from "react";
import "./style/master.scss";
import { uiData } from "./data/ui";
import FunctionUI from "./components/FunctionUI";
import orderBy from "lodash/orderBy";

export default class App extends React.Component {
   constructor() {
      super();
      console.log(uiData);
   }

   render() {
      const orderedData = orderBy(uiData, "onamerder", "desc");

      return (
         <div className="container">
            <div className="row">
               {orderedData.map((functionUI) => {
                  return (
                     <FunctionUI
                        name={functionUI.name}
                        desc={functionUI.desc}
                        inputs={functionUI.inputs}
                     />
                  );
               })}
            </div>
         </div>
      );
   }
}
