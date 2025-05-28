// 6.Create a function that takes an object YouTube video and returns true if the video has more than 1000 views.

// const youtubeVideos={
//     title:"js in one shot",
//     channel:"Alpha Intern",
//     views:1000
// }
// function getVideosViews(video){
//     // console.log(youtubeVideos.views)
//     return youtubeVideos.views
// }

// // getVideosViews(youtubeVideos)
// console.log(getVideosViews(youtubeVideos))

const youtubeVideos = {
    title: "js in one shot",
    channel: "Alpha Intern",
    views: 1000
};

function getVideosViews(video) {
    return video.views > 1000;
}

console.log(getVideosViews(youtubeVideos));  // false
