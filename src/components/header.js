import PropTypes from "prop-types"
import React from "react"

import {
  Header as CarbonHeader,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
} from "carbon-components-react/lib/components/UIShell"

const Header = ({ siteTitle }) => (
  <CarbonHeader aria-label="OBG Jornada">
    <HeaderName href="/" prefix="OBG">
      {siteTitle}
    </HeaderName>
    <HeaderNavigation aria-label="OBG Jornada">
      <HeaderMenuItem href="/desafios">Desafios</HeaderMenuItem>
    </HeaderNavigation>
  </CarbonHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
