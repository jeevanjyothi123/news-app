import React,{Component} from 'react'
var title;

class Cnn extends Component{
     constructor(){
    super()
    
    this.cnnNews();
 
    
}
state={
    articles:[]
}


cnnNews = async(e)=>{
    
    const data = await fetch('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=373c52d41d724fa6b177bcc6c2269422')
    var cnn_data=  await data.json();
//     title=(cnn_data.articles[0].title)
//    this.setState({
//     title:title
//    })

this.setState({
    articles:cnn_data.articles
})


console.log(this.state.articles.articles)

   
}


    render(){
       
       
        return(
            <div className="jumbotron">
            <h1 className="cnn-news">CNN News</h1> 
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

export default Cnn;