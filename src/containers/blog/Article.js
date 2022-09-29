// Init
import React, { useState, useEffect } from 'react';
import ArticleBody from '../../components/article/ArticleBody';
import { useParams } from 'react-router-dom';
// import Blog1 from "../assets/img/1.jpeg";
import api from '../../api';
import { Store, UpdateStore } from '../../StoreContext';
import Footer from '../../components/Footer';

export default function Article() {
  const [activeStep, setActiveStep] = useState(1);
  const [step, setStep] = useState(0);
  const [statetextforscroll, setStatetextforscroll] = useState('');
  const [loading, setLoading] = useState(true);
  // init
  const updateStore = UpdateStore();
  const { singlBlog, blogs } = Store();
  const { id } = useParams();
  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToTop();
    getSingleBlog();
  }, [id]);
  useEffect(() => {
    // get blogs
    getBlogs();
  }, []);
  let getBlogs = async () => {
    let res = await api('get', '/blogs');
    if (res) {
      updateStore({ blogs: res?.data });
    }
  };
  let getSingleBlog = async () => {
    setLoading(true);
    let res = await api('get', `/blogs/${id}`);
    if (res) {
      updateStore({ singlBlog: res?.data });
    }
    setLoading(false);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: 'rgb(217 159 159)',
          minHeight: '100vh',
          overflowX: 'hidden',
          overflowY: 'hidden'
        }}
      >
        {console.log('article', singlBlog, blogs)}

        <ArticleBody loading={loading} />
        <Footer />
      </div>
    </>
  );
}
