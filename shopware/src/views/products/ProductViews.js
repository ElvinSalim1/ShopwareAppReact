import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../store/actions/productsActions'
import { addProductToCart } from '../../store/actions/cartActions'

export default function ProductViews({match}) {
    
    const dispatch = useDispatch()
    let product = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getProductById(match.params.id))
    }, [dispatch, match.params.id])

    const add = (product) => {
        dispatch(addProductToCart(product))
    }
    
    if(product) {
        return (
            <div className="pt container-fluid bg-white ">
                <section className="text-center pt-5">
                <h1 className="font-weight-bold mb-5" style={{color: "blue"}}>Product Information</h1>
    
                <div className="row">
                    <div className="col-lg-6">
                    <div id="carousel-thumb" className="carousel-fade carousel-thumbnails" data-ride="carousel">
                        <div className="carousel-inner text-center text-md-left" role="listbox">
                        <div className="carousel-item active">
                            <img src={product.image} alt="First slide" className="img-fluid" />
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                        </a>
                    </div>
                    </div>
    
                    <div className="col-lg-5 text-center text-md-left">
                    <h2
                        className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                        <span>{product.name}</span>
                    </h2>
                    <h4 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                        <span className="red-text"><h4>{product.price} SEK</h4></span>
                    </h4>

                    <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                        <div className="card">
                        <div className="card-header" role="tab" id="headingOne1">
                            <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                            <h5 className="mb-0">
                                Description
                                <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                            </a>
                        </div>
                        <div id="collapseOne1" className="collapse show black-text" role="tabpanel" aria-labelledby="headingOne1" data-parent="#accordionEx">
                            <div className="card-body">{product.description}</div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header" role="tab" id="headingTwo2">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                            <h5 className="mb-0">
                                Details
                                <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                            </a>
                        </div>
                        <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2" data-parent="#accordionEx">
                            <div className="card-body black-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, facilis.
                            </div>
                        </div>
                        </div>
                        <div className="card">
                        <div className="card-header" role="tab" id="headingThree3">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                            <h5 className="mb-0">
                                Shipping
                                <i className="fas fa-angle-down rotate-icon"></i>
                            </h5>
                            </a>
                        </div>
                        <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3" data-parent="#accordionEx">
                            <div className="card-body black-text">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quia.
                            </div>
                        </div>
                        </div>
                    </div>
                    <section className="color">
                        <div className="mt-5">
                        <div className="row mt-3">
                            <div className="col-md-12 text-center text-md-left text-md-right">
                            <button onClick={() => add(product)} className="btn btn-primary btn-rounded">
                                <i className="fas mr-2" aria-hidden="true"></i> Add To Cart
                            </button>
                            </div>
                        </div>
                        </div>
                    </section>
                    </div>
                </div>
                </section>
            </div>
        )
    } else {
        return null
    }
   
    
}
