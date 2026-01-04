const elem_gamelist = document.querySelector("#gamelist");

sites.forEach((value) => {

  if (value.draft === true) {
    return;
  }

  function categoryList() {
    let categoryTags = [];
    value.categories.forEach((item) => {
      categoryTags.push(`<span class="tag is-dark p-2 ml-1 mr-1" title="Jogadores suportados">${item}</span>`);
    });
    let categoryHTML = categoryTags.join("\n");
    return categoryHTML;
  }

  let template = `<div class="cell">
    <div class="card">
  <div class="card-image">
    <figure class="image is-16by9">
      <img
        src="${value.thumb || value.icon || "https://placehold.co/800x600"}"
        alt="Placeholder image"
      />
    </figure>
  </div>
  <div class="card-content">
     <div class="container mb-3 is-flex is-justify-content-flex-end">
        <span class="tag is-info p-2" title="Jogadores suportados">
          <span class="icon">
            <i class="fa-solid fa-user-group""></i>
          </span>
          <span>
            ${value.min_players || 0} - ${value.max_players || ""} jogadores
          </span>
        </span>
      </div>
    <div class="is-flex is-flex-wrap-wrap	is-8">
      <figure class="image is-48x48 mr-5">
          <img
            src="${value.icon || "./src/img/placeholders/controller.png"}"
            alt="Placeholder image"
          />
        </figure>
      <div class="is-flex is-align-items-center">
        <p class="title is-4">${value.name || "sem nome"}</p>
      </div>
    </div>
    <div class="container mb-3 mt-3 is-flex is-justify-content-flex-start">
        ${categoryList()}
    </div>
    <div class="content mt-5 mb-5">
      ${value.description || "Sem descrição"}
    </div>
    <div>
      
    </div>
    <div>
      <a href="${value.link || "#"}" target="_blank"><button class="button is-medium is-fullwidth">Jogar</button></a>
    </div>
  </div>
</div></div>`

  elem_gamelist.innerHTML += template;
})