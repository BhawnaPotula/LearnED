import React, {useState} from 'react'

const Services = () => {

    const [serviceId, setServiceId] = useState(0);

    const slideLeftService = () => {
        setServiceId(serviceId<=0 ? 2 : serviceId - 1);
    }

    const slideRightService = () => {
        setServiceId(serviceId>=2 ? 0 : serviceId + 1);
    }

    return (
        <div>
            <div id='services_title' className='l_h2'>
                <h2>OUR SERVICES</h2>
            </div>
            <div className='itemCarousel'>
                <div id='serviceItems' style={{transform : `translateX(calc(-47.5vw * ${serviceId}))`}}>
                    <div className='service'>
                        <div className="itemImage">
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.</div>
                    </div>
                    <div className="service">
                        <div className='itemImage'>
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.</div>
                    </div>
                    <div className='service'>
                        <div className="itemImage">
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.</div>
                    </div>
                    <div className="service">
                        <div className='itemImage'>
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.</div>
                    </div>
                </div>
                <div className='prevArrow' onClick={slideLeftService}>&#10094;</div>
                <div className='nextArrow' onClick={slideRightService}>&#10095;</div>
            </div>
        </div>
    )
}

export default Services
