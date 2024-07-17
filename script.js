var myAdTag =
  'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator=';

// Set video sources
var source1 = {
  publicId: 'snow_deer_short',
  info: {
    title: 'Deer in the Snow',
  },
};

var source2 = {
  publicId: 'dirt_bike',
  info: {
    title: 'Dirt Bike Race',
  },
};

var source3 = {
  publicId: 'snow_horses',
  info: {
    title: 'Running Horses',
  },
};

var source4 = {
  publicId: 'finish_line',
  info: {
    title: 'Crossing the Finish Line',
  },
};

var source5 = {
  publicId: 'rafting',
  info: {
    title: 'Wild Waves',
  },
};

window.addEventListener('load', (event) => {
  var player = cloudinary.videoPlayer('example-player', {
    cloud_name: 'demo',
    playlistWidget: {
      direction: 'horizontal',
      total: 4,
    },
    ads: {
      adTagUrl: myAdTag,
      adLabel: 'Tu video comenzará en',
      adsInPlaylist: 'first-video',
      locale: 'es',
    },
  });

  var playlistSources = [source3, source2, source1, source4, source5];
  var playlistOptions = {
    autoAdvance: true,
    repeat: true,
    presentUpcoming: 8,
  };

  player.playlist(playlistSources, playlistOptions);
});
