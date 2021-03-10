import React from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet-async';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Message from 'Components/Message';


const Container = styled.div`
    height:calc(100vh - 50px);
    width:100%;
    position:relative;
    padding:50px;
    z-index:0;
`;

const Content = styled.div`
    display:flex;
    width:100%;
    height:100%;
    position:relative;
    z-index:1;
`;

const Cover = styled.div`
    width:30%;
    /* height:100%; */
    background-image:url(${props => props.bgImage });
    background-position:center center;
    background-size:cover;
    border-radius:5px;
`;

const Data = styled.div`
    width:70%;
    margin-left:30px;
`;

const Title = styled.h3`
    font-size:2em;
`;

const ItemContainer = styled.div`
    margin:20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin:0 10px;
`;

const Overview = styled.p`
    line-height:1.5;
    font-size:1.2em;
    width:60%;
    opacity:0.7;
`;


const BackDrop = styled.div`
    background-image:url(${props => props.bgImage });
    background-position:center center;
    background-size:cover;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    filter:blur(3px);
    opacity:0.5;
`;


const DetailPresenter = ({result,error,loading}) => (

    loading ? (
        <>
            <Helmet>
                <title>Loading | Nomflix</title>
            </Helmet>
            <Loader /> 
        </>
    )
    : error ? <Message /> : (
        <Container>
            <Helmet>
                <title>{result.title ? result.title : result.name} | Nomflix</title>
            </Helmet>
            <BackDrop bgImage={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : null } />
            <Content>
                <Cover bgImage={result.poster_path ? 
                `https://image.tmdb.org/t/p/original${result.poster_path}` 
                : require('../../assets/noPosterimages.png').default }
                />
                <Data>
                    <Title>{ result.title ? result.title : result.name }</Title>
                    <ItemContainer>
                        <Item>
                            { result.release_date ? 
                            result.release_date.substring(0,4) 
                            : result.first_air_date.substring(0,4) }
                        </Item>
                        <Divider>·</Divider>
                        <Item>
                            { result.runtime ? 
                            result.runtime
                            : result.episode_run_time } min
                        </Item>
                        <Divider>·</Divider>
                        <Item>
                            { result.genres && result.genres.map((genre,index) =>
                            index === result.genres.length - 1 ? genre.name : `${genre.name} / `  ) }
                        </Item>
                    </ItemContainer>
                    <Overview>{ result.overview }</Overview>
                </Data>
            </Content>
        </Container>
    )
)

DetailPresenter.prototype = {
    result:PropTypes.object,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default DetailPresenter