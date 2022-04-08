import React from 'react';
import unsplash from '../api/unsplash';
import Search from './Search'
import ImageList from './ImageList'


class App extends React.Component {

    state = { images: [] }

    // with promise:
    // onSearchSubmit(term) {
    //     axios.get("https://api.unsplash.com/search/photos", {
    //         params: {
    //             query: term
    //         },    
    //         headers: {
    //             Authorization: 'Client-ID xuTm5kvjY3gqOA6Mju70UCZ_PfJMDAC6B1QsNSd5IPA'
    //         }
    //     })
    //     .then(response => {
    //         console.log(response.data.results)
    //     });
    // }

    // with async / await
    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term }   
        });

        this.setState({ images: response.data.results});
        console.log(response.data.results)
    }

    render() {
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
                <Search onSubmit={ this.onSearchSubmit } />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;