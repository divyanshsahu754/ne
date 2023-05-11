import { Card } from "../card/card";
import styl from "./data.module.css"

export function Data(){
    let data=[
        {name:"Ronaldo",
        education:"Portugal",
        img:"https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-of-juventus-fc-looks-on-during-the-serie-news-photo-1578670307.jpg?crop=0.668xw:1.00xh;0.154xw,0&resize=2048:*",
        experience:"22 year ",
        description:"UCL top scorrer"



    },{
        name:"Messi"
        ,education:"Argentina"
        ,img:"https://static01.nyt.com/images/2021/07/12/sports/12messi2/12messi2-mediumSquareAt3X.jpg"
        ,experience:"21 year"
        ,description:"Won all Major trophies "
    },{
        name:"Ramos",
        education:"Spain"
        ,img:"https://machohairstyles.com/wp-content/uploads/2016/01/Sergio-Ramos-Haircuts-15-650x650.jpg.webp"
        ,experience:"19 year"
        ,description:"Greatest Defender of all Time"
    }
    ,{
        name:"Benzema"
        ,education:"France",
        img:"https://static01.nyt.com/images/2020/07/24/sports/24rorynewsletter-top/24rorynewsletter-top-mediumSquareAt3X.jpg"
        ,experience:"15 year"
        ,description:"Most decorated Pllayer of France"

    },{
        name:"Ibrahimovic"
        ,education:"Sweden",
        img:"https://avatarfiles.alphacoders.com/332/332818.jpg"
        ,experience:"25 years"
        ,description:"Most Fit Old Player"

    },{
        name:"Modric"
        ,education:"Croatia"
        ,img:"https://www.planetsport.com/image-library/square/500/m/modric-croatia-1.jpg"
        ,experience:"18 year"
        ,description:"Wizard of Mid field"
    }

    ]

    return(
        <div className={styl.card_container}>
            {data.map((item, index) => {
                return(
                  <Card
                  key={index}
                    
                    img = {item.img}
                    imgalt = {item.imgalt} 
                    name = {item.name}
                    education = {item.education}
                    description = {item.description}
                    experience = {item.experience}
                  />
                )
              })}
        </div>
    )
}