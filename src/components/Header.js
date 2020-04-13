import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div
      style={{ fontSize: 12, margin: `auto`, textAlign: `center` }}
      className="logo"
    >
      Cesar Castro
    </div>
    <div className="content">
      <div className="inner">
        <h1>Web Design and Media Portfolio</h1>
        <div className="back">
          <h3>
            ReactJS-Javascript-Jquery-HTML-SCSS-CSS-GraphQL
            {/* <br />
        for free under the{' '}
        <a href="https://html5up.net/license">Creative Commons</a> license. */}
          </h3>
        </div>
        <p className="glow">
          I am a self taught webdesigner currently focused on designing with the
          React JS library. In my opinion, being able to use JSX as well as
          React’s component based approach makes readability of code quicker,
          simplier, and more robust. Being able to reuse components as well as
          modify the props passed into them allows the ability to create complex
          and interactive UI.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Why Gatsby/React?
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Photography
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Videography
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Web
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
