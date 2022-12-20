// Status.jsx if for provide error message for user

import { MESSAGES } from './constants';

function Status({ error }) {

  const message = MESSAGES[error] || MESSAGES.default;
  return (
    <div className="message">
      {error && message}
    </div>
  );
}

export default Status;
