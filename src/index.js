import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBULThb7jWAIU4oj6V10oKB_DxS4Ewi2yU';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });  // same as this.setState({videos: videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar onSearchChange={term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoClick={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

