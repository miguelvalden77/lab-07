
export class FooterComponent extends HTMLElement {
  constructor() {
    super();

    // Contenido del componente
    this.innerHTML = `
        <style>
          footer {
            display: flex;
            background-color: gray;
            font-size: 1rem;
            gap: 1rem;
            padding: 0rem 0.75rem;
          }
        </style>
        <footer>
          <p>Home</p>
          <p>About Us</p>
          <p>Fecha ${new Date().getFullYear()}</p>
        </footer>
      `;
  }
}

// Registrando el custom element
customElements.define('footer-component', FooterComponent);