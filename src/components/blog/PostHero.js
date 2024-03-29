import upperFirst from 'lodash/upperFirst';
import dayjs from 'dayjs';
import Share from './Share';

const PostHero = ({ post, mainImage, isShowSocialShare }) => (
  <section className="page-header pb-0">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <div className="mt-0 mt-lg-4">
            <p className="mb-3 font-weight-500">
              {upperFirst(post.category)}{' '}
              <span className="mx-2 d-inline-block">━</span>{' '}
              {dayjs(post.date).format('D MMM YYYY')}
            </p>
            <h2 className="text-white font-weight-500">
              {post.title}
              <span className="text-primary">.</span>
            </h2>
            {isShowSocialShare && <Share post={post} mainImage={mainImage} />}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PostHero;
