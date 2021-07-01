import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  _onReady = (event) => {
    // event.target.pauseVideo();
    // access to player in all event handlers via event.target
  }
  render() {
    const opts = {
      height: '220',
      width: '440',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <div className="myVideo">
        {/* <video width="110%" controls autostart autoPlay src={this.props.src} type={this.props.type} style={{ borderRadius: "5px" }} /> */}
        <YouTube videoId={this.props.src} opts={opts} onReady={this._onReady} />
      </div>
    )
  }
}

export default Video;
