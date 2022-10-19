import { products, categories } from './products';
import { Button, Grid, Typography } from "@mui/material";
import './catalog.css';
import { Link } from "react-router-dom";
import Carousel from "nuka-carousel/lib/carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import banner1 from './img/banner/banner9.png';
import banner2 from './img/banner/banner6.jpg';
import banner3 from './img/banner/banner4.jpg';


const Catalog = () => {
    return <Grid container spacing={2}>
      <Grid item lg={12} className="carouselGrid">
        <Carousel
          xs={12}
          sm={12}
          md={12}
          lg={12}
          adaptiveHeight="true"
          autoplay="false"
          autoplayInterval="3000"
          wrapAround="true"
          className="carousel"
          renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
            <button
              onClick={previousSlide}
              disabled={previousDisabled}
              className="carousel-button-left">
              <ArrowBackIosIcon className="arrow" />
            </button>
          )}
          renderCenterRightControls={({ nextDisabled, nextSlide }) => (
            <button
              onClick={nextSlide}
              disabled={nextDisabled}
              className="carousel-button-rigth"
            >
              <ArrowForwardIosIcon className="arrow" />
            </button>
          )}
        >
          <div
            className="carouselImage"
          >
            <div >
              <h2 className='textoBanner'>Complete sua coleção de Funkos!</h2>
              <img src={banner2} alt='banner1' className='photoBanner'></img>
            </div>
          </div>

          <div
            className="carouselImage"
          >
            <div>
              <h2 className='textoBanner'>As edições  mais recentes dos livros da Saga!</h2>
              <img src={banner1} alt='banner1' className='photoBanner'></img>
            </div>
          </div>

          <div
            className="carouselImage"
          >
            <div >
              <h2 className='textoBanner'>Tenha pôsteres e itens dos filmes!</h2>
              <img src={banner3} alt='banner1' className='photoBanner'></img>
            </div>
          </div>


        </Carousel>
      </Grid>

    <Grid container spacing={4} sx={{
        marginTop: '10px',
        paddingLeft: '32px',
        paddingRight: '32px',
        boxSizing: 'border-box'
    }}>
        {
            Object.keys(products).map(id => {
                return <Grid item xs={12} sm={6} md={4} lg={3} className="catalog-item">
                    { products[id].percent && <span className="badge-item" color="secondary">{products[id].percent}</span>}
                    <img src={products[id].images[0]} alt={products[id].name}/>

                    {
                        products[id].categories.map(categoryId => {
                            return <span className='category-label'>{categories[categoryId].name}</span>
                        })
                    }

                    <Typography variant="h5" component="h2">{products[id].name}</Typography>

                    {
                      products[id].promo_price ? <Typography variant="p" component="p" className="promo_price">{products[id].promo_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography> : ""
                    }
                    <Typography variant="p" component="p" className="price" style={{
                        fontSize: products[id].promo_price ? '16px' : '20px',
                        color: products[id].promo_price ? '#a9a9a9' : '#333333',
                        textDecoration: products[id].promo_price ? 'line-through' : 'none',
                    }}>{products[id].price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Typography>

                    <Typography variant="p" component="p">{products[id].description.substring(0, 100)}...</Typography>
                    <Link to={"../product/" + id} className='link-ver'>
                        <Button fullWidth variant="contained" className="btn-ver">
                            Ver Produto
                        </Button>
                    </Link>
                </Grid>
            })
        }
        </Grid>
    </Grid>
}

export default Catalog;