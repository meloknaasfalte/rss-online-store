type Props = {className: string, src: string, alt: string, Icon: string};
const creatImage = (className:string, src:string, alt:string, Icon:string) => {
  const image  = document.createElement('img');
  image.src = Icon;
  image.alt = alt;
  image.classList.add(className);
  return image.outerHTML;
}

export default creatImage;
