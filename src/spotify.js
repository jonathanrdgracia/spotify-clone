export const authEndPoint = 'https://accounts.spotify.com/authorize'

const redirectURI = 'http://localhost:3000/'
const clientID = '2158756e36244a68bde7398385437c71'

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];
export const getTokenFromUrl=()=>{ 
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial,item)=>{
            var parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        },{})
}




export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;