import { movieApi, tvApi } from 'Components/api'
import React from 'react'
import SearchPresenter from './SearchPresenter'

class SearchContainer extends React.Component {
    state = {
        movieResults:null,
        tvResults:null,
        searchTerm:'',
        error:null,
        loading:false

    }

    handleSubmit = event => {
        event.preventDefault();

        const { searchTerm } = this.state 
        if( searchTerm !== '' ) {
            this.searchByTerm()
        }
    }

    updateTerm = event => {
        const {target : { value }} = event;

        this.setState({
            searchTerm:value
        })

        console.log(value);
    }

    searchByTerm = async() => {
        const { searchTerm } = this.state 

        try {
            const { data : {results : movieResults}} = await movieApi.search(searchTerm);
            const {data : {results : tvResults}} = await tvApi.search(searchTerm);

            console.log(movieResults, tvResults);

            this.setState({
                movieResults, 
                tvResults
            })

        } catch {

            this.setState({
                error: `Can't find results.`
            })
            
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { 
            movieResults,
            tvResults,
            searchTerm, 
            error, 
            loading } = this.state;

        return <SearchPresenter 
            movieResults = {movieResults}
            tvResults = {tvResults}
            searchTerm = {searchTerm} 
            error={error} 
            loading={loading}
            handleSubmit={this.handleSubmit}
            updateTerm={this.updateTerm}
        />
        // 누군가가 폼을 제출할때 handleSubmit 호출할 예정
    }
}

export default SearchContainer