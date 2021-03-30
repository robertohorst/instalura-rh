import React from 'react';
import websitePageHOC from '../../src/components/wrapper/WebSitePage/hoc';

function LoginScreen() {
  return (
    <div>
      Login

      <a href="/">
        Voltar para a home com refresh
      </a>
    </div>
  );
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
