import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      message: ""
    };
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleMessage} value={this.state.message} />
        <p>{this.state.maxChars - this.state.message.length} words left</p>
      </div>
    );
  }
}

export default TwitterMessage;
