

// import { useState } from "react";
// import styled from "styled-components";

// const MyImage=({imgs=[{url:" "}]})=>{
//   const [MainImage,setMainImage]=useState(imgs[0].url);
//   console.log(imgs);
//   return (
//     <Wrapper>
//       <div className="grid grid-four-column">
//         {imgs.map((curElem,index)=>{
//             return (
//               <figure>
//                 <img src={curElem.url} alt={curElem.filename} className="box-image--style" key={curElem.id} onClick={()=>setMainImage(curElem)} />
//               </figure>
//             )

//         })
//         }
//       </div>


//       <div className="main-screen">
//         <img src={MainImage.url} alt={MainImage.filename}  />
//       </div>

//     </Wrapper>
//   )
// };



// const Wrapper=styled.section`
// display:grid;
// grid-template-columns:0.4fr 1fr;
// gap:1rem;


// .grid{
//   align-items:center;
//   justify-items:center;
//   width:100%;
//   gap:1rem;

//   img{
//     max-width:100%;
//     max-height:100%;
//     object-fit:contain;
//     background-size:cover;
//     cursor:pointer;
//   }
// }

// .main-screen {
//       display: grid;
//       place-items: center;
//       order: 1;
//       img {
//         max-width: 100%;
//         height: auto;
//         box-shadow: ${({ theme }) => theme.colors.shadow};
//       }
//     }

// .grid-four-column{
//   grid-template-columns: 1fr;
//   grid-template-rows: repeat(4,1fr);
// }


// `;
//  export default MyImage;
















import { useState } from "react";
import styled from "styled-components";


// here imgs is array so while getting for the first element of img array it throws undefined error so we have to access it as array having default value
const MyImage=({imgs=[{url:""}]})=>{
    const [MainImage,setMainImage]=useState(imgs[0])
    return(
        <Wrapper>
          <div className="grid grid-four-column">
            {imgs.map((curElem,index)=>{
                return(
                    <figure>
                        <img src={curElem.url} alt={curElem.filename} className="box-image--style" key={index} onClick={()=>setMainImage(curElem)} />
                    </figure>
                )
            })}
          </div>



          {""/* 2nd column */}

          <div className="main-screen">
            <img src={MainImage.url} alt={MainImage.filename} />
          </div>
        </Wrapper>
    )

};
const Wrapper=styled.section`
display: grid;
grid-template-columns: 0.4fr 1fr;
gap: 1rem;
.grid {
  flex-direction: row;
  justify-items: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  /* order: 2; */
  img {
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }
}
.main-screen {
  display: grid;
  place-items: center;
  order: 1;
  img {
    max-width: 100%;
    height: auto;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }
}
.grid-four-column {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  display: flex;
  flex-direction: column;
  order: 1;
  .grid-four-column {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
}`;
  export default MyImage;