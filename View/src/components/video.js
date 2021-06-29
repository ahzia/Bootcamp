import React from 'react';

       class Video extends React.Component {
       render(){
          return(
             <div className="myVideo">
                 <video width="110%" controls autostart autoPlay src={this.props.src} type={this.props.type}  style={{borderRadius:"5px"}} />
            </div>
             )
           }
         }

         export default Video;