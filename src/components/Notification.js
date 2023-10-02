import React from "react";

//Using props from parent destructuring showNotification.
const Notification = ({showNotification}) => {
  return (
    //Setting ternary operator inside a template operator activated when a word has been entered twice and
    //triggered by the function in the useEffect hook in the parent page. This notifcation closes after 2 minutes 
    //based off the helper function that we imported and passed in as a prop to this component.
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
