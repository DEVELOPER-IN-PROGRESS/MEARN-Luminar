let products = fetch('https://fakestoreapi.com/products')
  .then(response =>response.json())
    .then( pdt => pdt.forEach( p=> cards.innerHTML +=
        `
                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" src="${p.image}" alt="${p.title}" style="width:100%;max-width:250px;height:auto;"; />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder pdt-title">${p.title.split(' ').splice(0,5).join(' ')}</h5>
                                <!-- Product price-->
                                $${p.price}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                        </div>
                    </div>
                </div>
        `
        ))
