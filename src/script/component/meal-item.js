class MealItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
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
                    display:block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: auto;
            
                }
            
                .fan-art-club {
                    width: 100%;
                    max-height: 300px;
                    object-fit: cover;
                    object-position: left;
                    color: #8d5524;
                }
            
                .meal-info {
                    padding: 24px;
                    background-color: #d4a16a;
                }
            
                .meal-info > h2 {
                    font-weight: lighter;
                    color: #8d5524;
                }
            
                .meal-info > p {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
            </style>
            <img class="fan-art-club" src="${this._meal.strMealThumb}" alt="Fan Art">
            <div class="meal-info">
                <h2>${this._meal.strMeal}</h2>
                <p><b>${this._meal.strCategory}</b></p>
                <p>${this._meal.strInstructions}</p>
            </div>`;
    }
 }
  
 customElements.define("meal-item", MealItem);