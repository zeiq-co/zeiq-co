import styled from 'styled-components';

import Layout from './Layout';

const Container = styled.div``;

const LayoutMdx = ({ children }) => (
  <Layout>
    <section>
      <div>
        <Container>{children}</Container>
      </div>
    </section>
  </Layout>
);

export default LayoutMdx;
