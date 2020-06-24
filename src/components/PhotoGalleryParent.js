import React, { Component } from 'react';
import PhotoGalleryChildern from './PhotoGalleryChildren';
import NoResultFound from './NoResultFound';
import Loading from './Loading';

class PhotoGalleryParent extends Component {
    render() {
        let photoDatas = this.props.data;
        if (photoDatas.length > 0) {
            photoDatas = photoDatas.map(photo => {
                return (
                    <PhotoGalleryChildern
                        key={photo.id}
                        id={photo.id}
                        farm={photo.farm}
                        secret={photo.secret}
                        server={photo.server}
                        alt={photo.title}
                        title={photo.title} 
                    />
                );
            });
        } else {
            photoDatas = <NoResultFound />;
        }
        return (
            <div className="photo-container">
                {this.props.loading ? (
                    <Loading />
                ) : (
                    <div>
                        <h3>Results</h3>
                        <ul>{photoDatas}</ul>
                    </div>
                )}
            </div>
        );
    }
}


export default PhotoGalleryParent;
