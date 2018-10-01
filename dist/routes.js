page('/', index);
page('/product', product);
// page('/product/:produtctId, product');
page();

function product() {
    $("main").html(chargeProducts());
}

function index() {
    $("main").html(idexRender());
}

function idexRender() {
    let indexRender = `<div class="d-flex justify-content-center  mb-3">
    <img src="dist/img/puppy.jpg" class="img-fluid" alt="Responsive image">
  </div>`
    return indexRender;
}
