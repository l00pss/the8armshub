import React from 'react';
import DocItemFooter from '@theme-original/DocItem/Footer';
import ShareButton from '../../../components/ShareButton';

export default function DocItemFooterWrapper(props) {
  return (
    <>
      <DocItemFooter {...props} />
      <ShareButton />
    </>
  );
}
