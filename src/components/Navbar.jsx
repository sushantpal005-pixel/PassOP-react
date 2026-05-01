import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="md:mycontainer py-5 flex justify-between items-center h-14">

                <div className="logo font-bold mx-2 text-2xl">
                    <span className='text-green-500'> &lt;</span>Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </div>
                
                <button className='text-white bg-green-700 my-5 mx-2 rounded-md flex justify-between items-center ring-white ring'>
                    <img className='invert w-10 p-1' src="icons/github.svg" alt="github logo" />
                    
                    <a className='font-bold px-2' href='https://github.com/sushantpal005-pixel' target='_blank' >Github</a>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
