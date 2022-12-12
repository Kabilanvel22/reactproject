import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Gethooks() {
  const [values,setValues] = useState([])
  useEffect (() =>{
    axios.get("data.json")
    .then((response) =>{
      console.log(response.data)
      setValues(response.data)
    })
  })
  return (
    <div>
    <table>
      <tr> 
        <th>USERID</th>
        <th>NAME</th>
        <th>DEGREE</th>
        <th>BRANCH</th>
        <th>SKILLS</th>
      </tr>
      {values.map((data) =>
        <tr>
          <td>{data.userId}</td>
          <td>{data.name}</td>
          <td>{data.degree}</td>
          <td>{data.branch}</td>
          <td>{data.skills}</td>
        </tr>
        )}
    </table>
    </div>
  )
}

export default Gethooks