import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
import axios from 'axios'
import Spinner from './Spinner';
export class News extends Component {
      static propTypes = {
        country : PropTypes.string ,
        pageSize : PropTypes.number,
        category : PropTypes.string
    }

    capaitalize = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
      
        super(props);
        console.log("Hello I am constructor");
        this.state ={
            articles : [],
            loading : false ,
            page : 1
        }
        document.title=`${this.capaitalize(this.props.category)}- Today News`;
    }

    async updatenews(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dee73e5e39f64cbaa7923a17d3b9de26&page=${this.state.page}&pageSize=${this.props.page}`;
        this.setState({loading : true})
        const response = await axios.get(url);
        const data = await response.data;
        console.log(data);
        this.setState({articles:data.articles, totalResults : data.totalResults, loading : false})

    }

    async componentDidMount(){
        // console.log("cdm");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dee73e5e39f64cbaa7923a17d3b9de26&page=1&pageSize=${this.props.page}`;
        // // let data = fetch(url);
        // // let parsedData = await data.json();
        // // // this.setState({articles:parsedData.articles})
        // this.setState({loading : true})
        // const response = await axios.get(url);
        // const data = await response.data;
        // console.log(data);
        // this.setState({articles:data.articles, totalResults : data.totalResults, loading : false})
        this.updatenews();


    }

    handleprev= async ()=>{
        // console.log("previous");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dee73e5e39f64cbaa7923a17d3b9de26&page=${this.state.page -1}&pageSize=${this.props.page}`;
        // this.setState({loading : true})
        // const response = await axios.get(url);
        // const data = await response.data;
        // console.log(data);
        // this.setState({page : this.state.page -1 ,
        //     articles:data.articles , loading : false})
        this.updatenews();
        this.setState({page : this.state.page - 1})
    }

    handlenext= async ()=>{
        // console.log("Next");
        if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.page)){}
        else {

            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dee73e5e39f64cbaa7923a17d3b9de26&page=${this.state.page +1}&pageSize=${this.props.page}`;
            // this.setState({loading : true})
            // const response = await axios.get(url);
            // const data = await response.data;
            // console.log(data);
            // this.setState({page : this.state.page +1 ,
            //     articles:data.articles , loading : false})

            this.updatenews();
            this.setState({page : this.state.page + 1})
        }
    }

    render() {
        console.log("render");
        return (
            <div className='container my-3'>
                <h2 className="text-center">Today News - { this.capaitalize(this.props.category)} category</h2>
                {this.state.loading &&  <Spinner/>}
                <div className="row">
               {!(this.state.loading) && this.state.articles.map((element)=>{

                   return <div className='col-md-4 my-2' key={element.url}>
                        <Newsitem title={element.title} description={element.description} img={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div>
                    })}
                </div>
                <div className='container my-3 d-flex justify-content-between'>
                <button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handleprev}>&larr; Previous</button>
                <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.page)}  type="button" className="btn btn-info" onClick={this.handlenext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News ;
