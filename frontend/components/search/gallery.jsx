import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-images';
import Modal from 'boron/OutlineModal';
import ImageDetail from './image_detail';
import { hashHistory } from 'react-router';
import Infinite from 'react-infinite';
import FavoriteBtn from './favorite_btn';
// import LazyLoad from 'react-lazy-load';

class Gallery extends React.Component{
    constructor(){
	super();
	this.state = {
	    currentImage: 0,
	    containerWidth: 0
	};
	this.handleResize = this.handleResize.bind(this);
	this.closeLightbox = this.closeLightbox.bind(this);
	this.gotoNext = this.gotoNext.bind(this);
	this.gotoPrevious = this.gotoPrevious.bind(this);
	this.openLightbox = this.openLightbox.bind(this);
    }
    componentDidMount(){
	this.setState({containerWidth: Math.floor(ReactDOM.findDOMNode(this).clientWidth)})
        window.addEventListener('resize', this.handleResize);
    }
    componentDidUpdate(){
	if (ReactDOM.findDOMNode(this).clientWidth !== this.state.containerWidth){
	    this.setState({containerWidth: Math.floor(ReactDOM.findDOMNode(this).clientWidth)});
	}
    }
    componentWillUnmount(){
	 window.removeEventListener('resize', this.handleResize, false);
    }
    handleResize(e){
        this.setState({containerWidth: Math.floor(ReactDOM.findDOMNode(this).clientWidth)});
    }
    openLightbox(index, event){
        event.preventDefault();
        this.setState({
	    currentImage: index,
            lightboxIsOpen: true
        });
    }
    closeLightbox(){
        this.setState({
	    currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious(){
	this.setState({
	    currentImage: this.state.currentImage - 1,
	});
    }
    gotoNext(){
    	this.setState({
    	    currentImage: this.state.currentImage + 1,
    	});
    }


    showModal(formType) {
        this.refs.modal.show();
    }

    hideModal() {
        this.refs.modal.hide();
    }  

    handleInfiniteLoad() {
        var that = this;
        this.setState({
            isInfiniteLoading: true
        });
        setTimeout(function() {
            var elemLength = that.state.elements.length,
                newElements = that.buildElements(elemLength, elemLength + 1000);
            that.setState({
                isInfiniteLoading: false,
                elements: that.state.elements.concat(newElements)
            });
        }, 2500);
    }



    render(){

        if (this.props.imageDetail.id) {
            this.showModal();
        }

        var rowLimit = 1,
            photoPreviewNodes = [];
        if (this.state.containerWidth >= 480){
            rowLimit = 2;
        }
        if (this.state.containerWidth >= 1024){
            rowLimit = 3;
        }
        var contWidth = this.state.containerWidth - (rowLimit * 4); /* 4px for margin around each image*/
        contWidth = Math.floor(contWidth - 2); // add some padding to prevent layout prob
	var lightboxImages = [];
        for (var i=0;i<this.props.photos.length;i+=rowLimit){
            var rowItems = [];
            // loop thru each set of rowLimit num
            // eg. if rowLimit is 3 it will  loop thru 0,1,2, then 3,4,5 to perform calculations for the particular set
            var aspectRatio=0,
                totalAr=0,
                commonHeight = 0;
            for (var j=i; j<i+rowLimit; j++){
                if (j == this.props.photos.length){
                    break;
                }
		totalAr += this.props.photos[j].aspectRatio;
            }
            commonHeight = contWidth / totalAr;
            // run thru the same set of items again to give the common height
            for (var k=i; k<i+rowLimit; k++){
                if (k == this.props.photos.length){
                    break;
                }
		var src = this.props.photos[k].url;

        let modal;   

        let favorites = this.props.currentUser.favorites;
        let imgId = this.props.photos[k].id;


        let favorited = (favorites && favorites[imgId]) ? true : false; 

		if (this.props.disableLightbox){
            let image = this.props.photos[k];
            console.log("this.props.photos[k]:", this.props.photos[k]);
		    photoPreviewNodes.push(
                // <ImageResult onClick={() => hashHistory.push(`/search/images/${image.id}`)} key={k} style={style}>

                <div className="img-container" key={k} onClick={() => hashHistory.push(`/search/images/${image.id}`)} key={k} style={style}>
                  <img src={src} style={{display:'block', border:0}} height={commonHeight} width={commonHeight * image.aspectRatio} alt="" />
                  <div className="img-footer fbc">
                    <div className="ibm">
                      <img className="avatar-img ibm" src={image.avatar} alt=""/>
                      <span className="avatar-title white ibm">{image.email}</span>
                    </div>
                    <FavoriteBtn favorited={favorited} favorite={this.props.favorite.bind(this, this.props.photos[k].id)} />
                  </div>
                </div>
		    );
		}
            }
        }
	return(
	    this.renderGallery(photoPreviewNodes, lightboxImages)
        );
    }
    renderGallery(photoPreviewNodes, lightboxImages){
   
	if (this.props.disableLightbox && this.props.requestImageDetail){
        const customStyles = {
          content : {
            bottom: 'auto',
            left: '50%',
            overflow: 'visible',
            padding: '3rem',
            top: '0%',
            transform: 'translate3d(-50%, -50%, 0)'         
          }
        }        
	    return(
		<div id="Gallery" className="clearfix">
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              enforceFocus={false}
              style={customStyles}
            >
                <h1>Hello</h1>
            </Modal>
		    {photoPreviewNodes}
		</div>
	    );
	} else if (this.props.disableLightbox ) {
        <div id="Gallery" className="clearfix">
                {photoPreviewNodes}
        </div>        
    }
	else{
	    return(
		<div id="Gallery" className="gallery clearfix">
		    {photoPreviewNodes}
		    <Lightbox
			currentImage={this.state.currentImage}
			images={lightboxImages}
			isOpen={this.state.lightboxIsOpen}
			onClose={this.closeLightbox}
			onClickPrev={this.gotoPrevious}
			onClickNext={this.gotoNext}
			width={1600}
			showImageCount={this.props.lightboxShowImageCount}
			backdropClosesModal={this.props.backdropClosesModal}
		    />
		</div>
	    );
	}
    }
};
Gallery.displayName = 'Gallery';
Gallery.propTypes = {
    photos: function(props, propName, componentName){
	var lightboxImageValidator = React.PropTypes.object;
	if (!props.disableLightbox){
	    lightboxImageValidator = React.PropTypes.object.isRequired;
	}
	return React.PropTypes.arrayOf(
	    React.PropTypes.shape({
		src: React.PropTypes.string.isRequired,
		width: React.PropTypes.number.isRequired,
		height: React.PropTypes.number.isRequired,
		aspectRatio: React.PropTypes.number.isRequired,
		lightboxImage: lightboxImageValidator
	    })
	).isRequired.apply(this,arguments);
    },
    disableLightbox: React.PropTypes.bool
};
Gallery.defaultProps = {
    lightboxShowImageCount: false,
    backdropClosesModal: true,
    disableLightbox: false
}
// Gallery image style
const style = {
   display: 'block',
   margin: 2,
   backgroundColor:'#e3e3e3',
   float: 'left'
}

export default Gallery;
