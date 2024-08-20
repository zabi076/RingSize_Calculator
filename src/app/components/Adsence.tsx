import Script from 'next/script'
import React from 'react'

type AdsenceType={
    pId:string
}
const Adsence=({pId}: AdsenceType ) =>{
  return (
    <script
      async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${pId}`}
        crossOrigin="anonymous"
        // strategy="lazyOnload"
    ></script>
  )
}

export default Adsence