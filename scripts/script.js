document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".menu-item");
  const modal = document.getElementById("universal-modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalInfo = document.getElementById("modal-info");
  const closeBtn = document.querySelector(".close-btn");
  const moreBtn = document.querySelector(".more-btn");
  const body = document.body;

  const modalContentMap = {
    about: {
      image: "images/about_me_photo.jpg",
      title: "About Me",
      info: "I am an architecture student from Turkey with interests in photography, history and game design. I became interested in studying architecture after visiting various countries and learning about their architectural influences.",
      page: ""
    },
    arch1: {
      image: "images/bim.jpg",
      title: "BIM - Building Information Modelling",
      info: "A detailed look how building information modelling could make the development of green cities easier.",
      page: "arch01.html"
    },
    arch2: {
      image: "images/battlo_3.jpg",
      title: "Antoni Gaudí's Architecture",
      info: "An exploration of Gaudí's innovative organic architecture.",
      page: ""
    },
    arch3: {
      image: "images/pavillion.jpg",
      title: "Parametric Pavilion",
      info: "Using Grasshopper and Rhino to design dynamic and adaptive structures.",
      page: ""
    },
    photo1: {
      image: "images/street_1.jpg",
      title: "Barcelona",
      info: "Urban textures and street photography from the heart of Catalonia.",
      page: "photo01.html"
    },
    photo2: {
      image: "images/amsterdam.jpg",
      title: "Amsterdam",
      info: "Capturing the unique charm of Amsterdam. Blend of old-world beauty and modern energy.",
      page: ""
    },
    photo3: {
      image: "images/venice.jpg",
      title: "Venice",
      info: "Exploring reflections, canals, and the fading glory of Venice.",
      page: ""
    },
    essay1: {
      image: "images/las_meninas.jpg",
      title: "Picasso and Las Meninas",
      info: "An essay about Picasso's obsession with Velázquez’s masterpiece Las Meninas.",
      page: ""
    },
    contact: {
      image: "images/contact.jpg",
      title: "Contact Me",
      info: "",
      page: ""
    }
  };

  let currentId = null;

  items.forEach(item => {
    item.addEventListener("click", () => {
      const id = item.dataset.id;
      const content = modalContentMap[id];

      if (content) {
        modal.style.display = "none";

        if (id === "contact") {
          modalImage.style.display = "none";
          modalTitle.textContent = "Contact Me";
          modalInfo.innerHTML = `
            <form id="contact-form" style="display:flex; flex-direction: column; gap: 0.7rem;">
              <input type="email" id="sender-email" placeholder="Your Email" required style="padding: 0.5rem; font-size: 1rem;">
              <textarea id="message-content" placeholder="Your Message" required rows="5" style="padding: 0.5rem; font-size: 1rem;"></textarea>
              <button type="submit" style="padding: 0.5rem; font-size: 1rem; cursor: pointer;">Send</button>
              <p id="form-status" style="color: red; font-size: 0.9rem; margin: 0;"></p>
            </form>

            <div class="social-icons">
              <a href="https://github.com/ozgun-aka" target="_blank" aria-label="LinkedIn">
                <img src="images/github.png" alt="Github Icon" />
              </a>
              <a href="" target="" aria-label="Github">
                <img src="images/linkedin.png" alt="Linkedin Icon" />
              </a>
              <a href="" target="" aria-label="Instagram">
                <img src="images/insta.png" alt="Instagram Icon" />
              </a>
            </div>
          `;
          moreBtn.style.display = "none";
        } else {
          modalImage.style.display = "block";
          modalImage.style.backgroundImage = `url(${content.image})`;
          modalTitle.textContent = content.title;
          modalInfo.textContent = content.info;
          moreBtn.style.display = "inline-block";
          moreBtn.dataset.modalId = id;
        }


        if (body.classList.contains("dark-mode")) {
          modal.classList.add("dark");
        } else {
          modal.classList.remove("dark");
        }

        modal.style.display = "block";
        currentId = id;
      }

      items.forEach(i => i.classList.remove("active", "clicked"));
      item.classList.add("active", "clicked");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  moreBtn.addEventListener("click", () => {
    const id = moreBtn.dataset.modalId;
    const content = modalContentMap[id];
    if (content && content.page) {
      window.location.href = content.page;
    }
  });

  document.addEventListener("submit", (e) => {
    if (e.target && e.target.id === "contact-form") {
      e.preventDefault();
      const email = document.getElementById("sender-email").value.trim();
      const message = document.getElementById("message-content").value.trim();
      const statusEl = document.getElementById("form-status");

      if (!email || !message) {
        statusEl.textContent = "Please fill in both fields.";
        return;
      }

      statusEl.style.color = "green";
      statusEl.textContent = "Message sent";

      e.target.reset();
    }
  });

  const themeToggle = document.getElementById('theme-toggle');
  const iconMoon = document.getElementById('icon-moon');
  const iconSun = document.getElementById('icon-sun');

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      iconMoon.style.display = 'none';
      iconSun.style.display = 'block';
      modal.classList.add("dark");
    } else {
      iconMoon.style.display = 'block';
      iconSun.style.display = 'none';
      modal.classList.remove("dark");
    }
  });

});
