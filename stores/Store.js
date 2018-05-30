class Store {
  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.
  constructor (initialState) {
<<<<<<< HEAD
    this.state = initialState
=======
    this.state = initialState;
>>>>>>> 9fa33943c37d985cb009cd50ef7607f4e385fb2b
    this.listeners = []
  }

  setState (state) {
    this.state = state;
    for(const listener of this.listeners){
<<<<<<< HEAD
      listener.call(this,state)
=======
      listeners(state)
>>>>>>> 9fa33943c37d985cb009cd50ef7607f4e385fb2b
    }
  }

  getState () {
    return this.state;
  }

<<<<<<< HEAD
  addListener (listener) {
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter((l) => listener !== l);
    };
    return removeListener;
=======
  addListener(listener){
    this.listeners.push(listener)
>>>>>>> 9fa33943c37d985cb009cd50ef7607f4e385fb2b
  }
}

export default Store;
