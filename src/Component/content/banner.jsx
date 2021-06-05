import React from "react";
import bannerImage from "../../image/header/banner.png";
function Banner(params) {
    return(
        <React.Fragment>
            <div style={{background:"#FFF7ED"}} className="flex items-center pl-24 pr-40 py-5 rounded-xl">
                <div className="w-1/4">
                    <img className="w-44 h-24" src={bannerImage} alt={bannerImage}/>
                </div>
                <div style={{color:"#FB6D3A"}} className="w-3/4 h-full pl-10">
                    <h1 className="font-bolder text-4xl">Promo Hari Ini</h1>
                    <h2 className="text-xl font-bold">Perut kenyang, hati senang</h2>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <ul className="w-1/12 flex items-center justify-evenly mt-3">
                    <li>
                        <div className="w-2 h-2 rounded-full bg-red-100"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-gray-300  border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-gray-300  border"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-gray-300 border"></div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Banner;