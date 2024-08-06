const getSpotifyInfo = async (song) => {
    const songUri = song.uri;
    const songEndpoint = `spotify:track:${songUri}`;
    //const requestParams = `?api_key=${tmdbKey}`;
    //const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        const movieInfo = jsonResponse;
        return movieInfo;
      }
    } catch (error) {
      console.log(error);
    }
  };

const clientId = '1397d0406b76446b927381f9297b2438'; // Insert client ID here.
const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
const scopes = 'user-read-private user-read-email';

const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;

window.location.href = authUrl;
let accessToken;

  const spotify = {
    //this function is going to be called at the beginning of all other spotify API functions
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }
        else {
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessURL;
        }
    },

    savePlaylist(name, uriArray) {

    }
    
 
  }