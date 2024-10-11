import { Gudea, Duru_Sans, Doppio_One, } from 'next/font/google';
import localFont from 'next/font/local'

export const droid_sans = localFont({ 
  src: '../public/fonts/DroidSans.ttf',
  display: 'swap',
});

export const droid_sans_bold = localFont({ 
    src: '../public/fonts/DroidSans-Bold.ttf',
    display: 'swap',
  });

export const gudea = Gudea({ 
    subsets: ['latin'], 
    weight: ['400', '700'] ,
    display: 'swap'
});
export const duru_sans = Duru_Sans({
    subsets: ['latin'], 
    weight: '400',
    display: 'swap'
});
export const doppio_one = Doppio_One({ 
    subsets: ['latin'] , 
    weight: '400' ,
    display: 'swap'
});

