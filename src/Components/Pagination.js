import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {

    const { page, totalPages, handlePagination, loading } = useContext(AppContext)

    return (
        <div className='w-full flex justify-center fixed bottom-0 bg-white p-1 border-t-4 border-slate-200'>
            <div className='w-6/12'>
                <div className='flex items-center justify-between'>
                    <div className=''>
                        {page > 1 &&
                            <button
                                onClick={() => handlePagination(Number(page - 1))}
                                className='text-white bg-blue-700 hover:bg-blue-400 font-medium rounded-lg text-sm px-3 py-1'>Previous</button>
                        }
                        {page < totalPages &&
                            <button
                                onClick={() => handlePagination(Number(page + 1))}
                                className='text-white bg-blue-700 hover:bg-blue-600 font-medium rounded-lg text-sm px-3 py-1 ms-1'>Next</button>
                        }
                    </div>
                    <div>
                        {!loading &&
                            <span className='text-sm font-bold'>Page {page} of {totalPages}</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pagination
