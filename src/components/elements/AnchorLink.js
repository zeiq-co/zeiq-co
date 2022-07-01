const AnchorLink = ({ stackUrl, stackName }) => (
  <a
    className="line-link text-dark font-weight-500"
    href={stackUrl}
    target="_blank"
    rel="noreferrer"
  >
    Visit {stackName}
    <svg
      className="arrow-up-right"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </a>
);

export default AnchorLink;
