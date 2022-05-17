import randomColor from 'randomcolor';

export default function Randomcol(hue, lum) {
  console.log(hue, lum);
  const color = randomColor({
    hue: hue,
    luminosity: lum,
  });
  return color;
}
