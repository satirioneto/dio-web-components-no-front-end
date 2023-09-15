class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build()); // adiciona a build
        shadow.appendChild(this.styles()); // adiciona os styles
} // método constructor

    build() {
        const componentRoot = document.createElement("div");

        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous"); // Concatenação com condicional OR

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("tittle");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);
        
        
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.textContent = this.getAttribute("src");
        newsImage.src = this.getAttribute("src-img") || "assets/img-default.jpg";
        newsImage.alt = this.getAttribute("alt-img");

        cardRight.appendChild(newsImage);
        


        componentRoot.appendChild(cardLeft); 
        componentRoot.appendChild(cardRight); 
        /* 
        ==> Adiciona na componentRoot o 'child' que são o cardLeft e cardRight <==
        <div class="card">
            <div class="card__left"></div>
            <div class="card__right"></div>
        </div>
        */

        return componentRoot;
    } // construir a estrura de elementos

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            .card {
                min-height: 300px;
                min-width: 800px;
                width: 80%;
                box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-bottom: 20px;
                background-color: white;
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding-left: 10px;
            }
            
            .card__left > span {
                font-weight: 400;
            }
            
            .card__left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card__left > p {
                color: rgb(70, 70, 70);
            }
            .card__right > img {
                    max-width: 300px;
            }
        `;
        return style; 
        // NUNCA ESQUEÇA DO RETURN!
    } // aplica os estilos dos componentes
}

customElements.define("card-news", CardNews); // cria um novo element html <card-news> </card-news>