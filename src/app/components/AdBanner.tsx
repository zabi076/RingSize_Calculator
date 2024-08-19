"use client";
import React, { useEffect } from 'react'

type AdBannerTypes ={
    dataAdSlot: string
    dataAdFormat: string
    dataFullWidthResponsive: boolean
}

const AdBanner = ({ 
    dataAdSlot,
    dataAdFormat, 
    dataFullWidthResponsive 
    }: AdBannerTypes) => {

        useEffect(() => {
            try {
                ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
            } catch (error:any) {
                console.log(error.message)
                
            }

            
          }, []);

    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block', height: '150px', width: '100%' }}
        data-ad-client="ca-pub-4804828229925861"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()} 
        
      >
        
        </ins>
    )
}

export default AdBanner