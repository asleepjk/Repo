document.addEventListener("DOMContentLoaded", () => {
    const flipbook = new St.PageFlip(document.getElementById("photobook"), {
      width: 600, // Anchura del libro en px
      height: 400, // Altura del libro en px
      size: "stretch", // Se adapta al contenedor
      minWidth: 300,
      maxWidth: 1200,
      minHeight: 200,
      maxHeight: 800,
      showCover: true,
      mobileScrollSupport: true,
    });
  
    flipbook.loadFromImages([
      "images/photo1.jpg",
      "images/photo2.jpg",
      "images/photo3.jpg",
      "images/photo4.jpg",
      "images/photo5.jpg",
    ]);
  });
  