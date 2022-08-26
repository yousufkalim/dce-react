import React, { useState, useEffect } from 'react';

import TailorAppBar from '../../components/TailorAppBar';
import Footer from '../../components/Footer';
import CustomButton from '../../components/CustomButton';
import CatalogListTile from '../../components/CatalogListTile';
import { useTranslation } from 'react-i18next';

import { useNavigate } from 'react-router-dom';

import { getUser } from '../../utils/Auth';
import Api from '../../api';

const TailorCatalogScreen = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [catalogs, setCatalogs] = useState([]);
  const user = getUser();

  useEffect(() => {
    getCatalogs();
  }, []);

  const getCatalogs = async () => {
    let response;
    try {
      response = await Api('post', `/catalogs/byQuery`, { tailor: user._id });
      const catalogsData = response.data.catalogs.splice(response.data.length);
      //const catalogsData = response.data.catalogs.splice;
      setCatalogs(catalogsData);
      setIsLoading(false);
    } catch (e) {
      console.trace(e);
    }
  };

  const navToCreateCatalog = () => {
    navigate('/create_catalog');
  };

  const navToViewCatalog = (id) => {
    navigate(`/view_catalog/${id}`);
  };

  const navToEditCatalog = (id) => {
    navigate(`/edit_catalog/${id}`);
  };

  return (
    <div className='container-page'>
      <TailorAppBar color='#ffffff' activeTab={1} />
      <div className='tailor_catalog_screen_row1'>
        <div className='tailor_catalog_screen_row1_column1' style={{ justifyContent: 'center', alignItems: 'center' }}>
          <p className='tailor_catalog_screen_row1_column1_text' style={{ paddingTop: '5%' }}>
            {t(
              'This catalog allows you to share your creations with D.C.E customers and thus highlight your talents and know-how.'
            )}
          </p>
          <CustomButton
            text={t('Add one of my creations')}
            type='submit'
            style={{
              background: '#fff',
              fontSize: '18px',
              color: '#CC8E9C',
              fontWeight: '600',
              boxShadow: 'none',
              marginTop: '0%',
              padding: '1% 2% 1% 2%',
            }}
            onClick={navToCreateCatalog}
          />
        </div>
      </div>
      <div className='tailor_catalog_screen_row2'>
        <p className='tailor_catalog_screen_row2_text'>{t('My Catalogue')}</p>
        <div className='tailor_catalog_screen_row2_list_container'>
          {catalogs.map((_) => (
            <CatalogListTile
              catalog={_}
              buttonText={t('Edit')}
              onClick={() => navToViewCatalog(_._id)}
              onClickButton={() => navToEditCatalog(_._id)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TailorCatalogScreen;
