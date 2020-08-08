import React from 'react';
import { videoTagString, VideoTag } from 'react-video-tag';
import styled from 'styled-components';

videoTagString({
  src: '/assets/images/service/video.mp4',
  poster: '/assets/images/bg/bg-image-24.jpg',
});

const Container = styled.div`
  position: initial !important;
`;

const HomeVideoSlider = ({ data }) => {
  const SlideList = [
    {
      textPosition: 'text-left',
      category: '',
      title: data.slogan,
      description: '',
    },
  ];

  return (
    <>
      {SlideList.map((value, index) => (
        <div
          className="slide slide-style-2 slider-video-bg d-flex align-items-center justify-content-center"
          key={index}
          data-black-overlay="6"
        >
          <Container className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className={`inner ${value.textPosition}`}>
                  {value.category ? <span>{value.category}</span> : ''}
                  {value.title ? <h1 className="title">{value.title}</h1> : ''}
                  {value.description ? (
                    <p className="description">{value.description}</p>
                  ) : (
                    ''
                  )}
                </div>
                <div className="col-lg-4" />
              </div>
            </div>
            <div className="video-background">
              <VideoTag
                autoPlay={`${true}`}
                muted={`${true}`}
                playsInline={`${true}`}
                loop={`${true}`}
                src={`${'/assets/images/service/video.mp4'}`}
                poster={`${'/assets/images/bg/bg-image-24.jpg'}`}
              />
            </div>
          </Container>
        </div>
      ))}
    </>
  );
};

export default HomeVideoSlider;
