import { movieApi, tvApi } from 'Components/api';
import React from 'react'
import DetailPresenter from './DetailPresenter'

class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
        const { location : { pathname } } = props
        this.state = {
            result:null,
            error:null,
            loading:true,
            isMovie:pathname.includes('/movie/')
        }
    }
    

    async componentDidMount() {
        const { 
            match : 
            { params : { id } },
            history : { push },
            location : {pathname}
        } = this.props;

        console.log(pathname);
        const parsedId = parseInt(id);
        const {isMovie} = this.state;

        // id값에 string값이 입력됐을 경우 
        // id 부분에는 숫자만 입력되어야한다. 
        // but 사용자가 url검색시 문자열 값을 입력할 수도 있는 상황이 생길 수도 있기 때문에 조건을 준 것.
        if( isNaN(parsedId) ) {
            return push('/')
        }

        let result = null

        try {

            if(isMovie) {
                ({ data : result } = await movieApi.movieDetail(parsedId))

            } else {
                ({ data : result } = await tvApi.showDetail(parsedId))
            }

            
        } catch {
            this.setState({
                error:`Can't find result.`
            })
            
        } finally {
            this.setState({
                loading: false,
                result
            })
        }
    }

    render() {
        const { result, error, loading } = this.state;
        console.log(result);

        return <DetailPresenter 
            result = {result}
            error={error} 
            loading={loading}
        />
    }
}

export default DetailContainer