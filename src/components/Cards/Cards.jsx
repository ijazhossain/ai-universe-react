import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';
import Spinner from '../spinner/Spinner';

const Cards = () => {

    const [data, setData] = useState([])
    const [uniqueId, setUniqueId] = useState(null)
    const [singleData, setSingleData] = useState({})
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleId = (id) => {
        // console.log(id)
        setUniqueId(id)
    }
    const shortDate = () => {
        const sortedData = data.sort((a, b) => {
            return new Date(b.published_in) - new Date(a.published_in);
        });
        setData([...data, sortedData]);

    }
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
            const data = await res.json()
            // console.log(data.data.tools)
            setData(data.data.tools)
            setLoading(false);
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
        <div >
            <span onClick={() => shortDate()}>
                <Button>Sort By Date</Button>
            </span>
            {
                loading && <Spinner></Spinner>
            }
            <div className='grid grid-cols-3 p-[100px] gap-y-7'>
                {
                    data?.slice(0, showAll ? 12 : 6).map(singleData => <SingleData
                        key={singleData.id}
                        singleData={singleData}
                        handleId={handleId}
                    ></SingleData>)
                }
            </div>
            {
                !loading && <div className='text-center mb-12'>
                    <button className='bg-[#EB5757] text-white rounded-2xl px-7 py-6 font-semibold text-[20px]' onClick={() => setShowAll(!showAll)}>{!showAll ? 'Show All' : 'Show less'}</button>
                </div>
            }
            <Modal singleData={singleData}></Modal>
        </div>
    );
};

export default Cards;