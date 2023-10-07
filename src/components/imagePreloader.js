import { useEffect } from 'react';
import * as svgAssets from '../assets';

export function ImagePreloader() {
  useEffect(() => {
    const imageUrls = [
      'https://cdn.discordapp.com/attachments/928038965129392151/1159871616512163961/PXL_20210226_194643573.PORTRAIT2.jpg?ex=6532999e&is=6520249e&hm=537421b93a8fb2404bdc44b65a9d92a9901577a7cffaf3b7816b27185730c2a1&',
      svgAssets.HTML,
      svgAssets.CSS,
      svgAssets.Javascript,
      svgAssets.React,
      svgAssets.Angular,
      svgAssets.Java,
      svgAssets.PHP,
      svgAssets.Git,
      svgAssets.Discord,
      svgAssets.VSCode,
      svgAssets.Wordpress,
      svgAssets.Photoshop,
      svgAssets.AfterEffects,
      svgAssets.Premiere,
      svgAssets.Illustrator,
      svgAssets.ExperienceDesign,
    ];

    imageUrls.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);

  return null; 
}

