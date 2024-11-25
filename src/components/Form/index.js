import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Form extends Component {
  state = {
    age: '',
    gender: '',
    weight: '',
    height: '',
    goal: '',
    dietary: '',
    workoutTime: '',
    level: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    //   Cookies.set('jwt_token', jwtToken, {
    //     expires: 30,
    //     path: '/',
    //   })
    history.replace('/schedule')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
  }

  submitForm = async event => {
    event.preventDefault()
    const {
      age,
      gender,
      weight,
      height,
      goal,
      dietary,
      workoutTime,
      level,
    } = this.state
    const userDetails = {
      age,
      gender,
      weight,
      height,
      goal,
      dietary,
      workoutTime,
      level,
    }

    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      //   "Content-Type": "application/json"
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = ''
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeAge = event => {
    this.setState({age: event.target.value})
  }

  onChangeGender = event => {
    this.setState({gender: event.target.value})
  }

  onChangeWeight = event => {
    this.setState({weight: event.target.value})
  }

  onChangeHeight = event => {
    this.setState({height: event.target.value})
  }

  onChangeGoal = event => {
    this.setState({goal: event.target.value})
  }

  onChangeDietary = event => {
    this.setState({dietary: event.target.value})
  }

  onChangeWorkoutTime = event => {
    this.setState({workoutTime: event.target.value})
  }

  onChangeIntensityLevel = event => {
    this.setState({level: event.target.value})
  }

  renderAgeField = () => {
    const {age} = this.state
    return (
      <>
        <label className="input-label" htmlFor="age">
          Age
        </label>
        <input
          type="number"
          id="age"
          placeholder="Enter your age"
          className="username-input-field"
          value={age}
          onChange={this.onChangeAge}
        />
      </>
    )
  }

  renderGenderField = () => {
    const {gender} = this.state
    return (
      <>
        <label className="input-label" htmlFor="gender">
          Gender
        </label>
        <input
          type="text"
          id="gender"
          placeholder="Enter your gender"
          className="password-input-field"
          value={gender}
          onChange={this.onChangeGender}
        />
      </>
    )
  }

  renderWeightField = () => {
    const {weight} = this.state
    return (
      <>
        <label className="input-label" htmlFor="weight">
          Weight
        </label>
        <input
          type="number"
          step="0.01"
          id="weight"
          placeholder="Enter your current weight"
          className="username-input-field"
          value={weight}
          onChange={this.onChangeWeight}
        />
      </>
    )
  }

  renderHeightField = () => {
    const {height} = this.state
    return (
      <>
        <label className="input-label" htmlFor="height">
          Height
        </label>
        <input
          type="number"
          step="0.01"
          id="height"
          placeholder="Enter your current height"
          className="username-input-field"
          value={height}
          onChange={this.onChangeHeight}
        />
      </>
    )
  }

  renderHealthGoalField = () => {
    const {goal} = this.state
    return (
      <>
        <label className="input-label" htmlFor="goal">
          Health Goal
        </label>
        <input
          type="text"
          id="goal"
          placeholder="Weight Loss,Muscle Gain.."
          className="username-input-field"
          value={goal}
          onChange={this.onChangeGoal}
        />
      </>
    )
  }

  renderDietaryPreferenceField = () => {
    const {dietary} = this.state
    return (
      <>
        <label className="input-label" htmlFor="dietary">
          Dietary
        </label>
        <input
          type="text"
          id="dietary"
          placeholder="Veg or Non Veg..."
          className="username-input-field"
          value={dietary}
          onChange={this.onChangeDietary}
        />
      </>
    )
  }

  renderWorkoutTimePreferenceField = () => {
    const {workoutTime} = this.state
    return (
      <>
        <label className="input-label" htmlFor="workoutTime">
          Workout Timings
        </label>
        <input
          type="text"
          id="workoutTime"
          placeholder="Morning 5-6"
          className="username-input-field"
          value={workoutTime}
          onChange={this.onChangeWorkoutTime}
        />
      </>
    )
  }

  renderIntensityLevelPreferenceField = () => {
    const {level} = this.state
    return (
      <>
        <label className="input-label" htmlFor="level">
          Intensity Level
        </label>
        <input
          type="text"
          id="level"
          placeholder="Easy,Medium,Hard"
          className="username-input-field"
          value={level}
          onChange={this.onChangeIntensityLevel}
        />
      </>
    )
  }

  render() {
    // const jwtToken = Cookies.get('jwt_token')
    // if (jwtToken !== undefined) {
    //   return <Redirect to="/" />
    // }

    const {
      age,
      gender,
      weight,
      height,
      goal,
      dietary,
      workoutTime,
      level,
    } = this.state

    console.log(age)
    console.log(gender)
    console.log(weight)
    console.log(height)
    console.log(goal)
    console.log(dietary)
    console.log(workoutTime)
    console.log(level)

    return (
      <>
        <Header />
        <div className="cart-container">
          <div className="login-form-container">
            <form className="form-container" onSubmit={this.submitForm}>
              <img
                src="https://res.cloudinary.com/dgwihcnkh/image/upload/v1732521745/FormaAI-images/formaailogo_iswiui.png"
                className="login-website-logo-desktop-image"
                alt="website logo"
              />

              <div className="form-cards-arrangement">
                <div className="input-container">{this.renderAgeField()}</div>
                <div className="input-container">
                  {this.renderGenderField()}
                </div>
              </div>

              <div className="form-cards-arrangement">
                <div className="input-container">
                  {this.renderWeightField()}
                </div>
                <div className="input-container">
                  {this.renderHeightField()}
                </div>
              </div>

              <div className="form-cards-arrangement">
                <div className="input-container">
                  {this.renderHealthGoalField()}
                </div>
                <div className="input-container">
                  {this.renderDietaryPreferenceField()}
                </div>
              </div>

              <div className="form-cards-arrangement">
                <div className="input-container">
                  {this.renderWorkoutTimePreferenceField()}
                </div>
                <div className="input-container">
                  {this.renderIntensityLevelPreferenceField()}
                </div>
              </div>

              <button type="submit" className="login-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Form
