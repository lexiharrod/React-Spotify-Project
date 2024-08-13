const clientId = '1397d0406b76446b927381f9297b2438'; // Insert client ID here.
const redirectUri = 'http://localhost:3000/'; // Have to add this to your accepted Spotify redirect URIs on the Spotify API.
let accessToken;

  const spotify = {
    //this function is going to be called at the beginning of all other spotify API functions
    getAccessToken() {
      if (accessToken) {
        console.log(accessToken);
        return accessToken;
      }
  
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
        console.log(accessToken);
        return accessToken;
      } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${encodeURIComponent(redirectUri)}`;
        window.location = accessUrl;
      }
    },

    search(term) {
      const accessToken = spotify.getAccessToken();
      return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (!jsonResponse.tracks) {
          return [];
        }
        return jsonResponse.tracks.items.map(track => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri
        }));
      });
    },
    
    savePlaylist(name, uriArray) {

    }
    
 
  }

  export default spotify;