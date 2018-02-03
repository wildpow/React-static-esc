import React from 'react';
import { ImgWrapper, SmallImgHolder, SmImg, LargeImg} from './ImageViewerStyles';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeImg: '1'
    };
    this.changeActiveImage = this.changeActiveImage.bind(this);
  };
  changeActiveImage(e) {
    this.setState({
      activeImg: e.currentTarget.dataset.id
    });
  };
  selector() {
    const { activeImg } = this.state

    switch (activeImg) {
      case '1':
        return <LargeImg src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.cover}`}/>
      case '2':
        return <LargeImg src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.img1}`}/>
      case '3':
        return <LargeImg src={`https://media.graphcms.com/resize=w:500,h:500,fit:clip/${this.props.img2}`}/>
      default:
        break;
    }
  };
  render() {
    return (
      <ImgWrapper>
        <div className="MainImgHolder">{this.selector()}</div>
        <SmallImgHolder className="SmallImgHolder">
          <SmImg className="SmallPic" onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:165,h:150,fit:clip/${this.props.cover}`} data-id="1"/>
          <SmImg className="SmallPic" onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:165,h:150,fit:clip/${this.props.img1}`} data-id="2" />
          <SmImg className="SmallPic" onMouseOver={this.changeActiveImage} src={`https://media.graphcms.com/resize=w:165,h:150,fit:clip/${this.props.img2}`} data-id="3"/>
        </SmallImgHolder>
      </ImgWrapper>
    )
  }
};

export default ImageViewer;