import React,{useState} from 'react'

function Search() {
    const [active, setActive] = useState(false);
    return (
        <div className={`search ${active ? 'active' : ''}`}>
            <input type="text" className='input' placeholder='search...'/>
            <button onClick={()=>{
                // console.log('yes');
                setActive(!active);
                document.querySelector('.input').focus();
            }} className="btn">
                <i className="fas fa-search"></i>
            </button>
        </div>
    )
}

export default Search
