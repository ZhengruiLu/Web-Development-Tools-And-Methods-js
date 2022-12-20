
// Loading.jsx is for loading page info

import loading from "./loading.jpg";
// Using defaults for props
// These props allow the component to be reusable and flexible
// the special "children" prop is filled with the contents of the element
function Loading({ className='loading', children='Loading...' }) {
  return (
    <div className="app">
    <div className="app-body">
    <div className={className}>
      <img src={loading} alt="logo" className="app-loading"/>
      {children}
    </div>
    </div>
    </div>
  );
}

export default Loading;
