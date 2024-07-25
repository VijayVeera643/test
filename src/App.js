// import { MyButton, Picture}  from "./components/changeButtonColor";
// import { Avatar, Player } from "./components/changeButtonColor/picture";
// import { Conditions, Ternary } from "./components/changeButtonColor/conditions";
//import {twozo} from "./components/changeButtonColor/dataFM";
// export default function MyApp() {
//   return (
//     <>
//       <h1>Welcome to my app</h1>
//       <MyButton ChangeColor />
//       < Picture />
//       <div></div>

      
//       <h1>< Player 
//       person = {{
//         name: "vijay",
//         runs: "3000 runs",
//       }}
//       /></h1>
//       <h1>< Player 
//       person = {{
//         name: "arun",
//         runs: "5000 runs",
//       }}
//       /></h1>
//       <h1>< Player 
//       person = {{
//         name: "durai",
//         runs: "7000 runs",
//       }}
//       /></h1>
      
//     </>
//   );
// }
// export default function RulesConditions(){
//   return (
//     <div>
//     <Conditions 
//     name = "vijay"
//     iscalled = {true}/>
//     <Conditions 
//     name = "arun"
//     iscalled = {false}/>
//     <Conditions 
//     name = "durai"
//     iscalled = {true}/>
//     <Conditions 
//     name = "roshan"
//     iscalled = {false}/>
//     <li style={{
//       color:"red"
//     }}>< Ternary
//     name = "sathish"
//     age = "23"
//     smallage={false}/></li>
//     <li style={{
//       color:"red"
//     }}>
//       < Ternary
//     name = "arun"
//     age = "18"
//     smallage={false}/></li>

//     <li style={{
//       color:"red"
//     }}>< Ternary
//     name = "komali"
//     age = "17"
//     smallage={true}/></li>
//     </div>
    
//   )
// }
// export  function Profile() {
//   return (
//      <div>
//     //   <Avatar
//     //     size={100}
//     //     person={{ 
//     //       name: 'Katsuko Saruhashi', 
//     //       imageId: 'YfeOqp2'
//     //     }}
//     //   />
//     //   <Avatar
//     //     size={80}
//     //     person={{
//     //       name: 'Aklilu Lemma', 
//     //       imageId: 'OKS67lh'
//     //     }}
//     //   />
//     //   <Avatar
//     //     size={90}
//     //     person={{ 
//     //       name: 'Lin Lanying',
//     //       imageId: '1bX5QH6'
//     //     }}
//     //   />
//       < Player 
//       person = {{
//         name: "vijay",
//         runs: "3000",
//       }}
//       />
//     </div>
//   );
// }

// export default function player(){
//   const details = twozo.map(playername => 
//     <div style={{
//       border: '2px solid black',
//       display: "inline-block",
//       padding: "10px"
//     }}>
//       <h3 style={{textDecoration: "underline",color: "red"}}> {playername.name} - Score-details</h3>
//       <h4>{"1.name:" +  " " + playername.name}</h4>
//       <h4>{"2.highest-run:" + " " + playername.highest}</h4>
//       <h4>{"3.runs:" + " " + playername.runs}</h4>
//     </div>
//   )
//   return (
//     <h1 style={{
//       textAlign: "center"
//     }}>Twozo Team</h1>
//   )
// }


// import {heading} from "./components/changeButtonColor/content";
// import FrameWork from "./components/changeButtonColor/frame";
// import Create from "./components/changeButtonColor/taxt";
// import AddingEvent from "./components/changeButtonColor/addingEventHandler";
// import ReadingProps from "./components/changeButtonColor/ReadingPropsEvent";
// import Passing from "./components/changeButtonColor/passingEventHandler";
// import Naming from "./components/changeButtonColor/namingPassingHandler";
// import StopPropogation from "./components/changeButtonColor/stopPropogation";
// import { useState } from "react";
// import  {pictureData} from "./components/changeButtonColor/usestateComponent";

// // export default function App(){
// //   return (
// //     <div>
// //     < Create title text ="twozo team"/>
// //     <FrameWork text={heading}/>

// //       <div>
// //         <h3>reading brops</h3>
// //       <button onClick={AddingEvent}>the adding event handlers</button>
// //       < ReadingProps message="the playing">
// //       click me
// //       </ReadingProps>
// //       < ReadingProps message="the update">
// //       click update
// //       </ReadingProps>
// //       </div>

// //       <div>
// //         <h3>passingEventHandler</h3>
// //         <Passing gameMethod="cricket and football"/>  
// //       </div>
// //       <div>
// //         <h1>namingPassingHandler</h1>
// //       <Naming onAdding ={() => alert(`the playing cricket stadium`)}>The Button </Naming>
// //       </div>

// //       <div className="Toolbar" onClick={() => {
// //         alert('the event propogation')
// //         }} 
// //         style={{border: "1px solid black"}}>
// //       <h5>the Event propogatiomn</h5>
// //       <button onClick = { () => alert("the king of twezo team")}>the eventPropogation</button>
// //       </div>

      
       
// //       <div className="Toolbar" onClick={e => {
// //         alert('the event propogation')
// //         }} 
// //         style={{border: "1px solid orange",margin: "40px"}}>
// //       <h5>stop propogatiomn</h5>
// //       <StopPropogation onClick = { () => alert("the king of twezo team")}>the stopPropogation</StopPropogation>
// //       </div>
      
// //     </div>
// //   )
// // }
 

// export default function App(){
//   const[index , setIndex] = useState(0);
//   const[show , setHide] = useState(false);
 
//   function NextPicture(){
//     setIndex(index + 1)
//   }
//   function ShowOrHide(){
//     setHide(!show)
//   } 
//   const vairam = pictureData[index]
//   return(
//     <div style={{border: "1px",margin: "10px"}}>
//       <h1>pictures </h1>
//       <button onClick={NextPicture}>next</button>
//       <h1>{vairam.name}</h1>
//       <button onClick={ShowOrHide}>
//         {show ? "hide" : "show"} details
//       </button>
//       <br></br>
//       {show && <p>{vairam.description}</p> }
//       <img src={vairam.url} alt={vairam.alt} style={{margin: "10px"}}/>
      
//     </div>
//   )
// }

// import Form from "./components/changeButtonColor/ReactForm"
 
// export default function App(){
// const Details = [{
//     name: "vijay",
//     isActive: true,
//     id: 1
// },
// {
//     name: "surender",
//     isActive: false,
//     id: 2
// },
// {
//     name: "arun",
//     isActive: true,
//     id: 3
// },
// {
//     name: "durai",
//     isActive: false,
//     id: 4
// },
// {
//     name: "durai",
//     isActive: false,
//     id: 5
// }]
// const listItem = Details.map((detail) => {
  
//   return <li key={detail.id} style={{color: detail.isActive ? "green" : "blue"}}>{detail.name}</li>
// })
// return(
//   <section>
//      <ul>{listItem}</ul>
//      < Form />
//   </section>
//   ) 
// }

// import { MultipleState } from "./components/queing a series of state updates/updating the same state multiple";
// import UpdateReplace from "./components/queing a series of state updates/what happen update state replace it";
// import  ReplaceUpdate from "./components/queing a series of state updates/what happen replace state after update it"
// import Increment from "./components/rendering takes a snapshot/rendering";
// import {OverTime , TrafficLight} from "./components/state over time/state";
// import ObjectUpdate from "./components/updating objects in states/copying object with the spread syntax";
// import UpdateNestedObject from "./components/updating objects in states/updating a nested objects";
import React from "react"
// import CalculatorUi from "./components/claculator/claculator"
// import {Naming , AddArray , RemoveArray,ReplaceArray } from "./components/claculator/objectfile"
// import Form from "./components/managing  state/connect the event handler to set state"
// import TodoList from "./components/todoLists/indexUi"
// import AddingArray from "./components/updating Array in state/adding to an array"
// import InsertingArray from "./components/updating Array in state/inserting an array"
// import RemovingArray from "./components/updating Array in state/removing from an array"
// import ReplacingArray from "./components/updating Array in state/replacing items an array"
// import TransFormingArray from "./components/updating Array in state/transforming an array"
// import BucketList from "./components/updating Array in state/updating object nside array"
// import Timer from "./components/useEffect/useEffect"
// import {HookCounterOne , FormValidate} from "./components/useEffect/useEffectexamples "
// import {AccessingDom, Apple,  Appling, PreviousValue } from "./components/useRef/useRef.js"
 import TodoListApp from "./components/todoLists/indexNewUi.js"
// import FakeApiExample from "./components/fakeApiTest/fakeApi.js"

export default function App(){
 return (
  <React.Fragment>
      {/* <Increment />
      <OverTime />
      <TrafficLight />
      <MultipleState />
      <UpdateReplace />
      <ReplaceUpdate />
      <ObjectUpdate />
      <UpdateNestedObject /> 
      <CalculatorUi />
      < AddingArray />
      < RemovingArray/> 
      <TransFormingArray /> 
      < ReplacingArray /> 
      <InsertingArray /> 
      <BucketList /> 
      <Form /> 
      <AddArray />
      <RemoveArray />
      <ReplaceArray /> 
      <TodoList />
      <Timer />
      <HookCounterOne />
      <FormValidate /> 
      <Apple />
      <Appling />
      <PreviousValue /> 
      <AccessingDom /> */}
      <TodoListApp />
      {/* <FakeApiExample/> */}
  </React.Fragment>
 )
}