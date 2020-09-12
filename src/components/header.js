import PropTypes from "prop-types"
import React from "react"

import {
  Header as CarbonHeader,
  HeaderName,
} from "carbon-components-react/lib/components/UIShell"

const Header = ({ siteTitle }) => (
  <CarbonHeader aria-label="OBG Jornada">
    <HeaderName href="/" prefix="OBG">
      {siteTitle}
    </HeaderName>
  </CarbonHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
