import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">FormaAI it Shapes your Lifestyle</h1>
        <img
          src="https://res.cloudinary.com/dgwihcnkh/image/upload/v1732530035/FormaAI-images/fitnessatbanner_oob3ra.png"
          alt="dresses to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Forma AI helps you create a personalized daily schedule based on your
          activities, food preferences, and health goals. Simply enter your
          details, and the app generates a plan tailored to your needs,
          including tasks, meals, and reminders. Stay organized and balanced
          effortlessly with AI-guided recommendations!
        </p>
        <button type="button" className="shop-now-button">
          Fill the Details
        </button>
      </div>
      <img
        src="https://res.cloudinary.com/dgwihcnkh/image/upload/v1732530035/FormaAI-images/fitnessatbanner_oob3ra.png"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
