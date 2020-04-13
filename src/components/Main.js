import PropTypes from 'prop-types'
import React from 'react'
import pic03 from '../images/pic03.jpg'
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
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h3 className="major">Why I use React with Gatsby</h3>
          <VisibilitySensor>
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
          <h3>Photography</h3>

          <PhotoGallery4 />

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h3 className="major">Videography</h3>
          <span className="image main"></span>
          <ul style={{ listStyle: `none`, display: `in-line` }}>
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
                <div>
                  <h2 className="scdown">Favorite Plugins</h2>
                  <ol>
                    <li>BootStrap</li>
                    <li>React Flip Toolkit</li>
                    <li>React-Spring</li>
                    <li>FancyBox(modal actions)</li>
                    <li>Isotope (filtering)</li>
                    <li>Lodash</li>
                  </ol>
                </div>
                <div>
                  <h2 className="scdown">Favorite Applications/ WebTools</h2>
                  <ol>
                    <li></li>
                    <h3 className="v">Wordpress</h3>
                    <ul>
                      <li>Cyberduck</li>
                      <li>Local by Flywheel</li>
                    </ul>
                    <h3 className="v">Other</h3>

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
                  {' '}
                  <div style={{ width: `100%`, margin: `auto` }}>
                    {' '}
                    <h2 className="major">current projects</h2>
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
                    </ul>
                  </div>
                </p>
                <h3> Currently Learning</h3>
                <ul>
                  <li>NodeJs</li>
                  <li>MongoDb</li>
                  <li>Redux/Redux Tools</li>
                </ul>
              </div>
            </div>
          </div>
          {close}
        </article>
        {/* <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article> */}
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
