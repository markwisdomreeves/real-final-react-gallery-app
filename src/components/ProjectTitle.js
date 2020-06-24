import React from 'react';
import PropTypes from 'prop-types';

const ProjectTitle = (props) => {
    return (
        <React.Fragment>
            <p className="developer-Info">{props.title}</p>
        </React.Fragment>
    )
};

// checking propTypes for errors
ProjectTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default ProjectTitle;