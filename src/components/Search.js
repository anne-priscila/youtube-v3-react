import React, { Component } from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle, Input, InputGroup } from 'reactstrap';

import SearchApi from '../services/SearchApi';

class Search extends Component {
    
    state = {
        videos: [], searchValue: ''
    }
      
    getVideos = async () => {
        const response = await SearchApi.get(this.state.searchValue);
    
        this.setState({ videos: response.data.items });  
    }

    setSearch = (inputValue) => { this.setState({searchValue: inputValue}) }
   
    render(){

        const { videos } = this.state;

        return( 
            <>
                <div className="container col-8 p-0">
                    <CardBody className="animate__animated animate__backInDown">
                        <CardTitle className="cardMyYoutube">
                            <img src="../../image/logoYoutube.png" alt="Minha Figura" width={50}/>
                            <h5 className="titleMyYoutube">My YouTube</h5>
                        </CardTitle>
                        <InputGroup>
                        <Input type="text" placeholder="Search .." onChange={event => this.setSearch(event.target.value)} />
                            <Button color="danger" onClick={this.getVideos}>
                                Search
                            </Button>
                        </InputGroup>
                    </CardBody>
                </div>
    
                <div className="container col-8">
                    
                    {videos.map(video => (                        

                        <Card key={video.id.videoId} className="cardMusic">
                            <CardBody style={{display:"flex"}}>

                                <div className="col-4">
                                    <a href={'https://www.youtube.com/watch?v=' + video.id.videoId } target="_blank">
                                        <img alt="" src={video.snippet.thumbnails.medium.url} className="w-100"/>
                                    </a>
                                </div>

                                <div className="col-8 descriptionVideo">
                                    <CardTitle tag="h5">
                                        {video.snippet.title}
                                    </CardTitle>
                                    
                                    <CardSubtitle className="subtitleVideo">
                                        {video.snippet.description}
                                    </CardSubtitle>

                                    <CardSubtitle className="titleCanal">
                                        <span>Canal: </span>
                                        {video.snippet.channelTitle}
                                    </CardSubtitle>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
              </div>
            </>
        )
    }
};

export default Search;