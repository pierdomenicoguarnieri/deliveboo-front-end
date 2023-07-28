<script>
export default {
  name:'Footer'

}
</script>

<template>
  <footer class="d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 d-flex order-1">
          <div class="info-bool text-start pe-3">
            <h5>Deliveboo S.r.l.</h5>
            <div>
              <p><i class="fa-solid fa-envelope"></i> <a href="mailto:info@fooddelivery.it">info@deliveboo.it</a></p>
              <p><i class="fa-solid fa-phone"></i> <a href="tel:00390123456789">+39 0123456789</a></p>
              <p><i class="fa-solid fa-location-dot"></i> <a href="https://goo.gl/maps/rEEeLo5VjbSSjJaV7" target="_blank" rel="noopener">Via Tommaso Marino n.7, 20121 - Milano (MI)</a></p>
              <p><strong>P. IVA:  </strong>12345678998</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 d-flex align-items-center justify-content-center team-five order-2">
          <p class="mb-0">Made by TEAM 5</p>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 d-flex order-3">
          <div class="social w-100">
            <nav class="h-100 w-100">
              <ul class="d-flex align-items-center justify-content-end w-100 h-100 mb-0">
                <li>
                  <a href="">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li><a href="#"><i class="fa-brands fa-square-twitter"></i></a></li>
                <li><a href="#"><i class="fa-brands fa-square-pinterest"></i></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../scss/partials/variables';
@import '../scss/partials/typography';

footer{
  height: 170px;
  padding: 10px;
  background-color: rgba($custom_white, 0.8);
  color: $custom_gray;
  .info-bool{
    p{
      margin-bottom: 0;
      a{
        text-decoration: none;
        color: $custom_gray;
        &:hover{
          color: $tertiary_color;
        }
      }
    }
  }
  .team-five{
    color:  $tertiary_color;
  }
  .footer-menu, .social{
    li{
      list-style: none;
      a{
        color: $custom_gray !important;
        &:hover{
          color: $tertiary_color !important;
        }
      }
    }
  }
  .social{
    li{
      margin-right: 10px;
    }
    i{
      font-size: $fs-20;
    }
  }
}

@media screen and (max-width: 1270px){
  .col-4{
    padding: 0;
  }
  .info-bool, .footer-menu{
    font-size: $fs-9;
  }
}

@media screen and (max-width: 992px){
  footer{
    height: 190px;
  }
  .col-4{
    padding: 0;
  }
  .info-bool, .footer-menu{
    font-size: $fs-9;
  }
  .team-five{
    order: 4 !important;
    border-top: 1px solid $custom_gray;
    margin-top: 10px;
  }
  .social{
    // height: auto !important;
    nav{
      // height: auto !important;
      ul{
      // flex-wrap: wrap;
        padding-left: 0;
        // align-items: normal !important;
        // height: auto !important;
        i{
          font-size: $fs-20;
        }
      }
    }
  }
}
@media screen and (max-width: 620px){
  .col-6{
    padding: 0;
  }

}

@media screen and (max-width: 576px){
  footer{
    height: 240px;
    .social{
      padding: 10px 0;
      nav{
        ul{
          justify-content: center !important;
          flex-wrap: nowrap  !important;
        }
      }
    }
  }

}
</style>