// Lembre sempre do comando defer quando importar o arquivo JavaScript!

class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        // base do COMPONENT
        const componentRoot = document.createElement("h1"); // <h1> Satírio </h1>
        
        // componentRoot.textContent = "Minha Notícia"; // -> Coloca o texto direto na página
        componentRoot.textContent = this.getAttribute("titulo"); // <h1 titulo = "Satírio"></h1> -> cria um atributo (prop) para a tag do HTML 

        // estilizar o COMPONENT
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: red;
            }
        `;

        // enviar para shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);

    }
}

customElements.define("titulo-dinamico", TituloDinamico);