const React = require('react');

const Loading = ({loading, children}) => {


  if (loading) {
    return (
    <section className="mod model-6">
      <div className="spinner">
      </div>
    </section>
    )   
  } else {
    return <div>{children}</div>
  }



};

export default Loading;