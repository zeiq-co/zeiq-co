import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useStaticQuery, graphql } from 'gatsby';

const pageQuery = graphql`
  query ReviewsQuery {
    allReviewsYaml {
      edges {
        node {
          id
          personName
          personRole
          review
          image
        }
      }
    }
  }
`;

const Testimonial = () => {
  const data = useStaticQuery(pageQuery);
  const reviews = data.allReviewsYaml.edges;
  console.log('testimonials', reviews);

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Tabs>
            {reviews.map(({ node: item }) => (
              <TabPanel key={item.id}>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>{item.review}</p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>{item.personName} </span> - {item.personRole}
                    </h6>
                  </div>
                </div>
              </TabPanel>
            ))}

            <TabList className="testimonial-thumb-wrapper">
              {reviews.map(({ node: item }) => (
                <Tab key={item.id}>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={item.image} alt={item.personName} />
                    </div>
                  </div>
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
