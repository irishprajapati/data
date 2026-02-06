import { useState } from 'react'
import './App.css'
import sailungPhoto from './assets/1760069184738631.jpg'
import jerseyPhoto from './assets/1760069150864155.jpg'

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
  const [memoryIndex, setMemoryIndex] = useState(0)

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

  const memories = [
    { src: sailungPhoto, alt: 'Sailung memory', caption: 'Sailung memories 🌄' },
    { src: jerseyPhoto, alt: 'Birthday jersey memory', caption: 'My birthday jersey surprise ⚽🎁' },
  ] as const

  const nextMemory = () => setMemoryIndex((i) => (i + 1) % memories.length)
  const prevMemory = () => setMemoryIndex((i) => (i - 1 + memories.length) % memories.length)

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
            <p className="valentine-greeting">Hey Supriya Prajapati,</p>
            <h1 className="valentine-question">
              Will you be my <span>Valentine</span>?
            </h1>
            <p className="valentine-note">
              From Sailung sunrises to the football jersey you surprised me with on my birthday,
              to all the little hangouts where we laugh, fight and still end up choosing each other…
              every memory with you is my favourite one.
            </p>

            <div className="valentine-reasons">
              <p className="reasons-title">Top reasons I want you as my Valentine:</p>
              <ul>
                <li>Those Sailung memories that feel like our own little movie 🎬</li>
                <li>The jersey you gave me that feels like a warm hug every time I wear it 🥹</li>
                <li>The way we “beat each other up” and still can’t stay mad for long 💞</li>
              </ul>
            </div>

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
            <div className="yes-heart" aria-hidden="true">
              <div className="yes-heart-shape" />
            </div>
            <p className="valentine-greeting">You said yes, Supriya. 🎉</p>
            <h1 className="valentine-question">
              From Sailung to forever with <span>you</span>.
            </h1>

            <div className="memories">
              <div className="memories-header">
                <p className="memories-title">Our little memories</p>
                <p className="memories-subtitle">{memories[memoryIndex].caption}</p>
              </div>
              <div className="memories-frame">
                <img className="memories-img" src={memories[memoryIndex].src} alt={memories[memoryIndex].alt} />
              </div>
              <div className="memories-controls">
                <button className="mem-btn" type="button" onClick={prevMemory}>
                  ‹ Prev
                </button>
                <div className="mem-dots" aria-label="Memory selector">
                  {memories.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`dot ${idx === memoryIndex ? 'active' : ''}`}
                      onClick={() => setMemoryIndex(idx)}
                      aria-label={`Show memory ${idx + 1}`}
                    />
                  ))}
                </div>
                <button className="mem-btn" type="button" onClick={nextMemory}>
                  Next ›
                </button>
              </div>
            </div>

            <p className="valentine-note">
              One more memory added to our story: the day you officially became my Valentine.
              I can&apos;t wait for more jerseys, more trips, more silly fights, and a lifetime
              of choosing each other again and again.
            </p>
            <p className="valentine-footer">
              Keep this tab open for a while and just smile with me. 💌
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
