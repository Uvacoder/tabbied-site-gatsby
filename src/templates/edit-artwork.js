import React from "react"
import { Link, graphql } from "gatsby"
import ColorPicker from "../components/common/ColorPicker"
import Doodle from "../components/common/Doodle"
import OptionSlider from "../components/common/OptionSlider"
import ToggleSwitch from "../components/common/ToggleSwitch"
import "./edit-artwork.scss"

const _ = require("lodash/core")
const uuidv4 = require("uuid/v4")
const classNames = require("classnames")

class EditArtwork extends React.Component {
  constructor(props) {
    super(props)

    const artworkData = props.data.artworksJson

    this.mediaQueries = {
      xs: {
        doodleWidth: 280,
        query: "(max-width: 747px)",
      },
      sm: {
        doodleWidth: 360,
        query: "(min-width: 748px) and (max-width: 991px)",
      },
      md: {
        doodleWidth: 280,
        query: "(min-width: 992px) and (max-width: 1299px)",
      },
      lg: {
        doodleWidth: 360,
        query: "(min-width: 1300px)",
      },
    }

    this.state = {
      doodleUuid: uuidv4(),
      colors: artworkData.palette !== null ? artworkData.palette : [],
      grid: artworkData.grid.default,
      frequency:
        artworkData.frequency !== null ? artworkData.frequency.default : null,
      circularity:
        artworkData.circularity !== null
          ? artworkData.circularity.default
          : null,
      shadow: artworkData.shadow !== null ? artworkData.shadow.default : null,
      roundedCorners:
        artworkData.roundedCorners !== null
          ? artworkData.roundedCorners.default
          : null,
      customText:
        artworkData.customText !== null ? artworkData.customText.default : null,
      screenSize: Object.keys(this.mediaQueries)[0],
    }

    this.mediaQueryLists = []
    this.matchMediaEventHandlers = []

    this.setFrequency = this.setFrequency.bind(this)
    this.setCircularity = this.setCircularity.bind(this)
    this.setShadow = this.setShadow.bind(this)
    this.setRoundedCorners = this.setRoundedCorners.bind(this)
  }

  componentDidMount() {
    Object.entries(this.mediaQueries).forEach(([screenSize, queryInfo]) => {
      let mediaQueryList = window.matchMedia(queryInfo.query)

      // Initialize
      if (mediaQueryList.matches) {
        this.setState({
          screenSize: screenSize,
        })
      }

      let eventHandler = e => {
        if (e.matches) {
          this.setState({
            screenSize: screenSize,
          })
        }
      }

      mediaQueryList.addListener(eventHandler)

      this.mediaQueryLists.push(mediaQueryList)
      this.matchMediaEventHandlers.push(eventHandler)
    })
  }

  componentWillUnmount() {
    this.mediaQueryLists.forEach((mql, index) => {
      mql.removeListener(this.matchMediaEventHandlers[index])
    })
  }

  setColor(index, hex) {
    const clonedColors = _.clone(this.state.colors)
    clonedColors[index] = hex

    this.setState(
      {
        colors: clonedColors,
      },
      () => {
        this.redraw()
      }
    )
  }

  setFrequency(frequency) {
    this.setState(
      {
        frequency,
      },
      () => {
        this.redraw()
      }
    )
  }

  setCircularity(circularity) {
    this.setState(
      {
        circularity,
      },
      () => {
        this.redraw()
      }
    )
  }

  setShadow(isActive) {
    this.setState(
      {
        shadow: isActive,
      },
      () => {
        this.redraw()
      }
    )
  }

  setRoundedCorners(isActive) {
    this.setState(
      {
        roundedCorners: isActive,
      },
      () => {
        this.redraw()
      }
    )
  }

  redraw() {
    this.setState({
      doodleUuid: uuidv4(),
    })
  }

  render() {
    const artworkData = this.props.data.artworksJson

    let styleCode = artworkData.code.style
    let doodleCode = artworkData.code.doodle
    const doodleWidth = this.mediaQueries[this.state.screenSize].doodleWidth

    console.log(artworkData)

    if (artworkData.frequency !== null) {
      styleCode = styleCode
        .split(artworkData.frequency.replace)
        .join(this.state.frequency)
      doodleCode = doodleCode
        .split(artworkData.frequency.replace)
        .join(this.state.frequency)
    }

    if (artworkData.circularity !== null) {
      styleCode = styleCode
        .split(artworkData.circularity.replace)
        .join(this.state.circularity)
      doodleCode = doodleCode
        .split(artworkData.circularity.replace)
        .join(this.state.circularity)
    }

    if (artworkData.shadow !== null) {
      if (this.state.shadow === true) {
        styleCode = styleCode
          .split(artworkData.shadow.replace)
          .join(artworkData.shadow.code)

        doodleCode = doodleCode
          .split(artworkData.shadow.replace)
          .join(artworkData.shadow.code)
      } else {
        styleCode = styleCode.split(artworkData.shadow.replace).join("")
        doodleCode = doodleCode.split(artworkData.shadow.replace).join("")
      }
    }

    if (artworkData.roundedCorners !== null) {
      if (this.state.roundedCorners === true) {
        styleCode = styleCode
          .split(artworkData.roundedCorners.replace)
          .join(artworkData.roundedCorners.code)
        doodleCode = doodleCode
          .split(artworkData.roundedCorners.replace)
          .join(artworkData.roundedCorners.code)
      } else {
        styleCode = styleCode.split(artworkData.roundedCorners.replace).join("")
        doodleCode = doodleCode
          .split(artworkData.roundedCorners.replace)
          .join("")
      }
    }

    if (artworkData.customText !== null) {
      styleCode = styleCode
        .split(artworkData.customText.replace)
        .join(this.state.customText)
      doodleCode = doodleCode
        .split(artworkData.customText.replace)
        .join(this.state.customText)
    }

    return (
      <div id="section-edit-artwork">
        <div
          className="doodle-background"
          style={{
            backgroundColor: this.state.colors[0],
          }}
        />
        <div className="container container-fluid-on-mobile">
          <div className="row">
            <div className="col-md-5 offset-md-1 col-sm-12 offset-sm-0 align-self-center">
              <div className="doodle-wrapper">
                <div className="doodle-frame">
                  <Doodle
                    name={artworkData.slug}
                    grid={this.state.grid}
                    colors={this.state.colors}
                    width={doodleWidth}
                    widthHeightRatio={1.5}
                    uuid={this.state.doodleUuid}
                    styleCode={styleCode}
                    doodleCode={doodleCode}
                  />
                </div>
              </div>
            </div>

            <div className="col-md-5 offset-md-1  col-sm-12 offset-sm-0 align-self-center">
              <div className="artwork-options-wrapper">
                {artworkData.palette !== null && (
                  <div>
                    <h3>Palette</h3>
                    <div className="colors">
                      {artworkData.palette.map((hex, index) => (
                        <ColorPicker
                          key={"color" + index}
                          handleColorChange={color =>
                            this.setColor(index, color)
                          }
                          color={hex}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {artworkData.grid !== null &&
                  artworkData.grid.options !== null && (
                    <div className="box-options-selector">
                      <h3>Rows and columns</h3>
                      {artworkData.grid.options.map(grid => (
                        <div
                          key={grid}
                          className={classNames("option", {
                            selected: this.state.grid === grid,
                          })}
                          onClick={() => {
                            this.setState({
                              grid,
                            })
                          }}
                        >
                          {grid}
                        </div>
                      ))}
                    </div>
                  )}

                {artworkData.frequency !== null && (
                  <>
                    <h3>Frequency of shapes</h3>
                    <OptionSlider
                      value={this.state.frequency}
                      values={artworkData.frequency.values}
                      step={artworkData.frequency.step}
                      displayUnit="percentage"
                      handleChange={this.setFrequency}
                    />
                  </>
                )}

                {artworkData.circularity !== null && (
                  <>
                    <h3>Circularity</h3>
                    <OptionSlider
                      value={this.state.circularity}
                      values={artworkData.circularity.values}
                      step={artworkData.circularity.step}
                      displayUnit="percentage"
                      handleChange={this.setCircularity}
                    />
                  </>
                )}

                {artworkData.shadow !== null && (
                  <>
                    <h3>Shadows</h3>
                    <ToggleSwitch
                      isActive={this.state.shadow}
                      handleChange={this.setShadow}
                    />
                  </>
                )}

                {artworkData.roundedCorners !== null && (
                  <>
                    <h3>Rounded Corners</h3>
                    <ToggleSwitch
                      isActive={this.state.roundedCorners}
                      handleChange={this.setRoundedCorners}
                    />
                  </>
                )}

                {artworkData.customText !== null && (
                  <>
                    <h3>Custom Text</h3>
                    <input
                      type="text"
                      value={this.state.customText}
                      maxLength={artworkData.customText.maxLength}
                      onChange={e => {
                        this.setState({ customText: e.target.value })
                        this.redraw()
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query ArtworkById($id: String!) {
    artworksJson(id: { eq: $id }) {
      id
      name
      description
      grid {
        default
        options
      }
      palette
      slug
      frequency {
        default
        values
        step
        replace
      }
      circularity {
        default
        values
        step
        replace
      }
      shadow {
        default
        code
        replace
      }
      roundedCorners {
        default
        code
        replace
      }
      customText {
        default
        minLength
        replace
      }
      code {
        style
        doodle
      }
    }
  }
`

export default EditArtwork
