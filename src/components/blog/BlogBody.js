// Init
import React, { useState, useEffect } from 'react';
import BlogBodyimg from '../../assets/blogimg5.svg';
import LatestArticle from './LatestArticle';
import YouMayLike from './YouMayLike';
import api from '../../api';
import { Store, UpdateStore } from '../../StoreContext';
import { useTranslation, Trans } from 'react-i18next';

export default function BlogBody() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  // init
  const updateStore = UpdateStore();
  const { blogs } = Store();
  useEffect(() => {
    // get blogs
    getBlogs();
  }, []);
  let getBlogs = async () => {
    setLoading(true);

    let res = await api('get', '/blogs');
    if (res) {
      updateStore({ blogs: res?.data });
    }
    setLoading(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  console.log('loading', loading);

  return (
    <>
      {loading ? (
        'Chargement en cours...'
      ) : (
        <>
          <div className="BlogBodycontainer">
            <img src={BlogBodyimg} className="BlogbodyImage" alt="blogbody" />
            <div className="BlogtextonImg">
              <h1 className="BlogtextimgH1">{t('NOTRE BLOG')}</h1>
            </div>
          </div>
        </>
      )}

      <LatestArticle blogs={blogs} loading={loading} setLoading={setLoading} />
      <YouMayLike blogs={blogs} loading={loading} setLoading={setLoading} />
    </>
  );
}
