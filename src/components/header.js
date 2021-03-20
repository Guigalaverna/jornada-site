import PropTypes from "prop-types"
import React, { useState } from "react"

import {
  Header as CarbonHeader,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderPanel,
  Switcher,
  SwitcherDivider,
  SwitcherItem,
} from "carbon-components-react/lib/components/UIShell"

const menuItems = [
  {
    path: "/desafios",
    title: "Desafios",
  },
  {
    divider: true,
  },
  {
    path: "https://github.com/obg-lab/jornada-site",
    title: "Github",
  },
  {
    path: "https://discord.gg/27nyWS78nP",
    title: "Comunidade no Discord",
  },
]

const Header = ({ siteTitle }) => {
  const [expandMenu, setExpandMenu] = useState(false)

  const onClickMenuExpand = () => {
    setExpandMenu(!expandMenu)
  }

  return (
    <CarbonHeader aria-label="OBG Jornada">
      <HeaderName href="/" prefix="OBG">
        {siteTitle}
      </HeaderName>
      <HeaderNavigation aria-label="OBG Jornada">
        {menuItems.map(item =>
          item.divider ? (
            <HeaderMenuItem>|</HeaderMenuItem>
          ) : (
            <HeaderMenuItem href={item.path} aria-label={item.title}>
              {item.title}
            </HeaderMenuItem>
          )
        )}
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderMenuButton
          className="is-hidden-desktop"
          aria-label="Abrir Menu"
          onClick={onClickMenuExpand}
          isCollapsible
        />
      </HeaderGlobalBar>
      <HeaderPanel aria-label="Header Panel" expanded={expandMenu}>
        <Switcher aria-label="Switcher Container">
          {menuItems.map(item =>
            item.divider ? (
              <SwitcherDivider />
            ) : (
              <SwitcherItem href={item.path} aria-label={item.title}>
                {item.title}
              </SwitcherItem>
            )
          )}
        </Switcher>
      </HeaderPanel>
    </CarbonHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
