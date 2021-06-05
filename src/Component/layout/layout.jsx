import React from "react";
import Header from "../header/header";
import Content from "../content/index";
import Sidebar from "../content/sidebar";
import { Switch } from "react-router-dom";
function Layout() {
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
    return(
        <React.Fragment>
            {/* Header */}
           <div className="h-screen w-screen pl-8 font-poppins">
           <header className="h-1/10 w-full  flex items-center rounded-xl">
                <Header/>
            </header>
            <main className="h-9/10 w-full flex pt-5">
                <section className="w-5/6 pr-10">
                    <Content getSemua={getSemua}/>
                </section>
                {/* Ini Bagian Pesanan */}
                <section className="w-1/6">
                   <Sidebar img={img} jumlah={jumlah} total={total} nama={nama}/>
                </section>
            </main>
           </div>
        </React.Fragment>
    )
}

export default Layout;