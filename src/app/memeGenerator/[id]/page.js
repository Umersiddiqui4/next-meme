


import Image from "next/image";
import "./meme.css"
import Pagecome from "./pagecom";


const MemeGenerator = async (props) => {
    const id = props.params.id
    console.log(props.params.id ,"props")
                const res = await fetch(`https://api.imgflip.com/get_memes`);
                const data = await res.json();
                const singleData = data.data.memes.filter((e) => e.id === id)
                console.log(singleData, "data");
               
          
   
   
  
    

  
    return (
       <Pagecome meme={singleData}/>
    );
}

export default MemeGenerator;
