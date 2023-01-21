import { useEffect, useState } from 'react';
import { checkMobile, checkTabletMobile } from '~/utils/base';

export default function Space({ height = 0, width = 0, heightMobile, widthMobile, heightTablet, widthTablet }) {
  if (heightTablet == undefined) heightTablet = height;
  if (widthTablet == undefined) widthTablet = width;
  if (heightMobile == undefined) heightMobile = heightTablet;
  if (widthMobile == undefined) widthMobile = widthTablet;

  const [heightSpace, setHeightSpace] = useState(height);
  const [widthSpace, setWidthSpace] = useState(width);

  useEffect(() => {
    if (checkMobile()) {
      setHeightSpace(heightMobile);
      setWidthSpace(widthMobile);
    } else if (checkTabletMobile()) {
      setHeightSpace(heightTablet);
      setWidthSpace(widthTablet);
    }
    window.addEventListener('resize', () => {
      if (checkMobile()) {
        setHeightSpace(heightMobile);
        setWidthSpace(widthMobile);
      } else if (checkTabletMobile()) {
        setHeightSpace(heightTablet);
        setWidthSpace(widthTablet);
      } else {
        setHeightSpace(height);
        setWidthSpace(width);
      }
    });
  });

  return (
    <div
      style={{
        position: 'relative',
        height: heightSpace,
        width: widthSpace,
      }}
    ></div>
  );
}
