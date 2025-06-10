document.addEventListener("DOMContentLoaded", () => {
  const highlightWrappers = document.querySelectorAll(".highlight-wrapper");
  const photos = document.querySelectorAll(".photo");

  highlightWrappers.forEach(wrapper => {
    wrapper.addEventListener("click", () => {

      highlightWrappers.forEach(w => w.classList.remove("active"));
      photos.forEach(photo => photo.classList.remove("active"));

      wrapper.classList.add("active");
      const photoId = wrapper.getAttribute("data-photo");
      if (photoId) {
        const targetPhoto = document.getElementById(photoId);
        if (targetPhoto) {
          targetPhoto.classList.add("active");
        }
      }
    });
  });
});
