import React from 'react'
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='LandingPage'>
            <br/>
            <br/>
            <img src='/img/landing_page/ban.jpg' alt='' height="600px" width="100%"/>
            <h1>QUIZ</h1><br/><br/>
            <div className="quiz">
                <h2>CLASS</h2>
                <input type ="text" size="40"/>
                <h2>BOARD</h2>
                <input type ="text" size="40"/>
            </div>
            <button type="submit" class="btn">SUBMIT</button>
            <div className="intro">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio voluptatem libero odit, labore fugiat 
                    corporis debitis eaque ratione! Aut provident dolore corrupti rerum eos nam quibusdam voluptates? Sed cupiditate laudantium pariatur numquam, ratione ipsa nobis dicta dolore similique necessitatibus dolorem at, tempora assumenda accusamus culpa nesciunt non sit. Magnam dolor ut veritatis nulla animi itaque rem, minima impedit accusantium laboriosam id doloremque. Eos dignissimos, iusto facilis dolor odit rerum empore. Quidem expedita voluptate, enim numquam totam emporibus nulla magnam nesciunt? Aut, molestias atque. Enim, illo pariatur eos nesciunt libero saepe sit est. Ducimus illo tempora quo, quidem voluptate iure.
                </p>
            </div>
            <h1> OUR SERVICES</h1>
            <div class="container">
                <div class="card">
                    <img src="/img/landing_page/serv1.jfif" alt=''/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptates explicabo atque magnam nemo provident exercitationem magni adipisci nisi culpa?</p>
                </div>
                <div class="card">
                    <img src="/img/landing_page/serv1.jfif" alt=''/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptates explicabo atque magnam nemo provident exercitationem magni adipisci nisi culpa?</p>
                </div>
                <div class="card">
                    <img src="/img/landing_page/serv1.jfif" alt=''/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptates explicabo atque magnam nemo provident exercitationem magni adipisci nisi culpa?</p>
                </div>
            </div>
            <div class="tag"><em>100</em> mentors involved in</div><br/>
            <h1> OUR MENTORS</h1>
            <div className="container">
                <div className="card">
                    <img src="/img/landing_page/mentor.jfif" alt=''/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptates explicabo atque magnam nemo provident exercitationem magni adipisci nisi culpa?</p>
                </div>
                <div className="card">
                    <img src="/img/landing_page/mentor.jfif" alt=''/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptates explicabo atque magnam nemo provident exercitationem magni adipisci nisi culpa?</p>
                </div>
                <div className="card">
                    <img src="/img/landing_page/mentor.jfif" alt=''/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptates explicabo atque magnam nemo provident exercitationem magni adipisci nisi culpa?</p>
                </div>
            </div>
            <h1> TESTIMONIALS</h1>
            <div class="container">
                <div className="card">
                    <img src="/img/landing_page/TEST.png" alt=''/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptates explicabo atque magnam nemo provident exercitationem magni adipisci nisi culpa?</p>
                </div>
                <div className="card">
                    <img src="/img/landing_page/TEST.png" alt=''/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptates explicabo atque magnam nemo provident exercitationem magni adipisci nisi culpa?</p>
                </div>
                <div className="card">
                    <img src="/img/landing_page/TEST.png" alt=''/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptates explicabo atque magnam nemo provident exercitationem magni adipisci nisi culpa?</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage