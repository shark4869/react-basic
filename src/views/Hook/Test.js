// import React, { useState } from 'react';

// function Show() {
//   const [isShow, setIsShow] = useState(false);

//   function handleClick() {
//     setIsShow(!isShow);
//   }


//   return (
//     <div>
    
//         <button onClick={handleClick} style={{color: "blue"}}>Click me!</button>
//         {isShow && <p>Hello ^^</p>}
//     </div>
//   );
// }

// export default Show;
// import { useState } from "react";
// function User() {
//     const [name, setName] = useState("Uyen");
//     const [age, setAge] = useState("22");
//     const [address, setAddress] = useState("BMT");
//     const updateUser = () => {
//         setAddress("BMT, Đăk Lăk");
//     }
//     return (
//         <>
//         <h1>Hello {name}</h1>
//         <p>Age: {age}</p>
//         <p>address: {address}</p>
//         <button type="button" onClick={updateUser} style={{color: "blue"}}>Update</button>
//         </>
//     )
// }
// export default User;
//----------useState
// import React, { createContext, useContext, useState } from 'react';
// const MyContext = createContext();
// function Parent() {
//   const [count, setCount] = useState(0);
//   return (
//     <MyContext.Provider value={{ count, setCount }}>
//       <Child />
//     </MyContext.Provider>
//   );
// }
// function Child() {
//   const { count, setCount } = useContext(MyContext);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)} style={{color: "blue"}}>Increment Count</button>
//     </div>
//   );
// }
// export default Parent;
//useContext------------------
// import React, { useState, useEffect } from "react";
// function Count() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("The count has changed.");
//   });
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)} style={{color: "blue"}}>Click me</button>
//     </div>
//   );
// }
// export default Count;

//tải dữ liệu từ một API khi component được gắn vào DOM

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function LoadAPI() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get("https://reqres.in/api/users?page=1");
//       const data = response.data.data;
//       setData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from API:</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.first_name} {item.last_name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default LoadAPI;

