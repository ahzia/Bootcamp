import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <div style={{margin: "15px"}}>
            <img src={this.state.image} />
            <Typography variant="body2" gutterBottom>
                Select an Image
            </Typography>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayImage;