import React from 'react';
import event from '../EventEmitter';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documentsPath: '',
    };
  }

  _onClick() {
    event.emit('onClickLoadButton', 'hello');
  }

  _onChangePath(e) {
    console.log(_value);
    this.setState({
      documentsPath: e.target.value,
    });
  }

  render() {
    return <div>
      <div className='ui input'>
        <input
          type='text'
          value={this.state.documentsPath}
          onChange={this._onChangePath.bind(this)}>
        </input>
      </div>
      <button
        className='ui button'
        onClick={this._onClick.bind(this)}>load</button>
    </div>;
  }
}
