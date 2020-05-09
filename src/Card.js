import React from 'react';

const Card = ({name, email, id}) => {
    
    return(
        <div className = 'bg-light-green dib pa3 br3 ma2 grow shadow-5'>
            <img alt='Robots' src={`https://robohash.org/${id}?`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;