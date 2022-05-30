import React from 'react';
import './movie.css'

function Movie(props) {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-8 col-md-12 col-sm-12">
            <div className="video-container">
              <video controls>
                <source src="https://viettrung258.work/film" />
                Video is not supported!
              </video>
            </div>

            <div className="movie-details">
              <h1>Stranger Things Season 4</h1>
              <div className="movie-info">
                <div className="rating">
                  <span className="star">
                    <i className='bx bxs-star'></i>
                  </span>
                  <span className="score">6.9</span>
                </div>
                <div className="release">
                  <span className="calendar">
                    <i className='bx bxs-calendar'></i>
                  </span>
                  <span className="year">2022</span>
                </div>
              </div>
              <div className="movie-genre">
                <a href='=' className="genre">Drama</a>
                <a href='-' className="genre">Sex</a>
              </div>
              <div className="movie-description">
                <p>
                  In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads
                  to the disappearance of a child, which begins to tear at the fabric of an otherwise peaceful community.
                  Dark government agencies and seemingly malevolent supernatural forces converge on the town, while a few
                  of the locals begin to understand that there's more going on than meets the eye.
                </p>
              </div>
            </div>

            <h2>Episodes</h2>
            <div className="episodes-list">
              <a href="2" className="episode active">1</a>
              <a href="3" className="episode">2</a>
              <a href="4" className="episode">3</a>
            </div>

            <div className="comments-section">
              <h2>Comments</h2>

              {/* <!-- <div className="comment-alert">
              <div className="avatar">
                <img src="https://filmhot.live/default-avatar.png" alt="">
              </div>
              <p>You need to <a>Sign in</a> to comment !</p>
            </div> --> */}

              <form className="comment-box">
                <div className="avatar">
                  <img src="https://filmhot.live/default-avatar.png" alt="" />
                </div>
                <input type="text" placeholder="Comment what yout think..." />
                <button>
                  <i className='bx bxs-send'></i>
                </button>
              </form>

              {/* <h4 style="text-align:center">No one has commented </h4>  */}

              <div className="comment-item">
                <img
                  src="https://images.weserv.nl/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FAOh14GhUigrReywgtRTgeW77KiP1up9ro5ruHpIla3bmnQ%3Ds96-c&w=50&h=50&fit=outside"
                  alt="" />
                <div className="info">
                  <div className="info-name">
                    <span className="name">Én Én</span>
                    <span className="time">Just now</span>
                  </div>
                  <div className="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, esse tempore deleniti dolore
                    laborum obcaecati assumenda quae eaque iusto quod quo quasi sed. Dicta itaque numquam libero aperiam
                    tempora beatae.
                    Doloribus veritatis ipsam itaque nesciunt ea inventore provident exercitationem consectetur totam.
                    Natus, neque perspiciatis. Sequi asperiores perferendis possimus mollitia! Numquam doloremque ipsa ea
                    aliquid dolorum nulla excepturi quod totam illo.
                  </div>
                </div>
              </div>
              <div className="comment-item">
                <img
                  src="https://images.weserv.nl/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FAOh14GhUigrReywgtRTgeW77KiP1up9ro5ruHpIla3bmnQ%3Ds96-c&w=50&h=50&fit=outside"
                  alt="" />
                <div className="info">
                  <div className="info-name">
                    <span className="name">Én Én</span>
                    <span className="time">5 seconds ago</span>
                  </div>
                  <div className="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, esse tempore deleniti dolore
                    laborum obcaecati assumenda quae eaque iusto quod quo quasi sed. Dicta itaque numquam libero aperiam
                    tempora beatae.
                    Doloribus veritatis ipsam itaque nesciunt ea inventore provident exercitationem consectetur totam.
                    Natus, neque perspiciatis. Sequi asperiores perferendis possimus mollitia! Numquam doloremque ipsa ea
                    aliquid dolorum nulla excepturi quod totam illo.
                  </div>
                </div>
              </div>
              <div className="comment-item">
                <img
                  src="https://images.weserv.nl/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FAOh14GhUigrReywgtRTgeW77KiP1up9ro5ruHpIla3bmnQ%3Ds96-c&w=50&h=50&fit=outside"
                  alt="" />
                <div className="info">
                  <div className="info-name">
                    <span className="name">Én Én</span>
                    <span className="time">Just now</span>
                  </div>
                  <div className="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, esse tempore deleniti dolore
                    laborum obcaecati assumenda quae eaque iusto quod quo quasi sed. Dicta itaque numquam libero aperiam
                    tempora beatae.
                    Doloribus veritatis ipsam itaque nesciunt ea inventore provident exercitationem consectetur totam.
                    Natus, neque perspiciatis. Sequi asperiores perferendis possimus mollitia! Numquam doloremque ipsa ea
                    aliquid dolorum nulla excepturi quod totam illo.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-md-12 col-sm-12">
            <div className="similar-container">
              <div className="header">
                <h2>Similar to this</h2>
              </div>
              <div className="similar-list">
                <div className="video">
                  <div className="image"><img
                    src="https://images.weserv.nl/?url=https%3A%2F%2Fimg.netpop.app%2Fcover%2F20211020%2F1634697128135_e992fb03466c9266b911bddd1ed03565uiinjmSkka6JOrk4FsZmrjlNM26.jpg&w=&h=100&fit=outside"
                    alt="" /></div>
                  <div className="info">
                    <div className="name">Krypton Season 2</div>
                    <div className="rating">
                      <span className="star">
                        <i className='bx bxs-star'></i>
                      </span>
                      <span className="score">6.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;