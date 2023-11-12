import { useEffect, useState } from 'react';
import './../../sass/main.scss';
import Axios from '../../apis/Axios';
import { Link } from 'react-router-dom';

const Overview = () => {

    const[overviews, setOverviews] = useState([]);

    const getOverviews = () => {
        Axios.get('/overviews')
        .then(res => {
            setOverviews(res.data);
        })
        .catch(error => {
            alert("An error occurred while loading the overviews");
        })
}

    useEffect(() => {
        getOverviews()
    },[]);


    return (
        <div className='box-info'>
            <h1 className='heading-overview u-margin-bottom-medium'> About us</h1>
            <ul className='overview'>
                {overviews.map((overview) => (
                    <li key={overview.id}>
                         <h2 className='overview__title'>{overview.title}</h2>
                         <p className='overview__paragraph'>{overview.text}</p>
                    </li>
                ))}
            </ul>
            <Link to='/' className='btn btn--pink'>Home page</Link>
        </div>
      
    )

}

export default Overview;