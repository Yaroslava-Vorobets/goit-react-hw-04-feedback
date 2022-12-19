import PropTypes from 'prop-types';
import {ListEl,List} from './Statistics.Styled';

const Statistics = ({ good, neutral, bad, total, percentage}) => {      
        return (         
            <div>             
                <List>
                    <ListEl>good:{good}</ListEl>
                    <ListEl>neutral:{neutral}</ListEl>
                    <ListEl>bad:{bad}</ListEl>
                    <ListEl>total:{total}</ListEl>
                    <ListEl>Positive Feedback:{percentage}%</ListEl>
                </List>
            </div>
          
        )
    }
    

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,

}       


export default Statistics