import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet-async';
import styled from 'styled-components';
import Section from 'Components/Section';
import Message from 'Components/Message'
import Loader from 'Components/Loader';
import Poster from 'Components/Poster'


const Container = styled.div`
    padding:20px;
`;


const TVPresenter = ({topRated,popular,airingToday,error,loading}) => (
    <>
        <Helmet>
            <title>TV | Nomflix</title>
        </Helmet>
        {loading ? <Loader /> 
        : ( <Container>
                { topRated && topRated.length > 0 && (
                <Section title="Now Playing">
                    { topRated.map( show => <Poster 
                        key={show.id}
                        id={show.id} 
                        title={show.name} 
                        rating={show.vote_average}
                        imgUrl={show.poster_path}
                        year={show.first_air_date.substring(0,4)} 
                    />) }
                </Section>
                )}
                { popular && popular.length > 0 && (
                <Section title="Popular Shows">
                    { popular.map(show => <Poster 
                        key={show.id}
                        id={show.id} 
                        title={show.name} 
                        rating={show.vote_average}
                        imgUrl={show.poster_path}
                        year={show.first_air_date.substring(0,4)} 
                    />) }
                </Section>
                )}
                { airingToday && airingToday.length > 0 && (
                <Section title="Airing Today">
                    { airingToday.map(show => <Poster 
                        key={show.id}
                        id={show.id} 
                        title={show.name} 
                        rating={show.vote_average}
                        imgUrl={show.poster_path}
                        year={show.first_air_date.substring(0,4)} 
                    />) }
                </Section>
                )}
                {
                    error && <Message color="#e74c3c" text={error} />
                }
            </Container>)}
    </>
)


TVPresenter.prototype = {
    topRated:PropTypes.array,
    popular:PropTypes.array,
    airingToday:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default TVPresenter