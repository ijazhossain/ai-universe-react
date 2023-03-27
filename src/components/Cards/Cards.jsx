import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Cards = () => {
    const [data, setData] = useState([])
    // console.log(data)
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
            const data = await res.json()
            console.log(data.data.tools)
            setData(data.data.tools)
        }
        loadData();
    }, [])
    return (
        <div className='grid grid-cols-3 p-[50px] gap-y-7'>
            {
                data.map(singleData => <SingleData
                    key={singleData.id}
                    singleData={singleData}
                ></SingleData>)
            }
            <Modal></Modal>
        </div>
    );
};

export default Cards;