// Init
import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar2 from '../../assets/AppLogo.svg';
import YouMayLike from './YouMayLike';
import { useParams } from 'react-router-dom';
import blogImg from '../../assets/blogimg.jpeg';
import { assetsUrl } from '../../config';
import moment from 'moment';
import { Store, UpdateStore } from '../../StoreContext';

export default function ArticleBody({ loading }) {
  const { id } = useParams();
  const { singlBlog, blogs } = Store();

  function htmlfile() {
    return {
      __html: `
      <div class="htmlmaindiv">
        <p class="htmlp1">${singlBlog?.blog_desc}</p>
        <p class="htmlp1">${singlBlog?.blog_content}</p>
        ${
          singlBlog?.yt_link
            ? `
          <iframe
            width="560"
            height="315"
            src=${singlBlog?.yt_link}
            title="YouTube video player"
            frameborder="0"
            allow=
            "accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture"
            allowfullscreen
          />
          `
            : ''
        }
      </div>
      `
    };
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      {loading ? (
        <h1>Chargement en cours...</h1>
      ) : (
        <div className="articleBodycontainer">
          <img
            // src={blogImg}
            src={assetsUrl + singlBlog?.blog_images}
            className="articleimg"
            alt="blog"
          />
          <div style={{ width: '85%' }}>
            <h1 className="h1article">{singlBlog?.blog_title}</h1>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={8} sm={9}>
              <div className="articleavatardiv">
                <img src={Avatar2} className="articleavatar" alt="avatar" />
                <div className="articlediv2">
                  <p className="articlep1">
                    {/* {singlBlog?.blog_author?.name.charAt(0).toUpperCase() +
                      singlBlog?.blog_author?.name.slice(1)} */}
                    Design Confections Ethiques
                  </p>
                  {/* <p className="articlep2">May 15・1 min read</p> */}
                  <p className="articlep2">
                    {moment(singlBlog?.createdAt).format('DD/MM/YYYY')}
                  </p>
                </div>
              </div>
              {/* <div className="articleavatardiv2">
                <div className="linediv"></div>
                <div>
                  <h3 className="a_h3">
                    Download {singlBlog?.blog_title} On PC/Laptop For Free
                    [WINDOWS 10, 8, 8.1, 7]. You Can Download{" "}
                    {singlBlog?.blog_title} In Windows 10.{" "}
                    {singlBlog?.blog_title} Download Free.
                  </h3>
                </div>
              </div> */}
            </Grid>
            {/* <Grid item xs={3} sm={3}>
              <div className="articleSocialicon">
                <img
                  src={TwitterIcon}
                  className="articlesocialicon"
                  alt="img"
                />
                <img
                  src={LinkedinIcon}
                  className="articlesocialicon"
                  alt="img"
                />
                <img src={FbIcon} className="articlesocialicon" alt="img" />
                <img
                  src={PintrestIcon}
                  className="articlesocialicon"
                  alt="img"
                />
                <img src={Dot} className="articlesocialicon" alt="img" />
              </div>
            </Grid> */}
          </Grid>
          <div dangerouslySetInnerHTML={htmlfile()} />
          <YouMayLike loading={loading} />
        </div>
      )}
      {/* <BlogFoote /> */}
    </>
  );
}
