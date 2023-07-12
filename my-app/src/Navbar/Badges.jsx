import React from "react";

export default function Badges() {
    return (
    <div>
        <h1>Badges </h1>
        <a id="category-MASTER-trigger" href="#" class="badge-category-trigger">
             
              <img alt="Challenge Patches" class="badge-category-image" src="https://cdn.kastatic.org/images/badges/master-challenge-blue-medium.png"/>
              <div aria-hidden="true" class="achievement-label">
                Challenge Patches
              </div>
            </a>

            <a id="category-DIAMOND-trigger" href="#" class="badge-category-trigger">
              <img alt="Black Hole Badges" class="badge-category-image" src="https://cdn.kastatic.org/images/badges/eclipse-medium.png"/>
              <div aria-hidden="true" class="achievement-label">
                Black Hole Badges
              </div>
            </a>

            <li class="badge-category platinum owned pure-u-1-3 pure-u-md-1-6" data-category="category-PLATINUM">
            <a id="category-PLATINUM-trigger" href="#" class="badge-category-trigger">
              <img alt="Sun Badges" class="badge-category-image" src="https://cdn.kastatic.org/images/badges/sun-medium.png"/>
              <div aria-hidden="true" class="achievement-label">
                Sun Badges
              </div>
            </a>
          </li>

          <li class="badge-category gold owned pure-u-1-3 pure-u-md-1-6" data-category="category-GOLD">
            <a id="category-GOLD-trigger" href="#" class="badge-category-trigger">
              <img alt="Earth Badges" class="badge-category-image" src="https://cdn.kastatic.org/images/badges/earth-medium.png"/>
              <div aria-hidden="true" class="achievement-label">
                Earth Badges
              </div>
            </a>
          </li>
          <li class="badge-category silver owned pure-u-1-3 pure-u-md-1-6" data-category="category-SILVER">
            <a id="category-SILVER-trigger" href="#" class="badge-category-trigger">
              <img alt="Moon Badges" class="badge-category-image" src="https://cdn.kastatic.org/images/badges/moon-medium.png"/>
              <div aria-hidden="true" class="achievement-label">
                Moon Badges
              </div>
            </a>
          </li>
          <li class="badge-category bronze owned pure-u-1-3 pure-u-md-1-6" data-category="category-BRONZE">
            <a id="category-BRONZE-trigger" href="#" class="badge-category-trigger">
              <img alt="Meteorite Badges" class="badge-category-image" src="https://cdn.kastatic.org/images/badges/meteorite-medium.png"/>
              <div aria-hidden="true" class="achievement-label">
                Meteorite Badges
              </div>
            </a>
          </li>

         
            </div>
            
    )
} 