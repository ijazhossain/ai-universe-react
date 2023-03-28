import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Cards = () => {
    const [data, setData] = useState([])
    const [uniqueId, setUniqueId] = useState(null)
    const [singleData, setSingleData] = useState({})
    const handleId = (id) => {
        // console.log(id)
        setUniqueId(id)
    }
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
            const data = await res.json()
            // console.log(data.data.tools)
            setData(data.data.tools)
        }
        loadData();
    }, [])
    useEffect(() => {
        const loadSingleData = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            const data = await res.json()
            setSingleData(data.data)
        }
        loadSingleData()
    }, [uniqueId])
    return (
        <div className='grid grid-cols-3 p-[100px] gap-y-7'>
            {
                data.map(singleData => <SingleData
                    key={singleData.id}
                    singleData={singleData}
                    handleId={handleId}
                ></SingleData>)
            }
            <Modal singleData={singleData}></Modal>
        </div>
    );
};

export default Cards;