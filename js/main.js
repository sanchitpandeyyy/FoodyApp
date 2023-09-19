const apifunct= async () => {


    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      await result.map(element => {
        const markup = `  <div class="card" style="width: 18rem;">
                        <img src="img/pizza.webp" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${element.name}</h5>
                          
                        </div>
    
                        <div class="card-body">
                          <p class="price">Price: Rs 500</p>
    
                          <button class="btn btn-primary" type="button" id="Ordernow" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                            Order Now
                          </button>
    
    
                        </div>
                      </div> `;
    
                      document.querySelector('.items-btm').insertAdjacentHTML('beforeend',markup);
      });
    } catch (error) {
        console.error(error);
    }
    }
    
    apifunct();