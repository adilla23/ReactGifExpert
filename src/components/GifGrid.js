import React from "react";
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItems} from "./GifGridItems";
//import {getGifs} from "../helpers/getGif";

export const GifGrid = ({category}) => {

    const {data: images,loading} = useFetchGifs();


    return (
        <>
        <h3 className="animate__animated  animate__fadeInDown">{category}</h3>
            {loading && <p className="animate__animated  animate__flash">loading</p>}
        <div className="carGrid ">

                {
                    images.map((img )=>(
                       <GifGridItems
                           key = {img.id}
                           {...img}
                       />
                ))
                }

        </div>
        </>

    )


}