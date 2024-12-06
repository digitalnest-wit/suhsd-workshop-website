loadHeroSection();

const testimonialSectionArgs = {
  paragraphText: "One of my favorite memories in Salinas is when...",
  videoURI: "/public/videos/sample-video.mp4",
};

loadTestimonialSection(testimonialSectionArgs);

function loadHeroSection() {
  const overviewSection = document.getElementById("salinas-overview");
  const overviewImageURI = "/public/images/salinas-mountains.jpg";
  
  overviewSection.style.background = `
  linear-gradient(var(--dnest-opaque-magenta), transparent),
    center no-repeat url(${overviewImageURI})
  `;
}

function loadTestimonialSection(args) {
  const { paragraphText, videoURI } = args;

  const interviewVideo = document.getElementById("interview-video");
  const source = document.createElement("source");

  source.src = videoURI;
  interviewVideo.appendChild(source);

  const testimonialParagraph = document.getElementById("testimonial");
  testimonialParagraph.textContent = paragraphText;
}
