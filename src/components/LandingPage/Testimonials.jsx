import React, {useState} from 'react'

const Testimonials = () => {

    const [testimonialId, setTestimonialId] = useState(0);

    const slideLeftTestimonial = () => {
        setTestimonialId(testimonialId<=0 ? 2 : testimonialId - 1);
    }

    const slideRightTestimonial = () => {
        setTestimonialId(testimonialId >= 2 ? 0 : testimonialId + 1);
    }

    return (
        <div className='Testimonials'>
            <div id='testimonials_title' className='l_h2'>
                <h2>TESTIMONIALS</h2>
            </div>
            <div className="itemCarousel">
                <div id='testimonialItems' style={{transform : `translateX(calc(-47.5vw * ${testimonialId}))`}}>
                    <div className="testimonial">
                        <div className='itemImage'>
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className='itemImage'>
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className='itemImage'>
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.
                        </div>
                    </div>
                    <div className="testimonial">
                        <div className='itemImage'>
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.
                        </div>
                    </div>
                </div>
                <div className='prevArrow' onClick={slideLeftTestimonial}>&#10094;</div>
                <div className='nextArrow' onClick={slideRightTestimonial}>&#10095;</div>
            </div>
        </div>
    )
}

export default Testimonials
