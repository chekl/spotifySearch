import { useEffect, useState } from 'react';

export default function useAuthParam() {
  const CLIENT_SECRET = '63d62680931144f3a00b19da7d6ee635';
  const CLIENT_ID = '15cc4419693b4d45a589f172089327b6';
  const [authParam, setAuthParam] = useState({});

  useEffect(() => {
    // access token
    let param = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:
        'grant_type=client_credentials&client_id=' +
        CLIENT_ID +
        '&client_secret=' +
        CLIENT_SECRET,
    };
    fetch('https://accounts.spotify.com/api/token', param)
      .then((result) => result.json())
      .then((data) =>
        setAuthParam({
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + data.access_token,
          },
        })
      );
  }, []);
  return authParam;
}
