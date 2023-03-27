import React from 'react';

const Button = (props) => {
    // console.log(props.children);
    return (
        <div className='text-center'>
            <button className='bg-[#EB5757] text-white rounded-2xl px-7 py-6 font-semibold text-[20px]'>{props.children}</button>
        </div>
    );
};

export default Button;