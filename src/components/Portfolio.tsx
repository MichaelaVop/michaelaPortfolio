import React from "react"
import { useState } from "react"
import data from "./modalAndData/data"
import Modal from "./modalAndData/Modal"


const Portfolio = () => {
    const [modalOpen, setModalOpen] = useState(false)
    let [tempData, setTempData] = React.useState<string[]>([])
    
    const getData = (title: string, desc:string, techDesc:string) => {
        
        let tempData = [title, desc, techDesc]
        setTempData([ ...tempData])
        console.log(tempData)

        return setModalOpen(true)
       
    }

    return (
        <>
        <div>
            <div className="HL2">
            <h2>Portfolio</h2>
            </div>
            {data.modalData.map((item) => {
                return (
                    <div className='projectContainer' key={item.id}
                        onClick={() => getData(item.title, item.desc, item.techDesc)}   
                        
                        >
                        {/* {modalOpen ? <Modal setOpenModal={setModalOpen} /> : ''}     */}
                        <img src={item.img} alt="MiReddit Variation" className="projectImg" />
                        <h3 className="projectHl">{item.title}</h3>
                        <p className="projectText">
                            {item.desc}
                        </p>
                        <p className="projectTechDsc">
                            {item.techDesc}
                        </p>
                    </div>
                )
            })}
        </div>

        <div>
            {modalOpen === true ? <Modal title={tempData[0]} desc={tempData[1]} techDesc={tempData[2]} hide={() => setModalOpen(false)} /> : ''}
            
        </div>

        </>
    )        
    
}

export default Portfolio