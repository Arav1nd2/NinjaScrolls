import React from 'react'
import Typist from 'react-typist';
import homeImg from '../../assets/home.svg';
import './Home.css';

class Home extends React.Component {
    
    render() {
        let cursorSetting = {
            show: false
        }
        return (
            <React.Fragment>
            <div className = "container">
                <br/><br/>
                <Typist cursor ={cursorSetting} >
                    <h1 className = "display1 text-center text-warning">Hello <span className = "text-secondary">Book Lover!</span></h1>
                </Typist>
                <br/>
                <main>
                    <div className = "row">
                        <div className = "col-md-5">
                            <img src = {homeImg} width = "95%" />
                        </div>
                        <div className = "col-md-7">
                            <div className = "container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in ornare diam. Nam eget elit egestas elit lobortis sodales ac ac nibh. Curabitur congue tortor ac massa elementum hendrerit. Maecenas semper enim ac augue pulvinar, nec dignissim justo lacinia. Etiam vel ipsum risus. In justo leo, egestas suscipit convallis vel, sagittis at dolor. Morbi maximus felis bibendum, vestibulum eros id, efficitur dolor. Phasellus eget fringilla neque.</p>
                            <div className = "text-right">
                                <button className = "btn btn-warning">Get Started <i class="fas fa-arrow-right"></i></button>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <footer>
                <small>@Copyrights 2019 Aravind Srinivasan</small>
            </footer>
            </React.Fragment>
        )
    }
}

export default Home;
