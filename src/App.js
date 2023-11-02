
import './App.css';

function App() {
  return (
    <div className="App">
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>Social Media</title>
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="style.css" />
  <nav>
    <div className="nav-left">
      <a href="Index.html">
        <img src="https://i.postimg.cc/Y9nZymQq/logo2.png" className="logo" alt="logo2" />
      </a>
      <ul>
        <li>
          <img src="https://i.postimg.cc/Fs3m1Djy/notification.png" alt="notification" />
        </li>
        <li>
          <img src="https://i.postimg.cc/YqGKZ8nc/inbox.png" alt="inbox" />
        </li>
        <li>
          <img src="https://i.postimg.cc/xCzpgFjg/video.png" alt="video"/>
        </li>
      </ul>
    </div>
    <div className="nav-right">
      <div className="search-box">
        <img src="https://i.postimg.cc/SKtHgM6Q/search.png" alt="search"/>
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-user-icon online" onclick="settingsMenuToggle()">
        <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pic"/>
      </div>
    </div>
    {/*--------------Settings Menu"---------------------*/}
    <div className="settings-menu">
      <div id="dark-btn">
        <span />
      </div>
      <div className="settings-menu-inner">
        <div className="user-profile">
          <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="profile-pic"/>
          <div>
            <p>John Nicholson</p>
            <a href="profile.html">See your profile</a>
          </div>
        </div>
        <hr />
        <div className="user-profile">
          <img src="https://i.postimg.cc/hv3nx52s/feedback.png" alt="feedback"/>
          <div>
            <p>Give Feedback</p>
            <a href="#">Help us to improve the new design</a>
          </div>
        </div>
        <hr />
        <div className="settings-links">
          <img
            src="https://i.postimg.cc/QCcPNYRV/setting.png"
            className="settings-icon" alt="setting"
          />
          <a href="#">
            Settings &amp; Privacy{" "}
            <img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" alt="arrow"/>
          </a>
        </div>
        <div className="settings-links">
          <img
            src="https://i.postimg.cc/C5tydfK6/help.png"
            className="settings-icon" alt="help"
          />
          <a href="#">
            Help &amp; Support
            <img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" alt="arrow"/>
          </a>
        </div>
        <div className="settings-links">
          <img
            src="https://i.postimg.cc/5yt1XVSj/display.png"
            className="settings-icon" alt="display"
          />
          <a href="#">
            Display &amp; Accessibility{" "}
            <img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" alt="arrow"/>
          </a>
        </div>
        <div className="settings-links">
          <img
            src="https://i.postimg.cc/PJC9GrMb/logout.png"
            className="settings-icon" alt="logout"
          />
          <a href="#">
            Logout{" "}
            <img src="https://i.postimg.cc/RF1dBMWr/arrow.png" width="10px" alt="arrow"/>
          </a>
        </div>
      </div>
    </div>
  </nav>
  <div className="container">
    {/*--------------Left Sidebar---------------------*/}
    <div className="left-sidebar">
      <div className="imp-links">
        <a href="#">
          <img src="https://i.postimg.cc/RCj4MjnC/news.png" alt="news"/>
          Latest News
        </a>
        <a href="#">
          <img src="https://i.postimg.cc/MpBwMtV0/friends.png" alt="friends"/>
          Friendss
        </a>
        <a href="#">
          <img src="https://i.postimg.cc/44FRWj1b/group.png" alt="group"/>
          Group
        </a>
        <a href="#">
          <img src="https://i.postimg.cc/0jh39RtT/marketplace.png" alt="marketplace"/>
          Marketplace
        </a>
        <a href="#">
          <img src="https://i.postimg.cc/VsXHCTVk/watch.png" alt="watch"/>
          Watch
        </a>
        <a href="#">See More</a>
      </div>
      <div className="shortcut-link">
        <p>Your Shortcuts</p>
        <a href="#">
          <img src="https://i.postimg.cc/3JHVf7vG/shortcut-1.png"alt="sc1" />
          Web Developers
        </a>
        <a href="#">
          <img src="https://i.postimg.cc/rFCbvb1P/shortcut-2.png" alt="sc2"/>
          Web Design course
        </a>
        <a href="#">
          <img src="https://i.postimg.cc/0yk3xfZ2/shortcut-3.png" alt="sc3"/>
          Full Strack Development
        </a>
        <a href="#">
          <img src="https://i.postimg.cc/Z5wQqdDP/shortcut-4.png" alt="sc4"/>
          Website Experts
        </a>
      </div>
    </div>
    {/*--------------Main Sidebar---------------------*/}
    <div className="main-content">
      <div className="story-gallery">
        <div className="story story1">
          <img src="https://i.postimg.cc/TPh453Zz/upload.png" alt="upload"/>
          <p>Post Story</p>
        </div>
        <div className="story story2">
          <img src="https://i.postimg.cc/XNPtfdVs/member-1.png" alt="mem1"/>
          <p>Alison</p>
        </div>
        <div className="story story3">
          <img src="https://i.postimg.cc/4NhqByys/member-2.png" alt="mem2"/>
          <p>Jackson</p>
        </div>
        <div className="story story4">
          <img src="https://i.postimg.cc/FH5qqvkc/member-3.png" alt="mem3"/>
          <p>Samona</p>
        </div>
        <div className="story story5">
          <img src="https://i.postimg.cc/Sx65bPcP/member-4.png" alt="mem4"/>
          <p>John Doe</p>
        </div>
      </div>
      <div className="write-post-container">
        <div className="user-profile">
          <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pp"/>
          <div>
            <p>John Nicholson</p>
            <small>
              Public <i className="fas fa-caret-down" />
            </small>
          </div>
        </div>
        <div className="post-input-container">
          <textarea
            rows={3}
            placeholder="What's on your mind, John?"
            defaultValue={""}
          />
          <div className="add-post-links">
            <a href="#">
              <img src="https://i.postimg.cc/QMD2BDXs/live-video.png" alt="lv"/>
              Live Video
            </a>
            <a href="#">
              <img src="https://i.postimg.cc/6pKKZn0D/photo.png" alt="photo"/>
              Photo/Video
            </a>
            <a href="#">
              <img src="https://i.postimg.cc/Pf6TBCdD/feeling.png" alt="feeling"/>
              Feling/Activity
            </a>
          </div>
        </div>
      </div>
      <div className="post-container">
        <dic className="post-row">
          <div className="user-profile">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pp" />
            <div>
              <p>John Nicholson</p>
              <span>June 24 2021, 13:40 pm</span>
            </div>
          </div>
          <a href="#">
            <i className="fas fa-ellipsis-v" />
          </a>
        </dic>
        <p className="post-text">
          Subscribe <span>@Vkive Tutorials</span> Youtube Channel to watch more
          videos on website development and UI desings.{" "}
          <a href="#">#VkiveTutorials</a> <a href="#">#YoutubeChannel</a>
        </p>
        <img
          src="https://i.postimg.cc/9fjhGTY6/feed-image-1.png"
          className="post-img" alt="feed-img"
        />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img src="https://i.postimg.cc/pLKNXrMq/like-blue.png" alt="like"/>
              120
            </div>
            <div>
              <img src="https://i.postimg.cc/rmjMymWv/comments.png" alt="comment"/>
              45
            </div>
            <div>
              <img src="https://i.postimg.cc/T2bBchpG/share.png" alt="share"/>
              20
            </div>
          </div>
          <div className="post-porfile-icon">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pp"/>
            <i className="fas fa-caret-down" />
          </div>
        </div>
      </div>
      <div className="post-container">
        <dic className="post-row">
          <div className="user-profile">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pp"/>
            <div>
              <p>John Nicholson</p>
              <span>June 24 2021, 13:40 pm</span>
            </div>
          </div>
          <a href="#">
            <i className="fas fa-ellipsis-v" />
          </a>
        </dic>
        <p className="post-text">
          Like and share this video with friends, tag
          <span>@Vkive Tutorials</span>facebook page on your post. Ask your
          dobuts in the comments. <a href="#">#VkiveTutorials</a>{" "}
          <a href="#">#YoutubeChannel</a>
        </p>
        <img
          src="https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png"
          className="post-img"alt="img2"
        />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img src="https://i.postimg.cc/pLKNXrMq/like-blue.png" alt="like"/>
              120
            </div>
            <div>
              <img src="https://i.postimg.cc/rmjMymWv/comments.png" alt="comment"/>
              45
            </div>
            <div>
              <img src="https://i.postimg.cc/T2bBchpG/share.png" alt="share"/>
              20
            </div>
          </div>
          <div className="post-porfile-icon">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pp"/>
            <i className="fas fa-caret-down" />
          </div>
        </div>
      </div>
      <div className="post-container">
        <dic className="post-row">
          <div className="user-profile">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pp"/>
            <div>
              <p>John Nicholson</p>
              <span>June 24 2021, 13:40 pm</span>
            </div>
          </div>
          <a href="#">
            <i className="fas fa-ellipsis-v" />
          </a>
        </dic>
        <p className="post-text">
          Like and share this video with friends, tag
          <span>@Vkive Tutorials</span>facebook page on your post. Ask your
          dobuts in the comments. <a href="#">#VkiveTutorials</a>{" "}
          <a href="#">#YoutubeChannel</a>
        </p>
        <img
          src="https://i.postimg.cc/tJ7QXz9x/feed-image-3.png"
          className="post-img"alt="img3"
        />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img src="https://i.postimg.cc/pLKNXrMq/like-blue.png" alt="like"/>
              120
            </div>
            <div>
              <img src="https://i.postimg.cc/rmjMymWv/comments.png" alt="comment"/>
              45
            </div>
            <div>
              <img src="https://i.postimg.cc/T2bBchpG/share.png" alt="share"/>
              20
            </div>
          </div>
          <div className="post-porfile-icon">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pp"/>
            <i className="fas fa-caret-down" />
          </div>
        </div>
      </div>
      <div className="post-container">
        <dic className="post-row">
          <div className="user-profile">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pp"/>
            <div>
              <p>John Nicholson</p>
              <span>June 24 2021, 13:40 pm</span>
            </div>
          </div>
          <a href="#">
            <i className="fas fa-ellipsis-v" />
          </a>
        </dic>
        <p className="post-text">
          Like and share this video with friends, tag
          <span>@Vkive Tutorials</span>facebook page on your post. Ask your
          dobuts in the comments. <a href="#">#VkiveTutorials</a>{" "}
          <a href="#">#YoutubeChannel</a>
        </p>
        <img
          src="https://i.postimg.cc/hjDRYBwM/feed-image-4.png"
          className="post-img" alt="img4"
        />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img src="https://i.postimg.cc/pLKNXrMq/like-blue.png" alt="like"/>
              120
            </div>
            <div>
              <img src="https://i.postimg.cc/rmjMymWv/comments.png" alt="commment"/>
              45
            </div>
            <div>
              <img src="https://i.postimg.cc/T2bBchpG/share.png" alt="share" />
              20
            </div>
          </div>
          <div className="post-porfile-icon">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pp"/>
            <i className="fas fa-caret-down" />
          </div>
        </div>
      </div>
      <div className="post-container">
        <dic className="post-row">
          <div className="user-profile">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pp"/>
            <div>
              <p>John Nicholson</p>
              <span>June 24 2021, 13:40 pm</span>
            </div>
          </div>
          <a href="#">
            <i className="fas fa-ellipsis-v" />
          </a>
        </dic>
        <p className="post-text">
          Like and share this video with friends, tag
          <span>@Vkive Tutorials</span>facebook page on your post. Ask your
          dobuts in the comments. <a href="#">#VkiveTutorials</a>{" "}
          <a href="#">#YoutubeChannel</a>
        </p>
        <img
          src="https://i.postimg.cc/ZRwztQzm/feed-image-5.png"
          className="post-img"alt="img5"
        />
        <div className="post-row">
          <div className="activity-icons">
            <div>
              <img src="https://i.postimg.cc/pLKNXrMq/like-blue.png" alt="like"/>
              120
            </div>
            <div>
              <img src="https://i.postimg.cc/rmjMymWv/comments.png" alt="comment"/>
              45
            </div>
            <div>
              <img src="https://i.postimg.cc/T2bBchpG/share.png" alt="share"/>
              20
            </div>
          </div>
          <div className="post-porfile-icon">
            <img src="https://i.postimg.cc/cHg22LhR/profile-pic.png" alt="pp"/>
            <i className="fas fa-caret-down" />
          </div>
        </div>
      </div>
      <button type="button" className="load-more-btn">
        Load More
      </button>
    </div>
    {/*--------------Right Sidebar---------------------*/}
    <div className="right-sidebar">
      <div className="sidebar-title">
        <h4>Events</h4>
        <a href="#">See All</a>
      </div>
      <div className="event">
        <div className="left-event">
          <h3>18</h3>
          <span>March</span>
        </div>
        <div className="right-event">
          <h4>Social Media</h4>
          <p>
            <i className="fas fa-map-marker-alt" /> Willson Tech Park
          </p>
          <a href="#">More Info</a>
        </div>
      </div>
      <div className="event">
        <div className="left-event">
          <h3>22</h3>
          <span>June</span>
        </div>
        <div className="right-event">
          <h4>Mobile Marketing</h4>
          <p>
            <i className="fas fa-map-marker-alt" /> Willson Tech Park
          </p>
          <a href="#">More Info</a>
        </div>
      </div>
      <div className="sidebar-title">
        <h4>Advertisement</h4>
        <a href="#">close</a>
      </div>
      <img
        src="https://i.postimg.cc/CLXYx9BL/advertisement.png"
        className="siderbar-ads" alt="ad"
      />
      <div className="sidebar-title">
        <h4>Conversation</h4>
        <a href="#">Hide Chat</a>
      </div>
      <div className="online-list">
        <div className="online">
          <img src="https://i.postimg.cc/XNPtfdVs/member-1.png" alt="mem1"/>
        </div>
        <p>Alison Mina</p>
      </div>
      <div className="online-list">
        <div className="online">
          <img src="https://i.postimg.cc/4NhqByys/member-2.png" alt="mem2"/>
        </div>
        <p>Jackson Aston</p>
      </div>
      <div className="online-list">
        <div className="online">
          <img src="https://i.postimg.cc/FH5qqvkc/member-3.png" alt="mem3" />
        </div>
        <p>Samona Rose</p>
      </div>
      <div className="online-list">
        <div className="online">
          <img src="https://i.postimg.cc/Sx65bPcP/member-4.png" alt="mem4"/>
        </div>
        <p>Mike Pérez</p>
      </div>
    </div>
  </div>
  <div className="footer">
    <p>Copyright 2022 - Vkive Tutorials</p>
  </div>


    </div>
  );
}

export default App;
