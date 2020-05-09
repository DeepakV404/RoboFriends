import React from 'react';

const SearchBox = ({SearchFields, searchChange}) => {
    return(
        <div>
            <input className= 'bg-lightest-blue  pa3 ba b--light-green '
                   type= 'search' 
                   placeholder= 'search robots'
                   onChange= {searchChange}
                   />
        </div>
    );
}
export default SearchBox;