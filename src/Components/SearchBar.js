import './SearchBar.css'
import { useState } from "react"
import {SearchOutlined} from '@ant-design/icons';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("")

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(term)
  }
  const handleChange = (event) => {
    setTerm(event.target.value)
  }
  return (   
      <form onSubmit={handleFormSubmit}>
        <input className="search-bar" value={term} type="text" onChange={handleChange} placeholder ="Enter Search Term"  ></input>
        {/* <div className='search-btn'><SearchOutlined /></div> */}
      </form>
    
  )
}

export default SearchBar
