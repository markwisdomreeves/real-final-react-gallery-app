import React from 'react';


const PhotoGalleryChildren = props => {
    const url = `https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
    return (
        <li>
            <img src={url} title={props.title} alt={props.alt} />
        </li>
    );
};

export default PhotoGalleryChildren;
