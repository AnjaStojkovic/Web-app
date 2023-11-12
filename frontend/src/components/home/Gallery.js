import './../../sass/main.scss';
import p1 from '../../assets/p1.avif';
import p2 from '../../assets/p2.avif';
import p3 from '../../assets/p3.avif';
import p4 from '../../assets/p4.avif';
import p5 from '../../assets/p5.avif';
import p6 from '../../assets/p6.avif';
import p7 from '../../assets/p7.avif';
import p8 from '../../assets/p8.avif';
import p9 from '../../assets/p9.avif';
import p10 from '../../assets/p10.avif';
import p11 from '../../assets/p11.avif';
import p12 from '../../assets/p12.avif';
import p13 from '../../assets/p13.avif';
import p14 from '../../assets/p14.avif';

const Gallery = () => {

    const images = [p1, p2, p8, p4, p9, p6, p7, p13, p10, p11, p3, p12, p5, p14];

    return (
        <div className='images-collection'>
            <div className='gallery-new'>
            {images.map((image, index) => (
                <figure key={index} className={`gallery-new__item gallery-new__item--${index + 1}`}>
                    <img src={image} alt={`img-${index + 1}`} className='gallery-new__img' />
                </figure>
            ))}
            </div>
        </div>
    )

}

export default Gallery;