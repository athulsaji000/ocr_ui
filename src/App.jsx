import { useState, useEffect } from 'react'
import axios from "axios"

const SHEET_LINK = "https://docs.google.com/spreadsheets/d/1Aq5OisPZYA7gmurwF5J3xnNd_2XgW9SRySNXH4aGR9o/edit?usp=sharing"
const KEY = "AIzaSyAVWcMrfVFQp0shYo_Lql_07nhK6xj-5yI"
const URL = `https://sheets.googleapis.com/v4/spreadsheets/1Aq5OisPZYA7gmurwF5J3xnNd_2XgW9SRySNXH4aGR9o/values/Sheet1?valueRenderOption=FORMATTED_VALUE&key=${KEY}`

function App() {
  const [sheetList, setSheetList] = useState([])

  async function getSheetData(){
    await axios.get(URL).then(res => {
      console.log(res.data.values)
      const list = res.data.values
      setSheetList(list)
    }).catch(err => {
      console.log(err)
    })
  }

  async function postSheetData(){
    await axios.post(URL, sample_table).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getSheetData()
  }, [])

  return (
    <div className='parent-container'>
      {/* <div>
        <h1>Hello World</h1>
      </div> */}
      {/* <button onClick={postSheetData}>POST</button> */}
      <div className="table">
        <table>
          {sheetList.map((item) => (
            <tr>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
            </tr>
            ))}
        </table>
      </div>
    </div>
  )
}

export default App
