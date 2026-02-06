import { useState } from 'react'
import './App.css'
import { memories } from './memories'

type Screen = 'intro' | 'timeline' | 'final'

function App() {
  const [screen, setScreen] = useState<Screen>('intro')
  const [finalAnswer, setFinalAnswer] = useState<'pending' | 'yes'>('pending')

  const goNext = () => {
    setScreen((prev) => (prev === 'intro' ? 'timeline' : 'final'))
  }

  const goBack = () => {
    if (screen === 'final') {
      setFinalAnswer('pending')
    }
    setScreen((prev) => (prev === 'final' ? 'timeline' : 'intro'))
  }

  return (
    <div className="app-shell">
      <main className={`card card-${screen}`}>
        {screen === 'intro' && (
          <section className="screen screen-intro">
            <p className="eyebrow">From Erish Prajapati to Supriya Shrestha</p>
            <h1 className="title">
              A small page
              <br />
              for a big feeling.
            </h1>
            <p className="body">
              This isn&apos;t flowers or chocolate. It&apos;s something a little more &quot;us&quot;:
              a quiet corner of the internet where I can say how much you mean to me, one moment at
              a time.
            </p>
            <button className="primary-btn" type="button" onClick={goNext}>
              Walk through our memories
            </button>
          </section>
        )}

        {screen === 'timeline' && (
          <section className="screen screen-timeline">
            <p className="eyebrow">Our timeline</p>
            <h2 className="subtitle">Little moments that turned into &quot;us&quot;</h2>
            <ol className="timeline">
              {memories.map((memory, index) => (
                <li key={memory.id} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <p className="timeline-year">{memory.year}</p>
                    <h3 className="timeline-title">{memory.title}</h3>
                    <p className="timeline-description">{memory.description}</p>
                  </div>
                  {index !== memories.length - 1 && <div className="timeline-line" />}
                </li>
              ))}
            </ol>
            <div className="actions">
              <button className="ghost-btn" type="button" onClick={goBack}>
                Back
              </button>
              <button className="primary-btn" type="button" onClick={goNext}>
                And now, a question
              </button>
            </div>
          </section>
        )}

        {screen === 'final' && (
          <section className="screen screen-final">
            <p className="eyebrow">Right here, right now</p>
            <h2 className="title">
              Supriya,
              <br />
              will you be my Valentine?
            </h2>
            {finalAnswer === 'pending' && (
              <>
                <p className="body">
                  After Sailung mornings, jersey surprises, and all our playful fights, I realised
                  something simple: there&apos;s no version of the future I want where you&apos;re
                  not in it. Not just as a memory, but as my person.
                </p>
                <p className="body body-soft">
                  So this is me asking gently, honestly and completely: stay in my story. Not just
                  this Valentine&apos;s, but for all the chapters after it too.
                </p>
                <div className="answer-row">
                  <button
                    type="button"
                    className="primary-btn answer-yes"
                    onClick={() => setFinalAnswer('yes')}
                  >
                    Yes, of course
                  </button>
                  <button
                    type="button"
                    className="ghost-btn answer-no"
                    onClick={() => setFinalAnswer('yes')}
                  >
                    I was already yours anyway
                  </button>
                </div>
                <p className="hint">
                  (There&apos;s no real &quot;no&quot; button here, because deep down I already know
                  your answer.)
                </p>
              </>
            )}

            {finalAnswer === 'yes' && (
              <>
                <p className="body">
                  Okay, it&apos;s official now: you and me, this Valentine&apos;s and every one
                  after it. Thank you for choosing me — for the big days, the boring days, and all
                  the messy ones in between.
                </p>
                <p className="body body-soft">
                  Let&apos;s keep collecting tiny moments — long calls, bad jokes, Sailung mornings,
                  late walks — until they quietly turn into a whole lifetime.
                </p>
              </>
            )}
            <div className="actions">
              <button className="ghost-btn" type="button" onClick={goBack}>
                Revisit our memories
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
