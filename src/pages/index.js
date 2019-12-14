import React from "react"
import { Link } from "gatsby"
import "css-doodle"

import HeroSection from "../components/pages/index/hero"
import HowItWorksSection from "../components/pages/index/how-it-works"
import BrowseArtworkSection from "../components/pages/index/browse-artwork"
import "./index.scss"
import testimonialPerson from "../images/testimonial_person.png"
import devicesImage from "../images/devices-min.jpg"
import notebookImage from "../images/notebook-min.jpg"
import packagingImage from "../images/packaging-min.jpg"
import tshirtImage from "../images/tshirt-min.jpg"
import wallArtImage from "../images/wall_art-min.jpg"

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

      <div className="example-images">
        <div className="row">
          <div className="col-md-12">
            <div className="image-wrapper">
              <img src={devicesImage} alt="Digital" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="image-wrapper">
              <img src={wallArtImage} alt="Wall Art" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-wrapper">
              <img src={notebookImage} alt="Stationery" />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="image-wrapper">
              <img src={packagingImage} alt="Packaging" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-wrapper">
              <img src={tshirtImage} alt="T-Shirt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TestimonialsSection = () => {
  return (
    <div id="section-testimonials">
      <div className="background">
        <div className="rectangle-1"></div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 offset-md-1">
            <img src={testimonialPerson} alt="Jane Doe" />
          </div>

          <div className="col-md-5 offset-md-1">
            <h3>Testimonials</h3>

            <blockquote>
              <p>"So simple but magical. My mind is blown."</p>

              <span className="author">Don Relyea</span>

              <span className="role">Digital artist, inventor, speaker</span>
            </blockquote>
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
          <div className="col-md-7 order-2 order-md-1">
            <div className="image-wrapper">
              <img
                src="/images/built_by_01.png"
                alt="Built by Sy Hong and Ye Joo Park"
              />
            </div>
          </div>

          <div className="col-md-5 order-1 order-md-2">
            <h3>
              Built by design and <span className="nowrap">dev geeks</span>
            </h3>
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
          <div className="col-md-5 offset-md-3">
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
            <div className="image-wrapper">
              <img src="/images/built_by_02.png" alt="Thanks to Chuan Yuan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TryForFreeSection = () => {
  return (
    <div id="section-try-for-free">
      <div className="background">
        <div className="circle-4" />
      </div>

      <div className="dark-background">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="message">
                Create your beautiful design in under a minute.
              </p>

              <Link to="/" className="btn white">
                Make your art
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SubmitArtworkSection = () => {
  return (
    <div id="section-submit-artwork">
      <div className="background">
        <div className="inner-background">
          <div className="circle-5" />
          <div className="circle-6" />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3>Want to submit an original artwork?</h3>

            <p>
              If you got some CSS skills, you can create and submit your own
              customizable artwork that could be featured here on Tabbied.
            </p>

            <Link to="/" className="btn">
              Learn more
            </Link>
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
      <TestimonialsSection />
      <BuiltBySection />
      <TryForFreeSection />
      <SubmitArtworkSection />
    </div>
  )
}

export default IndexPage
