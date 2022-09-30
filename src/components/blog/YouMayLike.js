// Init
import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import blogImg from '../../assets/blogimg.jpeg';
import { assetsUrl } from '../../config';

import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { Store, UpdateStore } from '../../StoreContext';
import CircularProgress from '@mui/material/CircularProgress';

export default function YouMayLike({ blogs, loading, setLoading }) {
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  let newblog = [];

  const getblogs = () => {
    newblog = [...blogs];
    const shuffled = newblog?.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 4);

    return selected;
  };

  return (
    <div className="youMayLikecontainer">
      <p className={`${language == 'ar' && 'arabicyouMayLikeheading'} youMayLikeheading`}>
        {t('Lisez aussi :')}
      </p>
      {loading ? (
        <h1 style={{ textAlign: 'center', padding: '10%' }}>
          <CircularProgress color="secondary" />

          {/* {t('Chargement en cours')} */}
        </h1>
      ) : (
        <Grid container spacing={1}>
          {getblogs()?.map(item => (
            <>
              <Grid item xs={12} sm={6} lg={3}>
                <>
                  <div className="blogdiv1">
                    <Link
                      to={`/blog/${item._id}`}
                      params={{ testvalue: 'hello' }}
                      style={{ textDecoration: 'none', cursor: 'pointer' }}>
                      <img
                        // src={blogImg}
                        src={assetsUrl + item.blog_images}
                        className="blogdivimg"
                        alt="blogimage"
                      />
                    </Link>
                    <div className="blogdiv1text">
                      <h3 className="blogdiv1heading">
                        {item?.blog_title.length > 90
                          ? item?.blog_title.substring(0, 89) + '...'
                          : item?.blog_title}
                      </h3>
                      <p className="bloddiv1detail">
                        {item?.blog_desc.length > 147
                          ? item?.blog_desc.substring(0, 146) + '..'
                          : item?.blog_desc}
                      </p>
                      <p>
                        <Link
                          to={`/blog/${item._id}`}
                          params={{ testvalue: 'hello' }}
                          style={{
                            textDecoration: 'underLine',
                            color: 'black',
                            cursor: 'pointer'
                          }}>
                          {' '}
                          <span className="seemore" style={{ color: 'black' }}>
                            {' '}
                            {t('Lire l’article')}
                          </span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </>
              </Grid>
            </>
          ))}
        </Grid>
      )}
    </div>
  );
}
