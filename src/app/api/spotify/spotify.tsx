//fetch('api/spotify/) <-- route.ts in spotify ohohonohon
"use client"; // for react hooks


import React, { useState, useEffect, use } from "react";
import Image from "next/image"
import useSWR from "swr";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/app/components/shadcn-ui/item"
import { Caesar_Dressing } from "next/font/google";

type Spotify_Details = {
    progress: number;
    isPlaying: boolean;
    title: string;
    artist: string;
    album: string;
    albumImageUrl: string;
    songUrl: string;
};

//fetcher deets to put into useSWR
const swrFetcher = (url: string) => fetch(url).then((res) => res.json());

//helper fxn to turn the ms to minutes n seconds
const formatMilliseconds = (ms: number) => {
  const date = new Date(ms);
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

export function SpotifyWidget() {
  const { data: song, error } = useSWR<Spotify_Details>(
    '/api/spotify',
    swrFetcher,
    {
      refreshInterval: 3000, //polls every sec
    }
  );

    // song's progress displayed on card state
    const [displayProgress, setDisplayProgress] = useState(0);
    const [currSong, setCurrSong] = useState<Spotify_Details | null>(null);

    //sync hook || syncs everytime unpaused / a new song is served omg yippee
  useEffect(() => {

    if(song){
        const isAlreadyPlaying =
        currSong?.isPlaying === true &&
        song.isPlaying === true &&
        currSong?.title === song?.title;
        
        if(isAlreadyPlaying){} 
        else{
            setDisplayProgress(song.progress); 
            setCurrSong(song);
        }
    }
    
  }, [song, currSong]);

    //display timer hook
  useEffect(() => { 
    const timer = setInterval(() => {
        if(song?.isPlaying) {
            setDisplayProgress((prev) => prev + 1000);
        }
    }, 1000);
    return () => clearInterval(timer);
  }, [song?.isPlaying, currSong]);

  //no song or if there's an error statements
    if (error) return <div>Failed to load Spotify data.</div>;
    if (!song) return <div>Loading...</div>;

    return(
        <div className="flex w-full max-w-md flex-col gap-6 scale-120">
        <ItemGroup className="gap-4">
            <Item key={song.title} variant="outline" asChild role="listitem">
            {/* link to song */}
            <a href={song.songUrl} target="_blank" rel="noopener noreferrer">
                <ItemMedia variant="image">
                {/* smol album art */}
                <Image
                    src={song.albumImageUrl}
                    alt={song.album}
                    width={32}
                    height={32}
                    className="object-cover"
                />
                </ItemMedia>
                <ItemContent>
                <ItemTitle className="line-clamp-1">
                    {song.title} -{" "}
                    <span className="text-muted-foreground">{song.album}</span>
                </ItemTitle>
                <ItemDescription>{song.artist}</ItemDescription>
                </ItemContent>
                {song.isPlaying && (                
                    <ItemContent className="flex-none text-center">
                        <ItemDescription>{formatMilliseconds(displayProgress)}</ItemDescription>
                    </ItemContent>
                )}
            </a>
            </Item>
        </ItemGroup>
        </div>
    );
}
