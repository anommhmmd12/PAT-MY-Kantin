import React from "react";
import { useParams, } from "react-router-dom";
import axios from "axios";
import star from "../../image/navbar/Vector.png";
import hati from "../../image/navbar/hati.png";
import Popup from "reactjs-popup";
export default function Category(props) {
    const [img,setImg] = React.useState([])
    const [jumlah,setJumlah] = React.useState([])
    const [total,setTotal] = React.useState([])
    const [nama,setNama] = React.useState([])
    const [number,setNumber] = React.useState([])
    props.getSemua(img,jumlah,total,nama)
    let { id } = useParams();
    const [kategori, setKategori] = React.useState([]);
    const getKategori = async () => {
        const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/8?page=${id}`;
        const response = await axios.get(url);
        setKategori(response.data.data);
    }

    React.useEffect((id) => {
        getKategori(id);
    })
    return (
        <React.Fragment>
            <div className="mt-10 pr-10">
                <div className="flex items-center justify-between">
                    <h1 className="font-bolder text-2xl">Popular</h1>
                </div>
                <div className="mt-3 flex items-start justify-start">
                    <ul className="mt-5 w-full flex justify-between items-center flex-wrap">
                        {kategori.map((dt, i) => (
                            <li key={i} className="h-50 w-1/4 flex-none relative m-2">
                                <Popup
                                    trigger={<img className="rounded-xl w-72 h-36" src={dt.image} alt={dt.image} />}
                                    modal
                                    nested
                                >
                                    {close => (
                                        <div style={{ width: '450px', height: '450px' }} className="modal bg-white  rounded-xl ">
                                            <button className="close" onClick={close}>
                                                &times;
        </button>
                                            <div className="content w-full px-5 h-full py-2">
                                                <div className="items-center w-full">
                                                    <img style={{ width: '420px', height: '150px' }} className=" rounded-xl" src={dt.image} alt={dt.image} />
                                                </div>
                                                <div className="flex justify-between">
                                                    <p className="font-bold text-2xl pt-2">{dt.name}</p>
                                                    <p className="font-light text-2xl pt-2">Rp{dt.harga}</p>
                                                </div>
                                                <div className="flex w-6/12 items-start justify-between mt-4">
                                                    <p className="rounded-xl bg-gray-300 text-black font-light">{dt.waktu}</p>
                                                    <img className="w-5" src={star} alt={star} />
                                                    <p className="font-light">{dt.rating}</p>
                                                    <img className="w-6 pl-1" src={hati} alt={hati} />
                                                </div>
                                                <div className="mt-5">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum in placeat quo officia, aspernatur impedit amet nostrum eveniet sint deleniti velit excepturi eum non fugiat vel eos modi adipisci aut.</p>
                                                </div>
                                                <div className="mt-5 flex justify-between ">
                                                <div className="font-bold text-2xl">Stock {dt.jumlah}</div>
                                                    <div className="flex px-2">
                                                        <button disabled={dt.pesan === 0} onClick={()=>{
                                                            setNumber(dt.pesan--)
                                                            dt.jumlah++
                                                        }} className="text-xl mr-4">-</button>
                                                        <p className="text-xl bg-gray-300 ">{dt.pesan}</p>
                                                        <button disabled={dt.jumlah === 0} onClick={()=>{
                                                            setNumber(dt.pesan++)
                                                            dt.jumlah--
                                                        }}  className="text-xl ml-4">+</button>
                                                    </div>
                                                    <div>
                                                        <button
                                                        onClick={()=>{
                                                            setImg(dt.image)
                                                            setJumlah(dt.harga)
                                                            setTotal(dt.pesan)
                                                            setNama(dt.name)
                                                        }}
                                                        className="border rounded-full w-40 h-10 bg-yellow-300">Pesan Sekarang</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                                <p className="absolute rounded-xl bg-gray-300 text-black font-bolder text-xl mt-20">{dt.waktu}</p>
                                
                                <p className="font-bolder text-xl pt-2">{dt.name}</p>
                                <div className="flex justify-between w-full items-center">
                                    <div className="w-1/2 flex">
                                        <img src={star} alt={star} />
                                        <p className="font-bolder text-xl ">{dt.rating}</p>
                                    </div>
                                    <div className=" w-1/2">
                                        <p className="font-bolder text-xl ml-16">Rp{dt.harga}</p>
                                    </div>
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}