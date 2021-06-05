import React from "react";
import Banner from "./banner";
import Nav from "./nav";
import Category from "./category";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import star from "../../image/navbar/Vector.png";
function Content(props) {
    const [popular, setPopular] = React.useState([]);
    const [img,setImg] = React.useState([])
     const [jumlah,setJumlah] = React.useState([])
     const [total,setTotal] = React.useState([])
     const [nama,setNama] = React.useState([])
     const getSemua = (image,jumlahs,totals,namas)=>{
        setImg(image)
        setJumlah(jumlahs)
        setTotal(totals)
        setNama(namas)
    }
    props.getSemua(img,jumlah,total,nama)
    const getPopular = async()=>{
        try {
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/24?page=1`;
            const response  = await axios.get(url);
            console.log(response.data.data);
            setPopular(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(()=>{
        getPopular();
    }, [])
    return(
        <React.Fragment>
            <header className="h-3/10 w-full pr-5">
                <Banner/>
            </header>
            <nav className="h-3/10 w-full">
                <Nav/>
            </nav>
            <section className="h-4/10 w-full">
                <Switch>
                    <Route path="/category/:id">
                        <Category getSemua={getSemua}/>
                    </Route>
                    <div className="mt-10 pr-10">
            <div className="flex items-center justify-between">
              <h1 className="font-bolder text-2xl">Popular</h1>
          </div>
          <div className="mt-3 flex items-start justify-start">
              <ul className="mt-5 w-full flex justify-between items-center flex-wrap">
              {popular.map((dt,i)=>(
                  <li key={i} className="h-50 w-1/4 flex-none relative m-2">
                      <p className="absolute rounded-xl bg-gray-300 text-black font-bolder text-xl mt-20">{dt.waktu}</p>
                      <img className="rounded-xl w-72 h-36" src={dt.image} alt={dt.image}/>
                      <p className="font-bolder text-xl pt-2">{dt.name}</p>
                      <div className="flex justify-between w-full items-center">
                        <div className="w-1/2 flex">
                        <img src={star} alt={star}/>
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
                </Switch>
            </section>
        </React.Fragment>
    )
}

export default Content