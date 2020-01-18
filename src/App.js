import React, { Component } from "react";
import socketIOClient from "socket.io-client";

const endpoint = 'http://localhost:8081';
const socket = socketIOClient(endpoint);

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
			room: ''
    };
	}
	

  componentDidMount() {
    // const { endpoint } = this.state;
		// const socket = socketIOClient(endpoint);
		socket.on('roomName', (data) => {
			this.setState({ room: data });
		});
	}
	
	onSearchGame = () => {
		socket.emit('searchGame');
		console.log('emitting');
	}
	
  render() {
		const { room } = this.state;
    return (
        <div style={{ textAlign: "center" }}>
          <button onClick={this.onSearchGame}>SEARCH GAME </button>
					{room};
        </div>
    );
  }
}

export default App;
