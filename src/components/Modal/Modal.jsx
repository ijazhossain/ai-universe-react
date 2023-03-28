import React from 'react';

const Modal = (props) => {
    console.log(props.singleData)
    const { description, pricing, features, integrations, image_link, input_output_examples } = props.singleData;
    // console.log(input_output_examples[0]);

    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className='grid grid-cols-2 gap-5'>
                        <div className='bg-[#fef7f7] border-2 border-[#EB5757] rounded-lg p-[30px]'>
                            <h3 className="font-bold text-lg">{description}</h3>
                            <div className='grid grid-cols-3 mt-[47px] gap-3'>
                                <div className='text-[#03A30A] font-semibold text-center bg-white rounded-lg py-6'>
                                    {pricing ? pricing[0]?.price : 'Free of cost'}<br></br>
                                    {pricing ? pricing[0]?.plan : '/Basic'}
                                </div>
                                <div className='text-[#F28927] font-semibold text-center bg-white rounded-lg py-6'>
                                    {pricing ? pricing[1]?.price : 'Free of cost'}<br></br>
                                    {pricing ? pricing[1]?.plan : '/pro'}
                                </div>
                                <div className='text-[#EB5757] font-semibold text-center bg-white rounded-lg py-6'>
                                    {pricing ? pricing[2]?.price : 'Free of cost'}<br></br>
                                    {pricing ? pricing[2]?.plan : '/enterprise'}
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-2 mt-[25px]'>
                                <div>
                                    <h2 className='text-[25px] font-semibold mb-4'>Features</h2>
                                    <ul className='list-disc pl-5'>
                                        {
                                            Object.values(features || {}).map(feature => <li>
                                                {feature.feature_name ? feature.feature_name : 'Not found'}
                                            </li>)
                                        }
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='text-[25px] font-semibold mb-4'>Integrations</h2>
                                    <ul className='list-disc pl-5 '>
                                        {
                                            integrations && integrations.map(integration => <li>{integration ? integration : 'Not found'}</li>)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='border-2 border-[#e7e7e7] rounded-lg p-[25px]'>
                            <img className='rounded-lg' src={image_link} alt="banner" />
                            <p className='text-[#111111] text-[25px] font-semibold text-center my-[25px]'>{input_output_examples && input_output_examples[0].input}</p>
                            <p className='text-[#585858] text-center'>{input_output_examples && input_output_examples[0].output}</p>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;