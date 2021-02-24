import { movieApi } from 'Components/api';
import React from 'react';
import HomePresenter from './HomePresenter'


class HomeContainer extends React.Component {
    state = {
        nowPlaying: null,
        upcoming:null,
        popular:null,
        error:null,
        loading:true
    }

    // 여기서 api가져오고, error처리하는 로직을 구현할 예정

    async componentDidMount() {
        try {
            // nowPlaying
            const { data:{ results : nowPlaying } } = await movieApi.nowPlaying();

            // upcoming
            const { data : { results : upcoming } } = await movieApi.upcoming();

            //popular
            const { data : { results : popular } } = await movieApi.popular();

            this.setState({
                nowPlaying,
                upcoming,
                popular
            })


        } catch {
            this.setState({
                error:`Can't find movies information`
            })

        } finally {
            this.setState({
                loading:false
            })

        }

             
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        return <HomePresenter 
            nowPlaying={nowPlaying} 
            upcoming={upcoming} 
            popular={popular} 
            error={error}
            loading={loading}
        />
    }
}

export default HomeContainer

