import React from 'react';
import axios from 'axios'
import Movie from '../components/Movie'

class Home extends React.Component {
    state = {
        isLoading : true,
        movies:[]
    }

    getMovies = async () => {
        const {
            data : {
                data : { movies }
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        console.log(movies);

        this.setState({ movies, isLoading : false })

    }

    componentDidMount() { 
        // 자바스크립트에게 componentDidMount 함수가 끝날때까지 약간 시간이 걸릴 수 있다고 얘기해줘야함. 
        // console.log('렌더링됨');
        // setTimeout(() => {
        //     this.setState({ isLoading:false })
        // }, 6000);

        this.getMovies()
    }

    render() {
        const { isLoading,movies } = this.state
        console.log('렌더함수');

        return (
            <section className="container">
                { isLoading ? (
                    <div className="loader">
                        <span className="loader_text">Loading...</span>
                    </div>
                ) 
                : (
                <div className="movies">
                  { movies.map(movie => (
                        <Movie 
                            key={movie.id}
                            id={movie.id} 
                            year={movie.year} 
                            title={movie.title} 
                            summary={movie.summary} 
                            poster={movie.medium_cover_image}
                            genres={movie.genres}
                        />
                    ))}  
                </div>
                )}

            </section>
        );
    }
}

export default Home;