import React, { useEffect, useState } from 'react';


export const Heading = ({ level, observer }) => (props) => {
  useEffect(() => {
    /* start observing heading's intersection with the bounding box
     * set by observer's `rootMargin` */
    if (!observer) {
      return
    }
    const heading = document.getElementById(props.id)
    if (heading) observer.observe(heading);
  });

  return React.createElement(`h${level}`, {
    ...props,
    className: "c-heading scroll-mt-16 cursor-pointer"
  })
}
