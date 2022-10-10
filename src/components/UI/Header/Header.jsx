import React from 'react';

const Header = ({toggleDarkMode}) => {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={()=> toggleDarkMode(previousMode=> !previousMode)} className='save-mode'>
                Toggle mode
            </button>
        </div>
    );
};

export default Header;
