import SearchBar from "./Components/SearchBar"
import ImageList from "./Components/ImageList"
import searchImages from "./api"
import { useState, useEffect } from "react"
function App() {
  const [images, setImages] = useState([])
  useEffect(()=>{
   handleSubmit("bird")
  },[])


  const handleSubmit = async (term) => {
    console.log("shereyu",term);
    const result = await searchImages(term)
    setImages(result)
  }
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images  } />
    </div>
  )
}

export default App
