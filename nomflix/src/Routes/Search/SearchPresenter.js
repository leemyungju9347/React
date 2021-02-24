import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const SearchPresenter = ({
    movieResults,
    tvResults,
    airingToday,
    error,
    loading,
    searchTerm,
    handleSubmit
}) => {

}

SearchPresenter.prototype = {
    movieResults:PropTypes.array,
    tvResults:PropTypes.array,
    airingToday:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired,
    searchTerm:PropTypes.string,
    handleSubmit:PropTypes.func.isRequired

}

export default SearchPresenter