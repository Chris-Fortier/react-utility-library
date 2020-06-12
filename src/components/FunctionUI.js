import React from "react";

export default class FunctionUI extends React.Component {
   // the thing that happens first before anything else in the class happens
   // constructor() {
   //    super(); // boilerplate

   //    // set default state values for each component
   //    // this.state = {
   //    //    isResultDisplayed: false,
   //    //    isCodeDisplayed: false,
   //    //    result: "",
   //    // };
   // }

   // toggleCodeDisplay() {
   //    this.setState({ isCodeDisplayed: !this.state.isCodeDisplayed }); // set to opposite of what is is (! is the bang symbol)
   //    // if (this.state.isCodeDisplayed === false) {
   //    //    this.setState({ isCodeDisplayed: true });
   //    // } else {
   //    //    this.setState({ isCodeDisplayed: false });
   //    // }
   // }

   // getUserInput() {
   //    const props = this.props;
   //    console.log(props.name);
   //    const inputValues = [];
   //    for (let i = 0; i < props.inputs; i++) {
   //       const element = document.getElementById(`input-${props.name}-${i}`);
   //       const value = element.value;
   //       const convertedValue = convertDataType(value);
   //       inputValues.push(convertedValue);
   //    }
   //    console.log(inputValues);
   //    const result = utils[props.name](...inputValues); // runs the specific function according to the name of this component
   //    console.log(result);

   //    this.setState({
   //       result: JSON.stringify(result),
   //       isResultDisplayed: true,
   //    }); // set the result state of this component to the result of the function
   // }

   render() {
      const props = this.props;

      // const renderInputs = (num) => {
      //    const inputs = [];
      //    for (let i = 0; i < num; i++) {
      //       const id = `input-${props.name}-${i}`;
      //       inputs.push(
      //          <input
      //             type="text"
      //             className="form-control inline-action"
      //             key={id} // input-updateRecords-0
      //             id={id}
      //          />
      //       );
      //    }
      //    return inputs;
      // };

      return (
         <div className="col-12 col-lg-8 offset-lg-2 mb-5">
            {/* <p className="name" onClick={() => this.toggleCodeDisplay()}>
               <b>{props.name}</b> - {props.desc}
            </p> */}
            <h2>{props.title}</h2>
            <a href={props.link}>{props.link}</a>
            <p>{props.description}</p>
            {/* {this.state.isCodeDisplayed && (
               <pre>
                  <code>{String(utils[props.name])}</code>
               </pre>
            )} */}
            {/* use pre (preformatted) for multiple lines of code */}
            {/* <div className="actions float-right">
               {renderInputs(props.inputs)}
               <button
                  className="btn btn-primary inline-action"
                  onClick={() => this.getUserInput()} // a react thing, uses "scope"
               >
                  Run
               </button>
            </div> */}
            <div className="clearfix mb-3"></div>
            {/* {this.state.isResultDisplayed && (
               <div className="alert alert-primary">{this.state.result}</div>
            )} */}
            {/* if isResultDisplayed === true, render this html with the result */}
         </div>
      );
   }
}
