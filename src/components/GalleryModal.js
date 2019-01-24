import React, { Component } from 'react';
import './GalleryModal.css';

class GalleryModal extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnMount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.props.closModal();
        }
        if (e.keyCode === 37 && this.props.hasPrev) {
            this.props.findPrev();
        }
        if (e.keyCode === 39 && this.props.hasNext) {
            this.props.findNext();
        }
    }
    render() {
        const { closeModal, hasPrev, hasNext, findNext, findPrev, src } = this.props;
        if (!src) {
            return null;
        }
        return (
            <div>
                <div className='modal-overlay' onClick={closeModal}></div>
                <div className='modal' isOpen={!!src}>
                    <div className='modal-body'>
                        <a href='#' className='modal-close' onClick={closeModal} onKeyDown={this.handleKeyDown.bind(this)}>&times;</a>
                        {hasPrev && <a href='#' className='modal-prev' onClick={findPrev} onKeyDown={this.handleKeyDown.bind(this)}>&lsaquo;</a>}
                        {hasNext && <a href='#' className='modal-next' onClick={findNext} onKeyDown={this.handleKeyDown.bind(this)}>&rsaquo;</a>}
                        <img src={src} alt='' />
                    </div>
                </div>
            </div>
        )
    }
}

export default GalleryModal;
