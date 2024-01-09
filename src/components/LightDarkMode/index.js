// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  updateMode = () => {
    const {isDarkMode} = this.state
    this.setState({isDarkMode: !isDarkMode})
  }

  render() {
    const {isDarkMode} = this.state
    let card_mode
    const buttonText = isDarkMode
      ? ((card_mode = 'dark-mode'), 'Light Mode')
      : ((card_mode = 'light-mode'), 'Dark Mode')

    return (
      <div className="bg-container">
        <div className={`"card-container" ${card_mode}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            className="light-dark-mode-btn"
            type="button"
            onClick={this.updateMode}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
