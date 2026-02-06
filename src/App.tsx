import { useState } from 'react'
import './App.css'

const noTexts = [
  'No (wait, my finger slipped) 😅',
  'Are you sure? 👀',
  'Think again… 🥺',
  'Last chance! 💘',
]

function App() {
  const [answer, setAnswer] = useState<'pending' | 'yes'>('pending')
  const [noIndex, setNoIndex] = useState(0)
  const [noClicks, setNoClicks] = useState(0)

  const handleYes = () => {
    setAnswer('yes')
  }

  const handleNoHover = () => {
    setNoIndex((prev) => (prev + 1) % noTexts.length)
  }

  const handleNoClick = () => {
    setNoIndex((prev) => (prev + 1) % noTexts.length)
    setNoClicks((prev) => prev + 1)
  }

  return (
    <div className="valentine-page">
      <div className="floating-hearts" aria-hidden="true">
        <div className="heart h1" />
        <div className="heart h2" />
        <div className="heart h3" />
        <div className="heart h4" />
      </div>

      <div className={`valentine-card ${answer === 'yes' ? 'card-yes' : ''}`}>
        {answer === 'pending' && (
          <>
            <p className="valentine-greeting">Hey my love,</p>
            <h1 className="valentine-question">
              Will you be my <span>Valentine</span>?
            </h1>
            <p className="valentine-note">
              I’m so grateful for you every single day, but this Valentine’s I wanted to ask you
              properly. So here it is, nice and official:
            </p>

            <div className="valentine-buttons">
              <button
                className={`btn yes ${noClicks > 0 ? 'yes-smaller' : ''}`}
                onClick={handleYes}
              >
                Yes 💘
              </button>
              <button
                className={`btn no ${noClicks > 0 ? 'no-bigger' : ''}`}
                onMouseEnter={handleNoHover}
                onClick={handleNoClick}
              >
                {noTexts[noIndex]}
              </button>
            </div>

            <p className="valentine-footer">
              Made with ❤️ just for you.
            </p>
          </>
        )}

        {answer === 'yes' && (
          <div className="yes-state">
            <p className="valentine-greeting">You said yes! 🎉</p>
            <h1 className="valentine-question">
              Best. <span>Valentine</span>. Ever.
            </h1>
            <p className="valentine-note">
              Thank you for choosing me. I promise to keep making you feel loved, appreciated,
              and a little bit spoiled — not just today, but always. 💖
            </p>
            <p className="valentine-footer">
              Screenshot this so I can remember this moment forever. 📸
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
