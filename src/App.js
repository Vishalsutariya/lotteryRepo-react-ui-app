import './App.css';
import { Component } from 'react';
import lottery from './lottery';

class App extends Component {

  //constructor can be written as state = { manager: '' }; also as per ECMAScript2016
  constructor(props) {
    super(props);

    this.state = { manager: '' };
  }

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();

    this.setState({ manager }) // is equal to {manager: manager}
  }

  render() {

    return (
      <div>
        <h2>Lottery contract</h2>
        <p>This contract is managed by {this.state.manager}</p>
      </div>
    );
  }

}

export default App;
