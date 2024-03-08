
'use client'


import Image from "next/image";
import { useSearchParams } from "next/navigation";
import "./meme.css"
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';





export default function Pagecome(meme){



    const [imageSrc, setImageSrc] = useState('https://www.encodedna.com/images/theme/easy-image-resizer.jpg');
    const [text, setText] = useState('text');
    const [text1, setText1] = useState('text1');
    const [searchParams] = useSearchParams();
    const [con, setCon] = useState('');
    const [dat, setDat] = useState(null); 
    // const [meme,setMeme] = useState()
    const [gen,setgen] = useState()
    
    
    const chooseImage = () => {
        document.getElementById('file').click();
    }

    const showImage = (fl) => {
        if (fl.files.length > 0) {
            let reader = new FileReader();

            reader.onload = function (e) {
                let img = new Image();

                img.onload = function () {
                    if (this.width > window.screen.width || this.height > window.screen.height) {
                        alert('Please select a smaller image.');
                        setImageSrc('');
                    } else {
                        setImageSrc(reader.result);
                    }
                };

                img.src = e.target.result;
            };

            reader.readAsDataURL(fl.files[0]);
        }
    }

    const writeText = (event) => {
        setText1(event.target.value);
    }
    const writeText1 = (event) => {
        setText(event.target.value);
    }

    const saveImageWithText = () => {
        // You can implement saving the image with text here
        console.log('Save image with text');
    }


    const generateMeme = async () => {

        if (!meme || !text || !text1) {
            console.error('Meme ID and text fields are required');
            return;
        }

        const username = 'UmerSiddiqui3322'; // Replace with your Imgflip username
        const password = '32231234'; // Replace with your Imgflip password

        const url = `https://api.imgflip.com/caption_image?template_id=${ meme.meme[0].id}&username=${username}&password=${password}&text0=${text}&text1=${text1}`;

  
        try {
            const response = await fetch(url, {
                method: 'POST'
            });

            if (!response.ok) {
                throw new Error('Failed to generate meme');
            }

            const data = await response.json();
            console.log('Generated meme:', data);
            setgen(data)
            // You can update state or perform any other actions based on the response data
        } catch (error) {
            console.error('Error generating meme:', error);
        }
    };
    console.log(meme.meme[0] , "memeprod");

    return(
        <div className="main">
     {!gen ?
        <>
           <div className="mainContainer">
            <img src={meme.meme[0].url} className="image__img" alt="" />
            <Draggable bounds="parent">
                <div id="theText" style={{ position: 'absolute',border:"1px solid black", background: 'rgba(0, 0, 0, 0.1)', color: 'black',fontSize:"large", padding: '5px', cursor: 'move' }}>{text}</div>
            </Draggable>
            <Draggable bounds="parent">
                <div id="theText" style={{ position: 'absolute',border:"1px solid black" ,background: 'rgba(0, 0, 0, 0.1)', color: 'black', padding: '5px', cursor: 'move' }}>{text1}</div>
            </Draggable>
        </div>

        <div className="main_input">
        <p>
            <textarea style={{color:'black',border:"black solid 1px"}}  onKeyUp={writeText1} id="textArea" placeholder="Text" rows="2" cols="50"></textarea>
        </p>
        <p>
            <textarea style={{color:'black',border:"black solid 1px"}} onKeyUp={writeText} id="textArea" placeholder="Text1" rows="2" cols="50"></textarea>
        </p>
            <button style={{backgroundColor:"red",borderRadius:"10px",color:"white",fontSize:"large"}} className="p-5" onClick={()=> generateMeme()}>Generate</button>
        </div> 
        </>
        :
<>
<img src={gen.data.url} className="image__img" alt="" />
        
        </>
        }
     

    </div>
    )
}