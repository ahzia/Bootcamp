async function createCoursePlaylist(playlistData) {
    return new Promise((resolve, reject) => {
        window.gapi.client.youtube.playlists
            .insert({
                part: ["snippet"],
                resource: {
                    snippet: {
                        title: playlistData.name,
                        description: playlistData.description,
                        privacyStatus: "public",
                        // thumbnails: playlistData.thumbnails
                    },
                },
            })
            // //thumbnail:
            // "thumbnails": {
            //     (key): {
            //       "url": string,
            //       "width": unsigned integer,
            //       "height": unsigned integer
            //     }
            //   }
            .then(
                function (response) {
                    //response.result has the parsed body
                    console.log("Response", response);
                    playlistID = response.result.id;
                    resolve(playlistID)
                });
    })
}
export { createCoursePlaylist }