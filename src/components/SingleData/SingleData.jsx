import React from 'react';

const SingleData = (props) => {
    // console.log(props.singleData)
    const { id, image, features, name, published_in } = props.singleData;
    const { handleId } = props;

    return (
        <div className="card w-96 bg-base-100 border-[1px] border-[#e7e7e7]  p-[25px]">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body px-0 pb-0">
                <ol>
                    {
                        features.map((feature, index) => <li key={feature}>{index + 1}. {feature}</li>)
                    }
                </ol>
                <hr className='border-[1px] border-[#cfcfcf] my-[24px]' />
                <h2 className='text-[25px] font-semibold'>{name}</h2>
                <div className='flex items-center'>
                    <p className='flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-lg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>

                        {published_in}</p>
                    <label onClick={() => handleId(id)} htmlFor="my-modal-5" className='w-[50px] h-[50px] bg-[#f7dddd] rounded-full text-[#EB5757] flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>

                    </label>
                </div>

            </div>

        </div>
    );
};

export default SingleData;