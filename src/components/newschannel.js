import React,{Component} from 'react';
import cnn from './../cnn.jpeg';
import cnbc from './../cnbc.png';
import bloomberg from './../bloomberg.png';
import bbcnews from './../bbcnews.png';

import { NavLink } from 'react-router-dom'

class Newschannel extends Component{

    cnnRedirect=(e)=>
    {
       
        e.preventDefault()
        this.props.history.push('/cnn')
    }
    cnbcRedirect=(e)=>
    {
       
        e.preventDefault()
        this.props.history.push('/cnbc')
    }
    bloombergRedirect=(e)=>
    {
       
        e.preventDefault()
        this.props.history.push('/bloomberg')
    }
    bbcRedirect=(e)=>
    {
       
        e.preventDefault()
        this.props.history.push('/bbc-news')
    }

    render(){

        return(
            

            <div className="container">
                <h1 className="news"> News Channels 4U</h1>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row margin_class">
                        <div className="col-sm-3">
                            
                        <div className="card" onClick={this.cnnRedirect}>
                            <img className="card-img-top" src={cnn} alt="Card image" />
                            <div className="card-body">
                            <h4 className="card-title">CNN CHANNEL</h4>
                            <p className="card-text">Find world news here....</p>
                            <a href="#" className="btn btn-primary">See news</a>
                            </div>
                        </div>
                            
                        </div>
                        <div className="col-sm-3">
                        <div className="card"  onClick={this.cnbcRedirect}>
                            <img className="card-img-top cnbc" src={cnbc} alt="Card image" />
                            <div className="card-body">
                            <h4 className="card-title">CNBC CHANNEL</h4>
                            <p className="card-text">Find world news here....</p>
                            <a href="#" className="btn btn-primary">See news</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card"  onClick={this.bloombergRedirect}>
                            <img className="card-img-top bloomberg" src={bloomberg} alt="Card image" />
                            <div className="card-body">
                            <h4 className="card-title">BLOOMBERG CHANNEL</h4>
                            <p className="card-text">Find world news here....</p>
                            <a href="#" className="btn btn-primary">See news</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="card"  onClick={this.bbcRedirect}>
                            <img className="card-img-top bbc" src={bbcnews} alt="Card image" />
                            <div className="card-body">
                            <h4 className="card-title">BBC-NEWS CHANNEL</h4>
                            <p className="card-text">Find world news here....</p>
                            <a href="#" className="btn btn-primary">See news</a>
                            </div>
                        </div>
                        </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Newschannel;