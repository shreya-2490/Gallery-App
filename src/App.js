import SearchBar from "./Components/SearchBar"
import ImageList from "./Components/ImageList"
import searchImages from "./api"
import { useState } from "react"
function App() {
  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
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
