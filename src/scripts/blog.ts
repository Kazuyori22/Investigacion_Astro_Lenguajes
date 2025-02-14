interface Blog {
    id:string,

    title: string;
    content: string;
    date: string;
    image: string;
}

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id= params.get("id");
    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    const blog = blogs.find((b: Blog) => b.id === id);

    // Obtener elementos una sola vez
    const blogTitle = document.getElementById("blog-title");
    const blogImage = document.getElementById("blog-image");
    const blogContent = document.getElementById("blog-content");

    if (!blog) {
      if (blogContent) {
        const notFoundMessage = document.createElement("h2");
        notFoundMessage.textContent = "Blog no encontrado";
        blogContent.appendChild(notFoundMessage);
      }
      return;
    }

    if (blogTitle) blogTitle.textContent = blog.title;
    if (blogImage && blog.image)
      blogImage.setAttribute("src", `/assets/${blog.image}`);
    if (blogContent) {
      blogContent.innerHTML = ""; // Limpiar contenido previo
      const user = document.createElement("p");
      user.textContent = `Usuario: ${blog.user}`;
      const categiria = document.createElement("p");
      categiria.textContent = `Categoria: ${blog.category}`;
      const paragraph = document.createElement("p");
      paragraph.textContent = blog.content;
      blogContent.appendChild(user);
      blogContent.appendChild(categiria);
      blogContent.appendChild(paragraph);
      // Verificar si socialMedia contiene algo
      if (blog.socialMedia) {
        const socialMediaParagraph = document.createElement("p");
        socialMediaParagraph.textContent = `Redes sociales: ${blog.socialMedia}`; // Agregar contenido de redes sociales
        blogContent.appendChild(socialMediaParagraph); // Añadir debajo del contenido
      }
    }
});