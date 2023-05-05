import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';
import styled from 'styled-components';
import config from '../../utils/config';

const Wrapper = styled.section`
  svg {
    height: 38px !important;
    width: 38px !important;
  }
`;

const Share = ({ post, mainImage }) => {
  if (!post) return null;
  const { title, slug } = post;
  const blogUrl = `${config.siteUrl}/posts/${slug}`;
  return (
    <Wrapper className="has-text-centered mt-4">
      <TwitterShareButton
        className="mx-1"
        url={blogUrl}
        title={title}
        hashtags={['zeiq']}
        media={mainImage}
      >
        <TwitterIcon />
      </TwitterShareButton>
      <WhatsappShareButton
        className="mx-1"
        title={title}
        url={blogUrl}
        separator={'  '}
        media={mainImage}
      >
        <WhatsappIcon />
      </WhatsappShareButton>
      <FacebookShareButton
        className="mx-1"
        url={blogUrl}
        quote={title}
        hashtag="#zeiq"
        media={mainImage}
      >
        <FacebookIcon />
      </FacebookShareButton>
      <PinterestShareButton
        className="mx-1"
        url={blogUrl}
        description={title}
        hashtag="#zeiq"
        media={mainImage}
      >
        <PinterestIcon />
      </PinterestShareButton>
      <LinkedinShareButton
        className="mx-1"
        url={blogUrl}
        title={title}
        summary={title}
        source={blogUrl}
        media={mainImage}
      >
        <LinkedinIcon />
      </LinkedinShareButton>
    </Wrapper>
  );
};

export default Share;
