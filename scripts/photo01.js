document.addEventListener("DOMContentLoaded", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  const expandedView = document.getElementById("expanded-view");
  const expandedImg = document.getElementById("expanded-img");
  const expandedTitle = document.getElementById("expanded-title");
  const closeBtn = document.querySelector(".close");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  const photos = [
    {
      images: ["images/battlo_2.jpg", "images/battlo_3.jpg", "images/battlo.jpg", "images/battlo_4.jpg"],
    },
    {
      images: ["images/mila_1.jpg", "images/mila_2.jpg", "images/mila_3.jpg", "images/mila_4.jpg"],
    },
    {
      images: ["images/güell_1.jpg", "images/güell_2.jpg", "images/güell_3.jpg", "images/güell_4.jpg"],
    },
    {
      images: ["images/sf_3.jpg", "images/sf_5.jpg", "images/sf_2.jpg", "images/sf_1.jpg"],
    },
    {
      images: ["images/festival_1.jpg", "images/festival_2.jpg"],
    },
    {
      images: ["images/street_1.jpg", "images/street_2.jpg", "images/street_3.jpg"],
    }
  ];

  let currentSet = 0;
  let currentPhotoIndex = 0;

  function updateExpandedView() {
    expandedImg.src = photos[currentSet].images[currentPhotoIndex];
    expandedTitle.textContent = photos[currentSet].title;
  }

  gridItems.forEach(item => {
    const moreBtn = item.querySelector(".more");
    moreBtn.addEventListener("click", () => {
      currentSet = parseInt(item.dataset.index);
      currentPhotoIndex = 0;
      updateExpandedView();
      expandedView.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    expandedView.classList.add("hidden");
  });

  leftArrow.addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + 4) % 4;
    updateExpandedView();
  });

  rightArrow.addEventListener("click", () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % 4;
    updateExpandedView();
  });
});
