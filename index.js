const overviewSection = document.getElementById("salinas-overview");
// TODO: Set the URI to the cover image
const overviewImageURI = "/public/images/salinas-mountains.jpg";

overviewSection.style.background = `  
linear-gradient(var(--dnest-opaque-magenta), transparent),
  center no-repeat url(${overviewImageURI})
`;

const interviewVideo = document.getElementById("interview-video");
// TODO: Set the URI to the video
const videoURI = "/public/videos/sample-video.mp4";

const source = document.createElement("source");
source.src = videoURI;

interviewVideo.appendChild(source);
