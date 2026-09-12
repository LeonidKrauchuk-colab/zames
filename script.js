const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const gallery = document.querySelector("#gallery");
const status = document.querySelector("#status");

async function getMotorcycles(search = "motorcycle") {

  try {

    status.textContent = "Загрузка...";
    status.className = "";

    gallery.innerHTML = "";

    const url =
      "https://commons.wikimedia.org/w/api.php" +
      "?action=query" +
      "&generator=search" +
      "&gsrsearch=" + encodeURIComponent(search) +
      "&gsrnamespace=6" +
      "&gsrlimit=12" +
      "&prop=imageinfo" +
      "&iiprop=url|extmetadata" +
      "&iiurlwidth=500" +
      "&format=json" +
      "&origin=*";

    const response = await fetch(url);

    // Проверяем HTTP-ошибку
    if (!response.ok) {
      throw new Error(
        `Ошибка сервера: ${response.status}`
      );
    }

    const data = await response.json();

    // Проверяем наличие результатов
    if (!data.query || !data.query.pages) {
      throw new Error(
        "Фотографии не найдены"
      );
    }

    const pages = Object.values(data.query.pages);

    status.textContent =
      `Найдено фотографий: ${pages.length}`;

    pages.forEach(page => {

      const imageInfo = page.imageinfo?.[0];

      if (!imageInfo) {
        return;
      }

      const imageUrl =
        imageInfo.thumburl || imageInfo.url;

      const title =
        page.title.replace("File:", "");

      const card = document.createElement("div");

      card.className = "card";

      card.innerHTML = `
        <img
          src="${imageUrl}"
          alt="${title}"
          loading="lazy"
        >

        <div class="card-title">
          ${title}
        </div>
      `;

      gallery.appendChild(card);
    });

  } catch (error) {

    console.error(error);

    status.textContent =
      `❌ ${error.message}`;

    status.className = "error";
  }
}


// Кнопка поиска
searchButton.addEventListener("click", () => {

  const search =
    searchInput.value.trim();

  if (!search) {

    status.textContent =
      "Введите название мотоцикла";

    return;
  }

  getMotorcycles(search);
});


// Запускаем сразу
getMotorcycles();
