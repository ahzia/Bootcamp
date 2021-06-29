import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "@material-ui/core/Button";


export default class YourComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
          textareaValue: '',
          pvalue: '',
        }
      }
      
      handleOnChange(event) {
        this.setState({
          textareaValue: event.target.value
        })
      }
      handleOnSubmit(event) {
        event.preventDefault();
        this.setState({
            pvalue: this.state.textareaValue + ' Saved', 
        })
      }

    
      render() {
        return <div>
            <div style={{marginTop:"7vh"}} >
                <p value={this.state.pvalue}> 
                your notes: <br /> {this.state.pvalue}
                </p>
           </div>
            <form onSubmit={(event) => this.handleOnSubmit(event)} >
              <textarea rows={10} cols={30} value={this.state.textareaValue}  type="reset" defaultValue="Reset"
                onChange={(event) => this.handleOnChange(event)}></textarea>
              <br/>
              <Button type="submit" color="secondary" variant="outlined" className="btn" style={{marginTop:"2vh"}} >Add to notes</Button>
              
            </form>
          </div>
      }
  
    }