interface ImageProps {
  aspectRatio: number
  source: object
}

export const variants: { [key: string]: ImageProps } = {
  johnLennon: {
    aspectRatio: 1,
    source: require('../../../assets/media/JohnLennon.jpeg'),
  },
}
