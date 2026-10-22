document.querySelectorAll('.video-preview').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const player = document.createElement('iframe');
    const url = new URL('https://www.youtube-nocookie.com/embed/' + encodeURIComponent(link.dataset.videoId));
    url.searchParams.set('autoplay', '1');
    if (link.dataset.videoStart) url.searchParams.set('start', link.dataset.videoStart);
    player.src = url.href;
    player.title = link.dataset.videoTitle;
    player.allow = 'autoplay; fullscreen; picture-in-picture';
    player.allowFullscreen = true;
    link.replaceWith(player);
    player.focus();
  });
});
