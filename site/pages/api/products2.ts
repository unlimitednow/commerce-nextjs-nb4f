const products2 = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc:
      'https://res.cloudinary.com/unlimitednow/image/upload/v1680770683/nb4f/french_terry_hoodie_set_latte_frylcu.png',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://res.cloudinary.com/unlimitednow/image/upload/v1680770681/nb4f/Solid_Halter_Tie_Cut_Out_Dress_Baby_Blue_haatiu.png',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://res.cloudinary.com/unlimitednow/image/upload/v1671919587/nb4f/IMG_6301_magic_d4hwpb.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://res.cloudinary.com/unlimitednow/image/upload/v1671919495/nb4f/IMG_6294_pleg9l.png',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://res.cloudinary.com/unlimitednow/image/upload/v1671919495/nb4f/IMG_6294_pleg9l.png',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]
export default function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any
      new (): any
      json: {
        (
          arg0: {
            id: number
            name: string
            href: string
            price: string
            imageSrc: string
            imageAlt: string
          }[]
        ): void
        new (): any
      }
    }
  }
) {
  res.status(200).json(products2)
}
