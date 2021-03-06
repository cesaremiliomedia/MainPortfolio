import PropTypes from 'prop-types'
import React from 'react'

import Video from '../components/video'
import PhotoGallery4 from '../components/photogallery4'
import VisibilitySensor from 'react-visibility-sensor'
import { Spring } from 'react-spring/renderprops'
class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h3 className="major">Why I use React with Gatsby</h3>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => (
                  <div style={{ opacity }}>
                    <p>
                      Site speed is one of the factors Google uses in its search
                      ranking algorithm, and slow site speeds can have a
                      negative snowball effect on your SEO. Slower sites take
                      longer to be crawled and indexed by search engines, they
                      have higher bounce rates, and lower convessrsion rates,
                      all of which will hurt your rankings.{' '}
                    </p>
                  </div>
                )}
              </Spring>
            )}
          </VisibilitySensor>
          <p>
            The core objective of ReactJS is providing the best possible
            rendering performance. Its strength comes from the focus on
            individual components. Instead of working on the entire web app,
            ReactJS allows a developer to break down the complex UI into simpler
            components.
          </p>
          <p>
            Gatsby is a framework for building modern websites and applications.
            It can pull data into a website from any and all CMSs or other
            sources that are available.{' '}
          </p>
          <ul>
            <h1>Fast</h1>
            <li>
              Gatsby makes performance optimizations automatically for your
              site. Pages load in milliseconds rather than seconds. You
              basically give Gatsby the ‘source code’ for your website and it
              compiles the most performant website possible. Gatsby also pairs
              really well with platforms like netlify, and you can easily
              configure your site to build and deploy every time you commit and
              push to github.{' '}
            </li>
            <h1>Secure</h1>
            <li>
              Gatsby comes with the latest web technologies including React,
              Webpack, GraphQL, modern JavaScript, and more without the
              requirement of servers or databases. All your content is compiled
              ahead of time so hackers can’t get to your database or into your
              CMS.
            </li>
          </ul>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 style={{ marginBottom: `3px` }}>Photography</h1>
          <div>
            <VisibilitySensor>
              {({ isVisible }) => (
                <div>
                  {' '}
                  <Spring delay={600} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                      <div style={{ opacity }}>
                        <p>
                          All photos on this page were shot and edited by me
                          using Adobe Lightroom and Photoshop. These photos were
                          taken at various events dating from 2016-2019. I
                          currently use the Canon 5d Mark IV.{' '}
                        </p>
                      </div>
                    )}
                  </Spring>
                </div>
              )}
            </VisibilitySensor>
            <PhotoGallery4 />
          </div>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'video' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 style={{ marginBottom: `10px` }}>Videography</h1>
          <div>
            <div>
              {' '}
              <VisibilitySensor>
                {({ isVisible }) => (
                  <Spring delay={600} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                      <div style={{ opacity }}>
                        <p>
                          All videos were directed, shot and edited by me. Adobe
                          Premiere Pro and After Effects are some of my favorite
                          programs I use to edit film. Some of the concepts
                          within videography that I understand are
                          Stabilization, Frame Rate, Shutter Speed, Color
                          Grading, Color Correction, and Lighting. I am also
                          very fascinated with motion graphics and have
                          experience animating posters and slideshows for web
                          and social media.{' '}
                        </p>
                      </div>
                    )}
                  </Spring>
                )}
              </VisibilitySensor>
            </div>
            <div></div>
            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring
                  delay={900}
                  duration={1000}
                  from={{ opacity: 0 }}
                  to={{
                    opacity: isVisible ? 1 : 0,
                  }}
                >
                  {props => (
                    <div style={{ ...props }}>
                      <div style={{ visibility: 'hidden' }}>yo</div>
                      <ul>
                        <li className="videos">
                          <Video
                            videoSrcURL="https://player.vimeo.com/video/365942198"
                            videoTitle="Official Music Video on YouTube"
                          />
                        </li>
                        <li className="videos">
                          <Video
                            videoSrcURL="https://player.vimeo.com/video/355282322"
                            videoTitle="Official Music Video on YouTube"
                          />
                        </li>
                        <li className="videos">
                          <Video
                            videoSrcURL="https://player.vimeo.com/video/332098006"
                            videoTitle="Official Music Video on YouTube"
                          />
                        </li>
                        <li className="videos">
                          <Video
                            videoSrcURL="https://player.vimeo.com/video/320889549"
                            videoTitle="Official Music Video on YouTube"
                          />
                        </li>
                        <li className="videos">
                          <Video
                            videoSrcURL="https://player.vimeo.com/video/316364760"
                            videoTitle="Official Music Video on YouTube"
                          />
                        </li>
                        <li className="videos">
                          <Video
                            videoSrcURL="https://player.vimeo.com/video/316739025"
                            videoTitle="Official Music Video on YouTube"
                          />
                        </li>
                      </ul>
                    </div>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </div>
          {close}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="wra">
            <div className="d" data-heading="Web Design">
              Web Design
            </div>
            <div className="content">
              <div className="speakers">
                <div style={{ textAlign: `center` }}>
                  <h1
                    style={{
                      fontSize: `10px`,
                      letterSpacing: `2px`,
                      textDecoration: `underline`,
                      textAlign: `center`,
                      marginBottom: 2,
                    }}
                  >
                    Favorite Plugins
                  </h1>
                  <ol style={{ textAlign: `left` }}>
                    <li>BootStrap</li>
                    <li>React Flip Toolkit</li>
                    <li>React-Spring</li>
                    <li>FancyBox(modal actions)</li>
                    <li>Isotope (filtering)</li>
                    <li>Lodash</li>
                  </ol>
                </div>
                <div style={{ textAlign: `center` }}>
                  <h1
                    style={{
                      fontSize: `11px`,
                      letterSpacing: `2px`,
                      textDecoration: `underline`,
                      textAlign: `center`,
                      marginBottom: 1,
                    }}
                  >
                    Favorite Applications/ WebTools
                  </h1>
                  <ol>
                    <li></li>
                    <h3 style={{ fontSize: `10px`, marginBottom: 0 }}>
                      Wordpress
                    </h3>
                    <ul>
                      <li>Cyberduck</li>
                      <li>Local by Flywheel</li>
                    </ul>
                    <h3 style={{ fontSize: `10px`, marginBottom: 0 }}>Other</h3>

                    <ul>
                      {' '}
                      <li>Github</li>
                      <li>Netlify</li>
                      <li>VS Code</li>
                      <li>MongoDB</li>
                    </ul>
                  </ol>
                  <ol></ol>
                </div>
                <p className="webdirections">
                  <div style={{ width: `100%`, margin: `auto` }}>
                    {' '}
                    <h2>current projects</h2>
                    <ul style={{ listStyle: `none`, display: `in-line` }}>
                      <li>
                        <a
                          target="_blank "
                          href="https://cesaremiliomedia.com/demo-tacosite"
                        >
                          Sample Restaurant menu page (open new tab)
                        </a>
                      </li>
                      <li>
                        <a target="_blank " href="https://heroautobrokers.com">
                          Auto Brokerage (open new tab)
                        </a>
                      </li>
                    </ul>{' '}
                    <h2
                      style={{
                        marginBottom: 0,
                      }}
                    >
                      {' '}
                      Currently Learning
                    </h2>
                    <ul
                      style={{
                        listStyle: `none`,
                        display: `in-line`,
                        marginBottom: 0,
                      }}
                    >
                      <li>NodeJs</li>
                      <li>MongoDb</li>
                      <li>Redux/Redux Tools</li>
                    </ul>
                  </div>
                </p>
              </div>
            </div>
          </div>
          {close}
        </article>
        <article
          id="contact"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">About me</h1>
          <p>
            My journey as an entrepreneur and freelancer while living in Austin,
            Tx has led me to develop web development skills and acquire
            experience with graphic design, video production, marketing and
            advertising.
          </p>
          <p>
            I am a self taught webdesigner currently focused on designing with
            the React JS library. In my opinion, being able to use JSX as well
            as React’s component based approach makes readability of code
            quicker, simplier, and more robust. Being able to reuse components
            as well as modify the props passed into them allows the ability to
            create complex and interactive UI. I also have a lot of experience
            in Adobe Suite and a strong focus in Adobe After Effects and Adobe
            Illustrator/Photoshop
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
