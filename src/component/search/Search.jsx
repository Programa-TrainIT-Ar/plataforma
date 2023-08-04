import React from 'react'

const Search = () => {
  return (
    <form className='flex justify-center mr-10 w-6/12'>
      <div className='flex items-center relative p-1 bg-gradient-to-tr from-indigo-700 to-fuchsia-500 rounded-full w-full'>
        <input className='flex-1 p-2 pl-4 font-mono rounded-full w-full' type='text' placeholder='Search...'></input>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="flex w-10 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>


      </div>
    </form>
  )
}

export default Search