const Robots = () => null;

export async function getServerSideProps({ req, res }) {
  res.setHeader('Content-Type', 'text/plain');
  res.write(`
User-agent: *
Allow: /
Sitemap: https://${req.headers.host}/sitemap.xml
`);
  res.end();

  return { props: {} };
}

export default Robots;
