import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import { getProp } from "./memeGenerator/[id]/page";


export default async function Home() {

  const fetch = await getData()
  console.log(fetch.data.memes, "data");
  const filData = fetch.data.memes
  let int = null
  return (
    <main className="flex min-h-screen flex-col items-center text-center justify-between p-5">
                <h1 className="text-xl font-medium p-5">Meme Generator</h1>

      <div className="gallery">
        
        <div className="gallery__column">
          {filData.map((e, index) => {
              int = index; // Update int with the current index
              
              return (
                <>
                  {index >=0 && index <= 25 ? (
                    <React.Fragment key={index}>
                      <Link href={`/memeGenerator/${e.id}`}  className="gallery__link">
                        <figure className="gallery__thumb">
                          <img src={e.url} alt={e.name} className="gallery__image" />
                          <figcaption className="gallery__caption">{e.name}</figcaption>
                        </figure>
                      </Link>
                    </React.Fragment>) : ""}
                  
                </>
              );
            })
          }
          </div>
        <div className="gallery__column">
          {filData.map((e, index) => {
              int = index; // Update int with the current index
           
              return (
                <>
                {index >=25 && index <= 50 ? (
                    <React.Fragment key={index}>
                      <Link href={`/memeGenerator/${e.id}`}  className="gallery__link">
                        <figure className="gallery__thumb">
                          <img src={e.url} alt={e.name} className="gallery__image" />
                          <figcaption className="gallery__caption">{e.name}</figcaption>
                        </figure>
                      </Link>
                    </React.Fragment>) : ""}
                  
                </>
              );
            })
          }
          </div>
        <div className="gallery__column">
          {filData.map((e, index) => {
              int = index; // Update int with the current index
             
              return (
                <>
                {index >=50 && index <= 75 ? (
                    <React.Fragment key={index}>
                      <Link href={`/memeGenerator/${e.id}`}  className="gallery__link">
                        <figure className="gallery__thumb">
                          <img src={e.url} alt={e.name} className="gallery__image" />
                          <figcaption className="gallery__caption">{e.name}</figcaption>
                        </figure>
                      </Link>
                    </React.Fragment>) : ""}
                  
                </>
              );
            })
          }
          </div>
        <div className="gallery__column">
          {filData.map((e, index) => {
              int = index; // Update int with the current index
          
              return (
                <>
                {index >=75 && index <= 100 ? (
                    <React.Fragment key={index}>
                      <Link href={`/memeGenerator/${e.id}`}  className="gallery__link">
                        <figure className="gallery__thumb">
                          <img src={e.url} alt={e.name} className="gallery__image" />
                          <figcaption className="gallery__caption">{e.name}</figcaption>
                        </figure>
                      </Link>
                    </React.Fragment>) : ""}
                  
                </>
              );
            })
          }
          </div>
      

       


      </div>
    </main>
  );
}
async function getData() {
  // console.log("chala");
  const res = await fetch('https://api.imgflip.com/get_memes')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


