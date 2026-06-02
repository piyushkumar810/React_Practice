import React, { useState, useEffect } from "react";

const ApiExample = () => {
  const [data, setData] = useState([]);

  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "8px",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>User Details</h1>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableStyle}>ID</th>
            <th style={tableStyle}>Name</th>
            <th style={tableStyle}>Username</th>
            <th style={tableStyle}>Email</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td style={tableStyle}>{user.id}</td>
              <td style={tableStyle}>{user.name}</td>
              <td style={tableStyle}>{user.username}</td>
              <td style={tableStyle}>{user.email}</td>
              <td style={tableStyle}>{user.phone}</td>

            </tr>
          ))}
        </tbody>
      </table> 3
    </div>
  );
};

export default ApiExample;