import './../../sass/main.scss';
import soaps from '../../assets/soaps.png';
import one from '../../assets/one.avif';
import two from '../../assets/two.avif';
import three from '../../assets/three.avif';
import prof1 from '../../assets/prof1.avif';
import prof2 from '../../assets/prof2.avif';
import prof3 from '../../assets/prof3.avif';
import prof4 from '../../assets/prof4.avif';
import comm1 from '../../assets/comm1.avif';
import comm2 from '../../assets/comm2.avif';
import glass from '../../assets/SVG/magnifying-glass.svg';
import heart from '../../assets/SVG/heart-outlined.svg';
import star from '../../assets/SVG/star.svg';
import home from '../../assets/SVG/home.svg';
import { logout } from "../../services/auth";
import { Link, useNavigate } from 'react-router-dom';
import Axios from '../../apis/Axios';
import { useEffect, useState } from 'react';

const AllProducts = () => {

    const[products, setProducts] = useState([]);
    const[comments, setComments] = useState([]);
    const[pageNumber, setPageNumber] = useState(0)
    const[totalPages, setTotalPages] = useState(0)
    const[searchParams, setSearchParams] = useState({
        name:""
    })

    const navigate = useNavigate();

    const getProducts = (page) => {
        const config = {
            params: {
                pageNumber: page,
                name: searchParams.name
            }
        }
        Axios.get('/products', config)
        .then(res => {
            setTotalPages(res.headers["total-pages"])
            setProducts(res.data);
            setPageNumber(page);
        })
        .catch(error => {
            alert("An error occurred while loading the products");
        })
    }

    const getComments = () => {
        Axios.get('/comments')
        .then(res => {
            setComments(res.data);
        })
        .catch(error => {
            alert("An error occurred while loading the comments")
        })
    }

    useEffect(() => {
        getProducts(0);
        getComments();
    },[]);

    const goToAddPage = () => {
        navigate('/products/add');
    } 

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        let search = searchParams;
        search[name] = value;

        setSearchParams(prevSearchParams => ({
            ...prevSearchParams,
            [name]: value,
        }));
    }

    const paragraphs = {
        textOne: "Our products are crafted with the utmost precision and care, ensuring a premium quality that exceeds expectations. We prioritize excellence to deliver skincare solutions you can trust.",
        textTwo: "We take pride in our commitment to using natural ingredients. From botanical extracts to organic essentials, our products harness the power of nature for a skincare experience that's not only effective but also environmentally conscious."
      };

    const userRole = window.localStorage.getItem('role');

    return(
        <>
            <div className="container-products">
                <header className="header-products">
                    <img src={soaps} alt="logo" className="logo" />
                    <form className="search">
                        <div className="search__group">
                            <input type="text" className="search__input" name="name" placeholder='Search products' onChange={(e) => onInputChange(e)} />
                        </div>
                        <button className="search__button"  onClick={()=>getProducts(0)}>
                            <img src={glass} alt="Search" className="search__icon" />
                        </button>
                    </form>

                    {window.localStorage['jwt'] ? 
                        <button className='logging' onClick = {()=>logout()}>Log out</button> :
                        <Link className='logging' to="/login">Log in</Link>
                    }

                    
                </header>

                <div className="data">
                    <nav className="sidebar">
                        <nav className="side-nav">
                            <li className="side-nav__item side-nav__item--active">
                                <Link className="side-nav__link" to="/all">
                                    <img src={heart} alt="heart" className="side-nav__icon" />
                                    <span>All products</span>
                                </Link>
                            </li>

                            <li className="side-nav__item">
                                <Link className="side-nav__link" to="/">
                                    <img src={home} alt="home" className="side-nav__icon" />
                                    <span>Home</span>
                                </Link>
                            </li>

                            <li className="side-nav__item">
                                <Link className="side-nav__link" to="/overviews">
                                    <img src={star} alt="star" className="side-nav__icon" />
                                    <span>About us</span>
                                </Link>
                            </li>
                        </nav>
                    </nav>

                    <main className="products-view">
                        <div className="gallery">
                            <figure className="gallery__item">
                                <img src={one} alt="First photo" className="gallery__photo" />
                            </figure>
                            <figure className="gallery__item">
                                <img src={two} alt="Second photo" className="gallery__photo" />
                            </figure>
                            <figure className="gallery__item">
                                <img src={three} alt="Third photo" className="gallery__photo" />
                            </figure>
                        </div>

                        <div className="overview">
                            <h1 className="overview__heading">Explore our collection</h1>
                        </div>

                        <div className="detail">
                            <div className="description">
                                <p className="paragraph">{paragraphs.textOne}</p>
                                 <p className="paragraph">{paragraphs.textTwo}</p>
                                <ul className="list">
                                    {products.map((product) => (
                                        <li className="list__product" key={product.id}>
                                        <Link className="list__link" to={`/details/${product.id}`}>{product.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                                <button className="btn-inline btn-inline__page" disabled={pageNumber === 0} onClick={() => getProducts(pageNumber -1)}>Previous page</button>
                                <button className="btn-inline btn-inline__page" disabled={pageNumber+1 === totalPages} onClick={() => getProducts(pageNumber + 1)}>Next page</button>
                                {userRole === 'ROLE_ADMIN' && (<button className="btn-inline btn-inline__add" 
                                                                onClick={() => goToAddPage()}>Add product</button>)}
                                <div className="recommend">
                                    <p className="recommend__count">
                                        People who recommend our products
                                    </p>
                                    <div className="recommend__friends">
                                        <img src={prof1} alt="User" className="recommend__photo"/>
                                        <img src={prof2} alt="User" className="recommend__photo"/>
                                        <img src={prof3} alt="User" className="recommend__photo"/>
                                        <img src={prof4} alt="User" className="recommend__photo"/>
                                    </div>
                                 </div>
                            </div>

                            {comments.length >= 6 && (
                            <div className="user-reviews">
                                <figure className="review">
                                    <blockquote className="review__text">{comments[4].comment}</blockquote>
                                    <figcaption className="review__user">
                                        <img src={comm1} alt="user" className="review__photo" />
                                        <div className="review__user-box">
                                            <p className="review__user-name">{comments[4].name}</p>
                                            <p className="review__user-date">September 9th, 2023</p>
                                        </div>
                                        <div className="review__rating">8.2</div>
                                    </figcaption>
                                </figure>

                                <figure className="review">
                                    <blockquote className="review__text">{comments[5].comment}</blockquote>
                                    <figcaption className="review__user">
                                        <img src={comm2} alt="user" className="review__photo" />
                                        <div className="review__user-box">
                                            <p className="review__user-name">{comments[5].name}</p>
                                            <p className="review__user-date">October 14th, 2023</p>
                                        </div>
                                        <div className="review__rating">9.3</div>
                                    </figcaption>
                                </figure>

                                <Link className="btn-inline" to="/comments">
                                    Show all
                                    <span>&rarr;</span>
                                    </Link>
                            </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default AllProducts;