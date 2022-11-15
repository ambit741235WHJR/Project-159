AFRAME.registerComponent("comics-posters", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "superman-poster",
        url: "./assets/posters/superman-poster.jpg",
      },
      {
        id: "spiderman-poster",
        url: "./assets/posters/spiderman-poster.jpg",
      },
      {
        id: "captain-aero-poster",
        url: "./assets/posters/captain-aero-poster.jpg",
      },
      {
        id: "outer-space-poster",
        url: "./assets/posters/outer-space-poster.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);
      // Thumbnail Element
      const thumbNail = this.createPoster(item);
      borderEl.appendChild(thumbNail);
      // Title Text Element
      const titleEl = this.createTitle(position, item);
      borderEl.appendChild(titleEl);
      this.placesContainer.appendChild(borderEl);
    }
  },

  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 22,
      height: 40,
    });
    entityEl.setAttribute("material", {
      //color: "#0077CC",
      color: "#FFFFFF",
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("cursor-listener", {});
    return entityEl;
  },

  createPoster: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28,
    });
    entityEl.setAttribute("position", {
      x: 0,
      y: 5,
      z: 0.1
    });
    entityEl.setAttribute("material", {
      src: item.url,
    });
    return entityEl;
  },

  createTitle: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "monoid",
      align: "center",
      width: 60,
      color: "#E65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  }
  
});
