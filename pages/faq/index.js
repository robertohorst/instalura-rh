import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';
import websitePageHOC from '../../src/components/wrapper/WebSitePage/hoc';

function FAQPage({ faqCategories }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FAQScreen faqCategories={faqCategories} />
  );
}

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});

FAQPage.propTypes = FAQScreen.propTypes;

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
    const response = await res.json();
    return response.data;
  });

  // Falar sobre tamanho da página aqui e tomar cuidado com recursos extras que vão pra página
  return {
    props: {
      faqCategories,
    },
  };
}
