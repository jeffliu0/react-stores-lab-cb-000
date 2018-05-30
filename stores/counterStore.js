import Store from './Store'
<<<<<<< HEAD
import actions from '../actions/index'
=======
>>>>>>> 9fa33943c37d985cb009cd50ef7607f4e385fb2b

class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
<<<<<<< HEAD
  constructor(){
    super(0)
  }

  increment(){
    const newState = this.getState() + 1;
    this.setState(newState);
  }

  decrement(){
    const newState = this.getState() - 1;
    this.setState(newState);
  }

=======
  constructor(storeData){
    super(storeData);
    this.state = initialState
  }

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
}

const counterStore = new CounterStore();

export default counterStore;
