const mediaSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const theme = {
  color: {
    base: '#FAF5E4',
    orange: '#F8B400',
    green: '#125B50',
    pink: '#FF6363'
  },
  device: {
    mobileS: `(min-width: ${mediaSize.mobileS})`,
    mobileM: `(min-width: ${mediaSize.mobileM})`,
    mobileL: `(min-width: ${mediaSize.mobileL})`,
    tablet: `(min-width: ${mediaSize.tablet})`,
    laptop: `(min-width: ${mediaSize.laptop})`,
    laptopL: `(min-width: ${mediaSize.laptopL})`,
    desktop: `(min-width: ${mediaSize.desktop})`,
  }
}