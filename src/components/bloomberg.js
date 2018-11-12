import React,{Component} from 'react'

class Bloomberg extends Component{
     constructor(){
    super()
    this.cnnNews();
 
 
}

state={
articles:[]
}
cnnNews = async(e)=>{
    
    const data = await fetch('https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=373c52d41d724fa6b177bcc6c2269422')
    const bloomberg_data=  await data.json();
    this.setState({
        articles:bloomberg_data.articles
    })
   
}
    render(){
        return(
            <div className="jumbotron">
                        
                <h1 class="display-4">Bloomberg News</h1>
                <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">  
            {this.state.articles.map(articles => ( 
         
                            <div className="col-sm-6 news-class">
                                    <div className="movieTitle">
                                    <div className="movieCard">
                                    
                                        <div className="Newsdiv" key={articles.id}>
                                        <h4>{articles.title}</h4>
                                        <img className="imgclass" src={articles.urlToImage} alt="news"/>
                                        <p className="articledesc">{articles.description}</p>
                                        <p className="articledesc">{articles.content}</p>
                                        <p className="publish">{articles.publishedAt}</p>
                                        </div>
                                    </div>
                                    </div>
                            </div>  
                       
          
          ))}
                </div>
                    </div>
                </div>
                </div>



            </div>
    );
    }



}

export default Bloomberg;