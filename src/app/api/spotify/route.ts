import { NextResponse } from 'next/server';

//.env getting
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;




//id + secret for auth header
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const SPOTIFY_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;


//getting temp access tokens fxn using the env keys + endpoints

const getAccessToken = async() => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: `POST`,
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: refresh_token || '',
        }),
    });
    //spotify errors
    if (!response.ok) {
    const errorText = await response.text();
    console.error('Error from Spotify Token Endpoint:', errorText);
    throw new Error(`Spotify Token Error: ${errorText}`);
  }
    return response.json();
}


//serve both objects to frontend 1. currently playing (song title/album art/artist/etc) 
// + 2. switch usagi dj based on audio-analysis https://api.spotify.com/v1/audio-analysis/

//getting all the spotify params u want from currently_playing endpoint
export async function GET(){
    try{
        const {access_token} = await getAccessToken();

        const response = await fetch(SPOTIFY_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        //204 is nothin playin, 400's is badge errors
        if (response.status == 204 || response.status > 400){
            return NextResponse.json({ isPlaying: false});
            //just return json of false
        }
        const song = await response.json();
        const data = {
            progress: song.progress_ms,
            isPlaying: song.is_playing,
            title: song.item.name,
            artist: song.item.artists.map((_artist: any) => _artist.name).join(', '),
            album: song.item.album.name,
            albumImageUrl: song.item.album.images[0].url,
            songUrl: song.item.external_urls.spotify,
        };
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ isPlaying: false, error: "DIDN'T GET DA DATA"},
            {status: 500}
        );
    }
}
