import React from 'react'
import { MdSearch } from 'react-icons/md'

const SearchNote = ({handleSearchNote}) => {
    const handleInputChange = (event) => {
        handleSearchNote(event.target.value);
      };
  return (
    <div className='search'>
        <MdSearch className='search-icons' size='1.3em'/>
        <input onChange={(event)=>
          handleSearchNote(event.target.value)
        }
        type='text' placeholder='type to search...'/>
    </div>
  )
}

export default SearchNote