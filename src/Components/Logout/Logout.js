import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '170773599063-m1k574dgehenlh2p4if3b20pl9nffrg6.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;