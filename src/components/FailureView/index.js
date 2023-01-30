import './index.css'

const FailureView = props => {
  const {tryAgain} = props

  const onTryAgain = () => {
    tryAgain()
  }

  return (
    <div className="failure-view">
      <img
        className="failure-img"
        alt="failure view"
        src="https://res.cloudinary.com/dgk5eqwpq/image/upload/v1674800029/Something_Went_Wrong_w2lp2t.png"
      />
      <p className="failure-text">Something went wrong. Please try again</p>
      <button onClick={onTryAgain} className="retry-btn" type="button">
        Try Again
      </button>
    </div>
  )
}

export default FailureView
