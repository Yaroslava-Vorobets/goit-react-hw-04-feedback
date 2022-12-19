
import PropTypes from 'prop-types';
import {Button} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback} ) => {
    return options.map((option) => {
        return (            
            <>                
                <Button key={option} onClick={() => onLeaveFeedback(option)} type="button" >{option}</Button>              
            </>
         
        )
    })
       
    
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions