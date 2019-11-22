import React from "react"
import { Link } from "gatsby"
import ColorPicker from "../components/common/ColorPicker"

import "./index.scss"
import usesDigitalImages from "../images/uses_digital_images.jpg"
import usesWallArt from "../images/uses_wall_art.jpg"
import usesStationery from "../images/uses_stationery.jpg"
import usesPackaging from "../images/uses_packaging.jpg"
import usesTextileApparel from "../images/uses_textile_apparel.jpg"

const HeroSection = () => {
  return (
    <div id="section-hero">
      <div className="container">
        <div className="row">
          <div className="hero-background">
            <div className="col-md-6">
              <p className="hero-text">
                Customizable,
                <br /> CSS generated artwork
                <br /> for designers.
              </p>

              <div className="hero-actions">
                <Link className="btn-action">Make your art</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const HowItWorksSection = () => {
  return (
    <div id="section-how-it-works">
      <div className="gray-background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>How it works</h3>
            </div>
          </div>

          <div id="steps" className="row">
            <div className="col-md-4">
              <div className="step-box">
                <div className="step-number one">
                  <span>1</span>
                </div>
                <p>Pick a design from our growing collection of artwork</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-box">
                <div className="step-number two">
                  <span>2</span>
                </div>
                <p>Customize colors and choose settings for your design</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="step-box">
                <div className="step-number three">
                  <span>3</span>
                </div>
                <p>
                  Download your customized design{" "}
                  <span className="highlight">for free</span>
                </p>
              </div>
            </div>
          </div>

          <div id="demo" className="row">
            <div className="col-md-4 offset-md-1">
              <div id="demo-artwork">
                <img
                  src="/images/demo_artwork_placeholder.png"
                  alt="Demo Artwork"
                />
              </div>
            </div>

            <div className="col-md-4 offset-md-1">
              <div id="demo-controls">
                <h4>Try a quick demo</h4>
                <div>
                  Try picking your own colors and/or tap redraw to create a
                  unique design.
                  <div className="color-palette">
                    <ColorPicker color="#043C64" />
                    <ColorPicker color="#63BFFE" />
                    <ColorPicker color="#5AE4E1" />
                    <ColorPicker color="#FFC31B" />
                    <ColorPicker color="#FF256F" />
                  </div>
                  <a className="btn-redraw">Redraw</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BrowseArtworkSection = () => {
  return (
    <div id="section-browse-artwork">
      <div className="gray-background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span className="subheading">Browse artwork</span>
              <h3>
                Choose from our growing library of beautiful, minimalistic
                patterns and illustrations.
              </h3>
            </div>
          </div>

          <div className="row artwork-images-row">
            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_the_city.png"
                  alt="The City Artwork Image"
                />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_super_zario.png"
                  alt="Super Zario Artwork Image"
                />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_disque.png"
                  alt="Disque Artwork Image"
                />
              </Link>
            </div>
          </div>

          <div className="row artwork-images-row">
            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_symmetry.png"
                  alt="Symmetry Artwork Image"
                />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img src="/images/artwork_veil.png" alt="Veil Artwork Image" />
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/">
                <img
                  src="/images/artwork_placeholder.png"
                  alt="Artwork Placeholder Image"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ExampleUsesSection = () => {
  return (
    <div id="section-example-uses">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <span className="subheading">Example uses</span>
            <h3>
              Timeless art perfect
              <br /> for all your needs
            </h3>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>
              <span className="number">01</span>
              Digital Images
            </h4>
          </div>
        </div>
      </div>

      <div className="example-use-image-wrapper">
        <img src={usesDigitalImages} alt="Digital Images" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>
              <span className="number">02</span>
              Wall art
            </h4>
          </div>
        </div>
      </div>

      <div className="example-use-image-wrapper">
        <img src={usesWallArt} alt="Wall art image" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>
              <span className="number">03</span>
              Stationery
            </h4>
          </div>
        </div>
      </div>

      <div className="example-use-image-wrapper">
        <img src={usesStationery} alt="Stationery image" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>
              <span className="number">04</span>
              Packaging
            </h4>
          </div>
        </div>
      </div>

      <div className="example-use-image-wrapper">
        <img src={usesPackaging} alt="Packaging image" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>
              <span className="number">05</span>
              Textiles and apparel
            </h4>
          </div>
        </div>
      </div>

      <div className="example-use-image-wrapper">
        <img src={usesTextileApparel} alt="Textiles and apparel image" />
      </div>

      <div id="uses-endless-possibilities">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Endless possibilities</h4>
              <p>
                Wallpaper, digital images, packaging, posters, t-shirts,
                fabrics…
                <br />
                What can you make with Tabbied?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const BuiltBySection = () => {
  return (
    <div id="section-built-by">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <img
              src="/images/built_by_01.png"
              alt="Built by Sy Hong and Ye Joo Park"
            />
          </div>

          <div className="col-md-5">
            <h3>Built by design and dev geeks</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              molestiae labore suscipit non, maxime praesentium rem tenetur
              debitis vitae.
            </p>

            <div className="people">
              <span className="names">Sy &amp; Ye Joo</span>
              <br />
              Founders
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-5 offset-3">
            <h3>A special thanks to</h3>

            <div className="people">
              <span className="names">Chuan Yuan</span>
              <br />
              Creator of CSS-Doodle
            </div>

            <p>
              Saepe beatae quis expedita praesentium est corporis ab distinctio,
              odio debitis suscipit voluptate aperiam deleniti eius ducimus modi
              rem accusantium aspernatur veritatis.
            </p>
          </div>

          <div className="col-md-4">
            <img src="/images/built_by_02.png" alt="Thanks to Chuan Yuan" />
          </div>
        </div>
      </div>
    </div>
  )
}

const TryForFreeSection = () => {
  return (
    <div id="section-try-for-free">
      <div className="black-background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="message">
                Create your beautiful design in under a minute.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const IndexPage = () => {
  return (
    <div id="page-main">
      <HeroSection />
      <HowItWorksSection />
      <BrowseArtworkSection />
      <ExampleUsesSection />
      <BuiltBySection />
      <TryForFreeSection />
    </div>
  )
}

export default IndexPage
