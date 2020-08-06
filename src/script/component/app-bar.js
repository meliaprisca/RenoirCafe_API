import logo from '../../picture/coffee.png';

class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: #8c6434;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                overflow: auto;
            }
        
            :host img{
                float: left;
                padding: 9px 16px 16px 16px;
            }
        
            h2{
                font-family: 'Bebas Neue', cursive;
                letter-spacing: 7px;
                margin-top: 12px;
            }
            span{
                font-family: 'Parisienne', cursive;
                letter-spacing: 0px;
            }
        </style>
        <img src="${logo}"/>
        <h2>Renoir <span>le</span> Cafe</h2>`;
    }
 }
  
 customElements.define("app-bar", AppBar);