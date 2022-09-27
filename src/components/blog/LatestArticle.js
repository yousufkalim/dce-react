// Init
import React, { useState, useEffect } from 'react';
// import moment from "moment";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import blogImg from '../../assets/blogimg.jpeg';
import { assetsUrl } from '../../config';
import { useTranslation, Trans } from 'react-i18next';

export default function LatestArticle({ blogs, loading, setLoading }) {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  let newdata = [{}];
  console.log('blogs', blogs);

  return (
    <div className="LatestArticlecontainer">
      <p
        className={`${
          language == 'ar' && 'arabicLatestArticleheading'
        } LatestArticleheading`}
      >
        {t('Derniers articles')}
      </p>
      {loading ? (
        <h1>{t('Chargement en cours')}</h1>
      ) : blogs ? (
        <>
          {' '}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Link
                to={{
                  pathname: `/blog/${blogs[0]?._id}`,
                  state: { message: 'hello, im a passed message!' }
                }}
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <div className="latestArticleLeft">
                  <img
                    // src={blogImg}
                    src={blogs[0] ? assetsUrl + blogs[0]?.blog_images : blogImg}
                    className="article1img"
                    alt="blogimage"
                  />
                  <div className="articledetail">
                    <h2 className="articleheading">
                      {blogs[0]?.blog_title.length > 100
                        ? blogs[0]?.blog_title.substring(0, 99) + '...'
                        : blogs[0]?.blog_title}
                    </h2>
                    <p className="textdescription1">
                      {blogs[0]?.blog_desc.length > 150
                        ? blogs[0]?.blog_desc.substring(0, 180) + '...'
                        : blogs[0]?.blog_desc}{' '}
                      <span className="seemore"> {t('Lire la suite')}</span>
                    </p>
                    <p className="articleBy">
                      {'Lire l’article'}
                      {/* By{" "}
                    <span style={{ color: "red" }}>
                      {" "}
                      {blogs[0]?.blog_author?.name.charAt(0).toUpperCase() +
                        blogs[0]?.blog_author?.name.slice(1)}
                    </span> */}
                    </p>
                  </div>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              {blogs.slice(1, 4).map((item) => (
                <>
                  <Link
                    to={`/blog/${item._id}`}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <div className="latestArticleRight">
                      {' '}
                      <img
                        // src={blogImg}
                        src={assetsUrl + item.blog_images}
                        className="article2img"
                        alt="blogimage"
                      />
                      <div className="articleText">
                        <h3>
                          {item.blog_title.length > 80
                            ? item.blog_title.substring(0, 79) + '...'
                            : item?.blog_title}
                        </h3>
                        <p className="textdescription">
                          {item?.blog_desc.length > 186
                            ? item?.blog_desc.substring(0, 186) + '..'
                            : item?.blog_desc}
                        </p>

                        <p className="author1">
                          {t('Lire l’article')}
                          {/* By<span style={{ color: "red" }}> Moin Khan</span> */}
                        </p>
                      </div>
                    </div>
                  </Link>
                </>
              ))}
            </Grid>
          </Grid>
        </>
      ) : (
        <h1>{t("Pas d'article disponible")}</h1>
      )}
    </div>
  );
}
