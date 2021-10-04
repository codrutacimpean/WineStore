class CommonService {
    getFormmatedProducts(products) {
        var concatenatedProducts = '';
        for (let index = 0; index < products.length; index++) {
            const product = products[index];
            concatenatedProducts +=
                `<div style = "padding:50px">
                <div class= "responsive col-4">
                    <div class="card" style="width: 220px; height:355px;border:solid; border-color: #770a46; border-radius: 10px; ">
                        <img src="${this.GetRandomUrl()}" class="clearfix" class="card-img-top">
                        <div class="card-body">
                            <h3 class="card-title" style ="color:#770a46; font-family:cursive;font-width:bold;" onclick="showProduct(${product.id})">${product.name}</h3>
                            <p class="card-text" style ="color:#770a46; font-family:cursive;font-width:bold;">${product.description}</p>
                            <p class = "card-text"style ="color:#770a46; font-family:cursive;font-width:bold;text-align:center; font-size:30px" >${product.price}Lei</p>
                            <input type="button" id = "buttonCardId" onclick="removeProduct(${product.id})" value="Sterge"/>
                        </div>
                    </div><br><br>
                    <a href="#" class="btn btn-danger" id = "buttonAddCard" onclick="AddProductToCart(${product.id})">Adaugă în coș
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart4" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                     d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg></span>
                    </a><br><br>
                    <a href="#" class="btn btn-danger" id = "buttonAddCard2" onclick="AddProductToFavorites(${product.id})">Adaugă la favorite
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                     </a>
                </div>
            </div>
           `
        }
        return concatenatedProducts;
    }
    getFormmatedProductsfromCart(products) {
        var concatenatedProducts = '';
        for (let index = 0; index < products.length; index++) {
            const product = products[index];
            concatenatedProducts +=
                `<div>
                <div style = "padding:30px">
                    <div class= "responsive col-4">
                        <div class="card" style="width: 220px; height:355px;border:solid; border-color: #770a46; border-radius: 10px; ">
                            <img src="${this.GetRandomUrl()}" class="clearfix" class="card-img-top">
                            <div class="card-body">
                            <h3 class="card-title" style ="color:#770a46; font-family:cursive;font-width:bold;" onclick="showProduct(${product.id})">${product.name}</h3>
                            <p class="card-text" style ="color:#770a46; font-family:cursive;font-width:bold;">${product.description}</p>
                            <p class = "card-text"style ="color:#770a46; font-family:cursive;font-width:bold;text-align:center; font-size:30px" >${product.price}Lei</p>
                            <input type="button" id = "buttonCard" onclick="removeProductFromCart(${product.id})" value="Sterge"/>
                        </div>
                    </div><br><br>
                </div>
            </div>`
        }
        return concatenatedProducts;
    }
    getFormmatedProductsfromFavorites(products) {
        var concatenatedProducts = '';
        for (let index = 0; index < products.length; index++) {
            const product = products[index];
            concatenatedProducts +=
                `<div>
                <div style = "padding:30px">
                    <div class= "responsive col-4">
                        <div class="card" style="width: 220px; height:355px;border:solid; border-color: #770a46; border-radius: 10px; ">
                            <img src="${this.GetRandomUrl()}" class="clearfix" class="card-img-top">
                            <div class="card-body">
                            <h3 class="card-title" style ="color:#770a46; font-family:cursive;font-width:bold; onclick="showProduct(${product.id})">${product.name}</h3>
                            <p class="card-text" style ="color:#770a46; font-family:cursive;font-width:bold;">${product.description}</p>
                            <p class = "card-text" style ="color:#770a46; font-family:cursive;font-width:bold;text-align:center; font-size:40px;">${product.price} Lei</p>
                            <input id = "favoriteButton" type="button" onclick="removeProductfromFavorites(${product.id})" value="Sterge"/>
                            </div>
                        </div>
                    </div>
                </div>
             </div>`
        }
        return concatenatedProducts;
    }

    getFormmatedProduct(product) {
        return `<div>
        <div class= "responsive col-4">
            <p class = "addRating" >Adaugă Rating:</p>
            <p class = "addRating">Rating is ${product.rating.avgRating.toFixed(2)} out of 5</p>
            <div class="rating">
                <input type="radio" name="star" id="star5" onclick="AddRating(${product.id}, 5)" value="Rating 5"><label for="star5">   
                </label>
                <input type="radio" name="star" id="star4" onclick="AddRating(${product.id}, 4)" value="Rating 4"><label for="star4">   
                </label>
                <input type="radio" name="star" id="star3" onclick="AddRating(${product.id}, 3)" value="Rating 3"><label for="star3">   
                </label>
                <input type="radio" name="star" id="star2" onclick="AddRating(${product.id}, 2)" value="Rating 2"><label for="star2">   
                </label>
                <input type="radio" name="star" id="star1" onclick="AddRating(${product.id}, 1)" value="Rating 1"><label for="star1">   
                </label>
            </div>             
                <div class="card" style="width: 240px; height:335px border:solid; border-color: #770a46">
                    <img id ="imageDetailsId" src="${this.GetRandomUrl()}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title" onclick="showProduct(${product.id})">${product.name}/ ${product.description} /${product.price} Lei</h5>
                    <p class = "addRating">Adaugă un Review</p>
                    ${this.getReviewHtml(product.id)}
                    ${this.getReviewsHtml(product)}
                </div>
        </div>`;
    }

    getReviewsHtml(product) {
        var reviews = product.reviews;
        var concatenatedReviews = '';
        for (let index = 0; index < reviews.length; index++) {
            concatenatedReviews +=
                `
            <div id = "reviewTitle" >${reviews[index].title}<div>
            <div id ="reviewDescription">${reviews[index].description}</div>
            `
        }
        return concatenatedReviews;
    }
    getReviewHtml(productId) {
        return `
        <form style = "justify-content:center">
        <div class="form">
            <div class="name-form">
                <input type="text" id="reviewTitleId" style="font-weight:bold" />
                <label for="reviewTitleId" class="label-name">
                    <span class="content-name">Titlu</span>
                </label>
            </div>
        </div>
        <div class="form">
            <div class="name-form">
                <input type="text" id="reviewDescriptionId"/>
                <label for="reviewDescriptionId" class="label-name">
                    <span class="content-name">Descriere</span>
                </label>
            </div>
        </div>
        <input type="button" onclick="addReview(${productId})" id="ReviewButton" value="Add Review">  
        </form>
    `
    }
    getFormmatedBlogs(blogs) {
        var concatenatedBlogs = '';
        for (let index = 0; index < 10; index++) {
            const blog = blogs[index];
            concatenatedBlogs +=
                `
            <div>
                <h1>${blog.title}</h1>
                <p>${blog.body}</p>
                <img src="${this.GetRandomUrl()}"/>
            </div>
            `
        }
        return concatenatedBlogs;
    }
    showMessage(message) {
        $("#messagePanel").addClass("successMessage");
        $("#messagePanel").removeClass("errorMessage");
        $("#messagePanel").html(message);
    }
    showError(error) {
        $("#messagePanel").addClass("errorMessage");
        $("#messagePanel").removeClass("successMessage");
        $("#messagePanel").html(error);
    }
    setToStorage(key, value) {
        window.localStorage.setItem(key, value);
    }
    getFromStorage(key) {
        return window.localStorage.getItem(key);

    }
    redirect(path) {
        window.location.href = path;
    }
    logOut() {
        window.localStorage.removeItem("token");
        this.redirect("login.html");
    }
    Serialize(object) {
        return JSON.stringify(object);
    }
    Deserialize(json) {
        return JSON.parse(json);
    }
    removeKey(key, value) {
        window.localStorage.removeItem(key, value);

    }
    GetRandomUrl() {
        var listOfUrls = [
            "file:///D:/Curs%20Front%20End/C%C3%AEmpean%20Codru%C8%9Ba%20-Teme/Tema10/img/albdulce.jpeg",
            "file:///D:/Curs%20Front%20End/C%C3%AEmpean%20Codru%C8%9Ba%20-Teme/Tema10/img/albdemidulce.jpg",
            "file:///D:/Curs%20Front%20End/C%C3%AEmpean%20Codru%C8%9Ba%20-Teme/Tema10/img/vin%20alb%20sec2.jpg",
            "file:///D:/Curs%20Front%20End/C%C3%AEmpean%20Codru%C8%9Ba%20-Teme/Tema10/img/rosudulce.jpg",
            "https://cramahistria.ro/wp-content/uploads/vitamine-si-minerale-vin-rosu.jpg",
            "https://assets1.storebrands.com/sb/styles/content_sm/s3/2018-06/k2-_4770eaaa-457f-4f69-b2ce-cfa5ab8166bd.v1.jpg?itok=H0Mt8tAb",
            "https://www.sandrasflorist.co.uk/upload/mt/sf116/products/20127043-luxury-red-wine-gift-basket-2.jpg",
            "file:///D:/Curs%20Front%20End/C%C3%AEmpean%20Codru%C8%9Ba%20-Teme/Tema10/img/rozedemidulce.jpg",
            "file:///D:/Curs%20Front%20End/C%C3%AEmpean%20Codru%C8%9Ba%20-Teme/Tema10/img/rozedulce.jpg",
            "https://samolepky.static.s1.upgates.com/_cache/d/0/d0b77d44c0f9c1df8f6b294b6db3e71d.jpg",
            "https://static.yoursurprise.com/galleryimage/30/3053bb9a5abb69b6c7f3d52debdc5a04/wine-gift-set-with-glass-salentein-malbec-engraved-lid.jpg?width=900&crop=1%3A1",
            "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1559076559-47380_1_1200px.jpg?crop=0.667xw:1xh;center,top&resize=480:*",
            "data:image/jpeg;base64,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",
        ];
        var randomNumber = Math.floor(Math.random() * 13);
        return listOfUrls[randomNumber];
    }
}