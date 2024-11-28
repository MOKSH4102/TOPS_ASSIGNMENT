const ProductView = ({Product})=>{

    return <>
    <div class="col">
    <div class="card shadow-sm">
      <img src={Product.images} alt="" className="bd-placeholder-img card-img-top" width="100%" height="225" />
      <div class="card-body">
        <p>{Product.title}</p>
        <p class="card-text">{Product.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
           <a href=""></a>
            <button type="button" class="btn btn-sm btn-outline-secondary">Price</button>
          </div>
          <small class="text-body-secondary">$50</small>
        </div>
      </div>
    </div>
  </div></>
}
export default ProductView;