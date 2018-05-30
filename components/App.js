import React from 'react';
import counterStore from '../stores/counterStore'
import actions from '../actions/index'

class App extends React.Component {
  constructor (props) {
    this.counterNum = 0;
    super(props);
    this.state = {
<<<<<<< HEAD
      counter: counterStore.getState()
    }

    this.handleIncrementClick = this.handleIncrementClick.bind(this)
    this.handleDecrementClick = this.handleDecrementClick.bind(this)
=======
      // Your implementation here.
      counter: this.counterNum
    };
>>>>>>> 9fa33943c37d985cb009cd50ef7607f4e385fb2b
  }
  componentDidMount () {
    // Your implementation here.
    this.removeListener = counterStore.addListener(counter => {
      this.setState({counter});
    });
  }
  componentWillUnmount () {
    // Your implementation here.
    this.removeListener();

  }

  handleIncrementClick (ev) {
    ev.preventDefault()
    actions.increment()
  }

<<<<<<< HEAD
  handleDecrementClick (ev){
    ev.preventDefault()
    actions.decrement()
  }


=======
  increment(){
    this.setState({
      counter: this.counterNum+=1
    })
  }

  decrement(){
    this.setState({
      counter: this.counterNum-=1
    })
  }
>>>>>>> 9fa33943c37d985cb009cd50ef7607f4e385fb2b
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.handleDecrementClick}>
            -
          </button>
          <button className='increment' onClick={this.handleIncrementClick}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
