// import React, { useState } from "react";
// import "./style.scss";
// import { useNavigate } from "react-router-dom";
// // import ContentWrapper from "../contentWrapper/ContentWrapper";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate=useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     let result = await fetch("http://localhost:5000/signup", {
//       method: "post",
//       body: JSON.stringify({name,email,password}),
//       headers:{
//         "Content-Type":"application/json"
//       }
//     });
//     result=await result.json();
//     console.log(result);
//     if(result)
//     {
//       alert("Welcome To Movix World");
//       navigate("/login");
//     }
//     window.location.reload();
//   };

//   return (
//     <>
//       <div style={{ height: 100 }}></div>
//       <div className="signupForm">
//         <h2>Sign Up</h2>
//         <form>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter Your Name"
//             value={name}
//             id="username"
//             name="username"
//             required
//           />

//           <label htmlFor="email">Email</label>
//           <input
//            type="email"
//            placeholder="Enter Your Email"
//            onChange={(e) => setEmail(e.target.value)}
//           value={email}
//            id="email"
//            name="email"
//            required />

//           <label htmlFor="password">Password</label>
//           <input
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Enter Your Password"
//           value={password}
//           id="password"
//           name="password"
//           required />

//           <button onClick={handleSignup} type="submit">
//             Sign Up
//           </button>
//         </form>
//       </div>
//       <div style={{ height: 100 }}></div>
//     </>
//   );
// };

// export default Signup;
