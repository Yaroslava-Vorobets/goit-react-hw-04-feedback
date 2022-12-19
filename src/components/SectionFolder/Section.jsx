import PropTypes from 'prop-types';
import {Title, Block} from './SectionStyled';

const Section = ({title,children}) => {
    return (
        <Block>
           {title && <Title>{title}</Title>}
            {children}
        </Block>
    )
}

Section.propTypes = {
  title: PropTypes.string,
}

export default Section