import React from "react";
import mobil from "../../image/navbar/mobil.png";

function Sidebar(props) {
    let data = [
        {
            Image: props.img,
            Jumlah: props.jumlah,
            Total: props.total,
            Nama: props.nama
        }
    ]
    return(
        <React.Fragment>
            <div className="w-full h-full">
                <div className=" text-2xl w-1/10 text-black font-bolder">Pesanan Saya</div>
                <div className="bg-purple-500 w-4/10 h-2/10 rounded-xl mr-5">
                    <p className="py-2 px-6 text-white font-bold">Mr.Anom</p>
                    <p className="py-2 px-6 text-white font-extra-bold text-xl">Rp. 10000000000</p>
                    <p className="py-2 px-6 text-white font-bold tracking-widest">874617194198</p>
                </div>
                <div className="">
                <ul className="flex w-full justify-between flex-wrap">
                        {data.map((dt,i)=>(
                            dt.Jumlah*dt.Total === 0 ? "" :<li key={i} className="flex items-center justify-between w-full h-24 relative">  
                            <img className="rounded-xl w-2/12 h-8 " src={dt.Image} alt={dt.Image} />
                        <div className="flex">
                           {dt.Total}
                        </div>
                        <div>x</div>
                        <div className="font-bold">{props.nama}</div>
                        <div>
                            {dt.Jumlah * dt.Total}
                        </div>
                      </li>
                            
                        ))}
                        <li className="flex items-center justify-between w-11/12 h-24 relative">
                        <img className="rounded-xl w-1/12 h-4 " src={mobil} alt={mobil} />
                            <div className="mr-5 ml-5 items-center font-bold text-xl text-bold ">
                                Jonggol,bogor
                            </div>
                            <div className="w-2 h-2 text-xs text-gray-400">Gratis</div>
                        </li>
                       
                    </ul>
                </div>
                <div>
                    <ul className="flex w-full items-center justify-between mt-10">
                        <li>
                            <div className="">
                                Total :
                            </div>
                        </li>
                        <li>
                            <div className="items-center font-bold text-xl text-bold ">
                                {props.jumlah * props.total}
                            </div>
                        </li>
                    </ul>
                </div>
                <button className="bg-indigo-400 w-full rounded-xl font-bold font-poppins mt-10 h-10">
                    Pesan
                </button>
            </div>
        </React.Fragment>
    )
}

export default Sidebar