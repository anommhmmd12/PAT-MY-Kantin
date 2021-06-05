import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

function Nav(params) { 
    const [kategori, setKategori] = React.useState([]);
    const getKategori = async()=>{
        try {
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/category/all`;
            const response = await axios.get(url);
            console.log(response.data.data);
            setKategori(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(()=>{
        getKategori();
    }, [])
    return(
        <React.Fragment>
        <div className="mt-10 pr-10">
            <div className="flex items-center justify-between">
              <h1 className="font-bolder text-2xl">Kategori</h1>
              <button style={{background:"#FB6D3A"}} className="rounded-full text-white text-sm font-extra-bold px-2 py-1">Lebih Lengkap</button>
          </div>
          <div className="mt-3 flex items-start justify-start">
              <ul className="mt-5 w-full flex justify-between items-center flex-nowrap overflow-auto">
              {kategori.map((dt,i)=>(
                           
                  <li key={i} className={` h-36 relative ${kategori.length === 3 ? 'w-3/10' : 'w-2/10'} flex-none m-3`}>
                  <NavLink to={`/category/${dt.id}`}>
                      <img className="rounded-xl w-full h-36" src={dt.img} alt={dt.img}/>
                      <p style={{background: 'rgba(1,1,1,0.5)'}} className="absolute z-10 rounded-xl text-white font-bolder text-2xl justify-center flex items-center h-full top-0 bottom-0 left-0 right-0">{dt.name}</p>
                  </NavLink>
               </li>
                        ))}
              </ul>
          </div>
        </div>
        </React.Fragment>
    )
}

export default Nav