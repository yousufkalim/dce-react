import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@mui/material';
import { toast } from 'react-toastify';
import Api from '../../api';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function ContactUs({ openContact, setOpenContact }) {
  const { t, i18n } = useTranslation();
  const { language } = i18n;

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  // Destructuring of UserForm State
  const { name, email, description } = formData;
  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    let r = await Api('get', '/contact');
    console.log('r', r.data);
  };

  // onChange Function for Input Field
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleModalClose = e => {
    setOpenContact(false);
  };
  // handleSubmit Function
  const handleSubmit = async e => {
    console.log('formData', formData);
    var mailFormat =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(mailFormat)) {
      return toast.error(`${t("s'il vous plaît entrez l'e-mail")}`);
    }
    if (name == '') {
      return toast.error(`${t('Veuillez entrer Prénom et nom')}`);
    }
    if (email == '') {
      return toast.error(`${t('Veuillez entrer votre e-mail')}`);
    }
    if (description == '') {
      return toast.error(`${t('Veuillez entrer Votre message')}`);
    }

    setLoading(true);
    let res = await Api('post', '/contact', {
      ...formData
    });
    if (res.status === 200) {
      toast.success(`${t('Soumis avec succès')}`);
      setFormData({ name: '', email: '', description: '' });
    }
    setLoading(false);
    setOpenContact(false);
  };

  return (
    <div className="">
      <Modal open={openContact} onClose={handleModalClose} aria-labelledby="Contact">
        <div className={'ModalDiv'}>
          <div className="headerDiv">
            {/* <div className="arrowDiv" onClick={handleModalClose}>
              <KeyboardArrowDownIcon className="arrowicon" />
            </div> */}
            <h1>Contactez-nous</h1>
          </div>
          <hr />
          <div className="contactInputDiv">
            <div className="inputDiv">
              <input
                type="text"
                name="name"
                value={name}
                placeholder={'Prénom et nom'}
                className="contact_input"
                onChange={onChange}
              />
            </div>
            <div className="inputDiv">
              <input
                type="text"
                name="email"
                value={email}
                placeholder={'E-mail'}
                className="contact_input"
                onChange={onChange}
              />
            </div>
            <div className="inputDiv">
              <textarea
                rows="8"
                cols="50"
                name="description"
                value={description}
                style={{ resize: 'none' }}
                type="text"
                placeholder={'Votre message'}
                className="contact_input"
                onChange={onChange}
              />
            </div>
            <div className="inputDiv">
              <button className="submitButton" onClick={handleSubmit}>
                {loading ? `${t('Chargement en cours')}` : `${t('Envoyer')}`}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ContactUs;
