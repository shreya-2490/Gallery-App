import ImageShow from "./ImageShow";
import './ImageList.css'
function ImageList({images}){
    const renderedImages = images.map((image)=>{
        return <ImageShow image={image}/>;
    })
    return <div className="image-List">{renderedImages}</div>
   }
   
   export default ImageList;