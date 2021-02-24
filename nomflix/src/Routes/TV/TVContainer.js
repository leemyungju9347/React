import { tvApi } from 'Components/api'
import React from 'react'
import TVPresenter from './TVPresenter'

class TVContainer extends React.Component {
    state = {
        topRated:null,
        popular:null,
        airingToday:null,
        error:null,
        loading:true
    }

    async componentDidMount() {
        try {
            // top rated
            const { data : { results : topRated } } = await tvApi.topRated();
            // popular
            const { data : { results : popular } } = await tvApi.popular();
            // airing today
            const { data : { results : airingToday } } = await tvApi.airingToday();

            this.setState({
                topRated,
                popular,
                airingToday
            })

            
        } catch {
            this.setState({
                error: `Can't find TV information`
            })
            
        } finally {
            this.setState({
                loading:false
            })
        }
    }

    render() {
        const {topRated, popular, airingToday, error, loading } = this.state;

        return <TVPresenter 
            topRated={topRated} 
            popular={popular} 
            airingToday={airingToday} 
            error={error} 
            loading={loading}
        />
    }
}

export default TVContainer