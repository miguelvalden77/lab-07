export class HeaderComponent extends HTMLElement {

  static styles

  constructor() {
    super();

    // Contenido del componente
    this.innerHTML = `
        <style>
          header {
            display: flex;
            background-color: black;
            font-size: 1rem;
            color: white;
            gap: 1rem;
            padding: 0rem 0.75rem;
            margin-bottom: 1rem;
          }
        </style>
        <header>
          <p>Home</p>
          <p>About Us</p>
          <p>Fecha ${new Date().getFullYear()}</p>
        </header>
      `;
  }
}

// Registrando el custom element
customElements.define('header-component', HeaderComponent);