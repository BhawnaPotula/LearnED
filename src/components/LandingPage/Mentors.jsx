import React, {useState} from 'react'

const Mentors = () => {

    const [mentorId, setMentorId] = useState(0);

    const slideLeftMentor = () => {
        setMentorId(mentorId <= 0 ? 2 : mentorId - 1);
    }

    const slideRightMentor = () => {
        setMentorId(mentorId >= 2 ? 0 : mentorId + 1);
    }

    return (
        <div>
            <div id='mentorCount'>
                <h3>CURRENT MENTOR COUNT &nbsp;: &nbsp;<span id='no_of_mentor'>4</span></h3>
            </div>
            <div id='mentor_title' className='l_h2'>
                <h2>OUR MENTORS</h2>
            </div>
            <div className="itemCarousel">
                <div id='mentorItems' style={{transform : `translateX(calc(-47.5vw * ${mentorId}))`}}>
                    <div className="mentor">
                        <div className='itemImage'>
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.
                        </div>
                    </div>
                    <div className="mentor">
                        <div className='itemImage'>
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.
                        </div>
                    </div>
                    <div className="mentor">
                        <div className='itemImage'>
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.
                        </div>
                    </div>
                    <div className="mentor">
                        <div className='itemImage'>
                            <img src='/img/landing_page/TEST.png' alt=''/>
                        </div>
                        <div className='itemText'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nam cumque, fugiat qui quis eligendi magnam corporis totam rerum nostrum omnis aperiam suscipit eos quisquam quam impedit cupiditate ipsa quod explicabo debitis possimus at sit? Ullam illum iure nisi debitis aliquid consequuntur vitae, perspiciatis reprehenderit distinctio obcaecati in. Deserunt, rem.
                        </div>
                    </div>
                </div>
                <div className='prevArrow' onClick={slideLeftMentor}>&#10094;</div>
                <div className='nextArrow' onClick={slideRightMentor}>&#10095;</div>
            </div>
        </div>
    )
}

export default Mentors
