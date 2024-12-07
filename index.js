loadHeroSection();

const testimonialSectionArgs = {
  paragraphText: "I remember when I was a kid, going to Salinas was always a big deal. My mom would dress me and my brothers and we would head to the mall. I especially rememeber the back to school shopping we would do. There also used to be a carasouel in the center of the mall and I remember I always wanted to ride it.",
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
