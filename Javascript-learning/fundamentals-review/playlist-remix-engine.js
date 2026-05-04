const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

const flattenPlaylists = playlist => { 
  if (!Array.isArray(playlist)) { 
    return []; 
  } else { 
    const flatList = []; 
    for (let i=0; i<playlist.length; i++) { 
      for (let j=0; j<playlist[i].length; j++) { 
        const updateTrack = {...playlist[i][j]}; 
        updateTrack["source"] = [i, j]; 
        flatList.push(updateTrack); 
      } 
    } 
    return flatList; 
  }  
} 

const scoreTracks = arr => { 
  const newArr = arr.map(track => ({ 
    ...track, 
    score: track.votes * 10 - Math.abs(track.bpm - 120) 
  })); 
  return newArr; 
} 

const dedupeTracks = arr => { 
  const existedTracks = []; 
  const newArr = []; 
  for(let track of arr) { 
    if (!existedTracks.includes(track.trackId)) { 
      newArr.push(track); 
      existedTracks.push(track.trackId); 
    } 
  } 
  return newArr; 
} 

const enforceArtistQuota = (arr, maxPerArtist) => { 
  const keepTrackArtist = {};
  const newArr = [];
  if (maxPerArtist <= 0) return newArr;
  else {
    for (let track of arr) {
      if (!(track.artist in keepTrackArtist)) {
        keepTrackArtist[track.artist] = 1;
        newArr.push(track);
      } else {
        if (keepTrackArtist[track.artist] < maxPerArtist) {
          newArr.push(track);
          keepTrackArtist[track.artist]++;
        }
      }
    }
  }
  return newArr;
} 

function buildSchedule(arr) {
  const newArr = [];
  let slot = 0;
  for (let track of arr) {
    newArr.push({slot: ++slot, trackId: track.trackId})
  }
  return newArr;
}

function remixPlaylist(arr, maxPerArtist) {
  const flatten = flattenPlaylists(arr);
  const score = scoreTracks(flatten);
  const dedupe = dedupeTracks(score);
  const enforce = enforceArtistQuota(dedupe, maxPerArtist);
  return buildSchedule(enforce);
}

 