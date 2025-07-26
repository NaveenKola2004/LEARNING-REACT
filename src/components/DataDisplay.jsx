// // src/components/DataDisplay.jsx
// import React, { useEffect, useState } from "react";

// const DataDisplay = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true); // optional
//   const [error, setError] = useState(null); // optional

//   useEffect(() => {
//     fetch("http://localhost:5000/data") // 🔥 Your backend API
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading data...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Fetched Data from Backend</h2>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>
//             {/* Update keys and fields as per your DB columns */}
//             ID: {item.id}, Name: {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DataDisplay;
