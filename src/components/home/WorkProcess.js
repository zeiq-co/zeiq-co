const animatedTextList = [
  { title: 'We analyze your business and search an idea', char: 'Z' },
  { title: 'We plan the strategy and tactics based on idea', char: 'E' },
  { title: 'Now we start working on developing that idea', char: 'I' },
  { title: 'And now your product is ready for release', char: 'Q' },
];

const WorkProcess = () => (
  <section className="section overflow-hidden">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-title text-center mb-4">
            <p className="mb-2 text-light">Here Is The</p>
            <h1 className="title text-white">Work Process</h1>
          </div>
        </div>
      </div>

      <div className="row">
        {animatedTextList.map((item) => (
          <div className="col-lg-3 col-sm-6" key={item.char}>
            <div className="work-process-item">
              <span className="process-text">{item.char}</span>
              <h2 className="process-title is-size-7 font-weight-light">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkProcess;
