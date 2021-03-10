import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet-async';
import styled from 'styled-components'
import Loader from 'Components/Loader'
import Section from 'Components/Section'
import Message from 'Components/Message'
import Poster from 'Components/Poster'

const Container = styled.div`
    padding:20px;
`

const Form  = styled.form`
    width:100%;
`

const Input = styled.input`
    all:unset;
    width:100%;
    font-size:2em;
`


const SearchPresenter = ({
    movieResults,
    tvResults,
    airingToday,
    error,
    loading,
    searchTerm,
    handleSubmit,
    updateTerm
}) => (
    <Container>
        <Helmet>
            <title>Search | Nomflix</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
            <Input placeholder="Search Movies or TV shows" value={searchTerm} onChange={updateTerm}/>
        </Form>
        { loading ? <Loader /> : (
            <>
                { movieResults && movieResults.length > 0 && (
                    <Section title="Movie Results">
                        {
                            movieResults.map(movie=>(
                                <Poster 
                                    key={movie.id}
                                    id={movie.id} 
                                    title={movie.title} 
                                    rating={movie.vote_average}
                                    imgUrl={movie.poster_path}
                                    isMovie={true}
                                    year={movie.release_date.substring(0,4)} 
                                />
                            ))
                        }
                    </Section>
                )}
                { tvResults && tvResults.length > 0 && (
                    <Section title="TV Results">
                        {
                            tvResults.map(tv=>(
                                <Poster 
                                    key={tv.id}
                                    id={tv.id} 
                                    title={tv.name} 
                                    rating={tv.vote_average}
                                    imgUrl={tv.poster_path}
                                    isMovie={true}
                                    year={tv.first_air_date.substring(0,4)} 
                                />
                            ))
                        }
                    </Section>
                )}
            </>
        )}
        {
            error && <Message color="#e74c3c" text={error} />
        }
        {
            movieResults && tvResults && movieResults.length === 0 && tvResults.length === 0 && 
            <Message text="Nothing Found" color="#b2bec3" />
        }
    </Container>
)

SearchPresenter.prototype = {
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    airingToday:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    searchTerm:PropTypes.string,
    handleSubmit:PropTypes.func.isRequired,
    updateTerm:PropTypes.func.isRequired

}

export default SearchPresenter