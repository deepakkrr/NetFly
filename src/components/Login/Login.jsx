// import React, { useState } from "react";
// import "./style.scss";
// import { useNavigate } from "react-router-dom";

// const Login = () => {

//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");
//   const navigate=useNavigate();

//   const handleSubmit=async (e)=>{
//     e.preventDefault();

//     let result= await fetch("http://localhost:5000/login",{
//       method: "post",
//       body: JSON.stringify({email,password}),
//       headers:{
//         "Content-Type":"application/json"
//       }
//     });
//     result=await result.json();
//     console.log(result);
//     localStorage.setItem("user",JSON.stringify(result));
//     if(result.name)
//     {
//       alert("Thanyou For Logging IN");
//       navigate("/");
//     }
//     else{
//       alert("Enter Correct infomation given by you")
//     }
//   }
//   return (
//     <>
//       <>
//         <div style={{ height: 100 }}></div>
//         <div className="LoginForm">
//           <h2>Login Here!!</h2>
//           <form>
//             <label htmlFor="email">Email</label>
//             <input
//              placeholder="Enter Your Email"
//              onChange={(e)=>setEmail(e.target.value)}
//               type="email"
//               id="email"
//               name="email"
//               required
//             />

//             <label htmlFor="password">Password</label>
//             <input
//             placeholder="Enter Your password"
//             onChange={(e)=>setPassword(e.target.value)}
//               type="password"
//               id="password"
//               name="password"
//               required
//             />

//             <button onClick={handleSubmit} type="submit">
//               Login
//             </button>
//           </form>
//         </div>
//         <div style={{ height: 100 }}></div>
//       </>
//     </>
//   );
// };

// export default Login;
