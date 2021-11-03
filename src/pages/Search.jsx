import {React, useState} from 'react'
import axios from 'axios'
import ItemCard from '../components/ItemCard/ItemCard'

export default function Search() {
    const [val, setVal] = useState('')
    const [searchData, setsearchData] = useState([])
    const [loader, setLoader] = useState(false);

    const updateVal = (inputEle) => {
        setVal(inputEle.target.value);
    }

    const onEnter = async (keyEle) =>{
        if(keyEle.key === "Enter") 
            await search();
    }
    const search = async () =>{
        if(val === '') return;
        setLoader(true)
        const response = await axios.get('https://cors-resolve.herokuapp.com/https://medium-scrapper-api.herokuapp.com/data/' + val.toLowerCase())
        setsearchData(response.data);
        setLoader(false)
    }
    return (
        <div className='container'>
            <input type="search" onKeyPress={onEnter} onChange={updateVal} placeholder="Enter tag to search" id="search-bar" />
            {loader ? <div class="loader"></div>:
            <button className="search-btn"  onClick={search} type="primary">Search</button>
            }
            <div className="result">
            {searchData ? searchData.map((cardData, idx) =>{
                return <ItemCard {...cardData}></ItemCard>;
            }):<></>}
            </div>
        </div>
    )
}
