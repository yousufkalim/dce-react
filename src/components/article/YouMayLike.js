// Init
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import blogImg from '../../assets/blogimg.jpeg';
import { assetsUrl } from '../../config';
import { Store, UpdateStore } from '../../StoreContext';

export default function YouMayLike({ loading }) {
  let newblog = [];
  const { blogs } = Store();

  const getblogs = () => {
    newblog = [...blogs];
    const shuffled = newblog.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3);
    return selected;
  };
  console.log('blogs88', blogs);
  return (
    <div className="articleyouMayLikecontainer">
      {loading && !blogs ? (
        <h1>Chargement en cours...</h1>
      ) : (
        <Grid container spacing={1}>
          {/* <p className="youMayLikeheading">Lisez aussi</p> */}
          {getblogs()?.map((item, i) => (
            <>
              <Grid item xs={12} sm={4}>
                <>
                  <div className="blogdiv1">
                    <Link
                      to={`/blog/${item._id}`}
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <img
                        // src={blogImg}
                        src={assetsUrl + item.blog_images}
                        className="blogdivimg"
                        alt="img"
                      />
                    </Link>
                    <div className="blogdiv1text">
                      <h3 className="blogdiv1heading">
                        {item.blog_title.length > 90
                          ? item.blog_title.substring(0, 89) + '...'
                          : item.blog_title}
                      </h3>
                      <p className="bloddiv1detail">
                        {item?.blog_desc.length > 186
                          ? item?.blog_desc.substring(0, 186) + '..'
                          : item?.blog_desc}
                      </p>
                      <p>
                        <Link
                          to={`/blog/${item._id}`}
                          style={{ textDecoration: 'none', color: 'white' }}
                        >
                          {' '}
                          <span
                            className="seemore"
                            style={{ color: '#E7411B' }}
                          >
                            {' '}
                            Lire l’article
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
