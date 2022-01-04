import style from './Status.module.sass'
import React from 'react'

export default class Status extends React.Component {
  state = {
    status: this.props.status,
    editMode: false
  }
  updateStatus = (event) => {
    this.setState({
      status: event.currentTarget.value
    })
  }
  enableEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  disableEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.status !== this.props.status) {
      this.setState({
        status: this.state.status
      })
    }
  }
  render = () => {
    // style
    const {statusWrapper} = style;

    return (
      <div className={statusWrapper}>
        {this.state.editMode ? 
          <input type="text" autoFocus 
            onChange={this.updateStatus} 
            onBlur={this.disableEditMode} 
            value={this.state.status}
          /> :
          <span onDoubleClick={this.enableEditMode}>{this.props.status}</span>
        }
      </div>
    )
  }
};