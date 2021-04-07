import AboutScreen, { getContent } from '../src/components/screens/AboutScreen';
import websitePageHOC from '../src/components/wrapper/WebSitePage/hoc';

export async function getStaticProps() {
  const messages = await getContent();

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen);
