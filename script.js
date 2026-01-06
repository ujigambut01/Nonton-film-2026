function playLive(videoId) {
  const player = document.getElementById("ytplayer");
  player.src = "https://www.youtube.com/embed/" + videoId + "?mute=1";
}
