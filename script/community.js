//like button
function clickLikeBtn(id) {
    console.log('clickLikeBtn', id);
    let like

    const btnLike = document.getElementById(`like-${id}`);
    const likeNumber = document.getElementById(`like-number-${id}`);
    const iconLike = btnLike.querySelector('i');

    if (like) {
        likeNumber.innerHTML = parseInt(likeNumber.innerHTML) - 1;
        iconLike.style.color = "white";
        like = false;
    } else {
        likeNumber.innerHTML = parseInt(likeNumber.innerHTML) + 1;
        iconLike.style.color = "red";
        like = true;
    }
}

//codes container
function populateData(data) {
    const projectContainer = document.getElementById("container_codes")
    projectContainer.innerHTML = null

    Object.keys(data).forEach((id) => {
        const codeItem = data[id];
        projectContainer.innerHTML = `
        <div class="container__code-editor">
            <div class="container__code-editor__project">
                <div class="container__code-editor__border" style="background-color: ${codeItem.borderColor}">
                    <div class="container__code-editor__text">
                        <div class="container__code-editor__mac-buttons">
                            <div class="container__code-editor__mac-buttons__red"></div>
                            <div class="container__code-editor__mac-buttons__yellow"></div>
                            <div class="container__code-editor__mac-buttons--green"></div>
                        </div>
                        <pre class="code-ident">
                            <code id="code" class="code language-${codeItem.language} hljs">${codeItem.code}</code>
                        </pre>
                    </div>
                </div>

                <div class="card-actions">
                    <div class="container__code-editor__project-details">
                        <h1>${codeItem.projectName}</h1>
                        <p>${codeItem.projectDescription}</p>
                    </div>
                    <div class="container__code-editor__project-details_metrics">
                        <div class="metrics-button">
                            <button class="btn-comment mobile">
                                <i class="fas fa-comment"></i>
                                <span>${codeItem.comments ? codeItem.comments.length : 0}</span>
                            </button>
                            <button class="btn-heart mobile" id="like-${id}" onclick="clickLikeBtn('${id}')">
                                <i class="fas fa-heart" id="heart"></i>
                                <span id="like-number-${id}">${codeItem.likes}</span>
                            </button>
                        </div>

                        <div>
                            <button class="btn-profile mobile">
                            <img src="${codeItem.userImage}" alt="${codeItem.userName}">
                            <p>${codeItem.userName}</p>
                        </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        ` + projectContainer.innerHTML

        if (codeItem.highlight) {
            hljs.highlightElement(projectContainer.querySelector("code"));
        }
    })

}

//search
const fieldMobile = document.getElementById("mobile-search-bar");
fieldMobile.addEventListener("keyup", () => search(fieldMobile.value));

const fieldIpad = document.getElementById("ipad-search-bar");
fieldIpad.addEventListener("keyup", () => search(fieldIpad.value));

const fieldDesktop = document.getElementById("desktop-search-bar");
fieldDesktop.addEventListener("keyup", () => search(fieldDesktop.value));

function search(value) {
    if (value === "") {
        fetch('https://alura-challenge-front-end-default-rtdb.firebaseio.com/codes.json')
            .then(response => response.json())
            .then(data => populateData(data));

    } else {
        fetch(`https://alura-challenge-front-end-default-rtdb.firebaseio.com/codes.json?orderBy="language"&equalTo="${value}"&print=pretty`)
            .then(response => response.json())
            .then(data => populateData(data));
    }
}

search("")