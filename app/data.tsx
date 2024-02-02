import React from 'react';
import {TBeans, TCoffee, TMenuItem} from './types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from './RootStyles';

const Visa = () => {
  return <FontAwesome5 name="cc-visa" size={24} color="white" />;
};

const MasterCard = () => {
  return <FontAwesome5 name="cc-mastercard" size={24} color="white" />;
};

const Amex = () => {
  return <FontAwesome5 name="cc-amex" size={24} color="white" />;
};

const Wallet = () => {
  return <FontAwesome5 name="wallet" size={24} color={COLORS.brown} />;
};

const GooglePay = () => {
  return <FontAwesome5 name="google" size={24} color="white" />;
};

const ApplePay = () => {
  return <FontAwesome5 name="apple" size={24} color="white" />;
};

const Paypal = () => {
  return <FontAwesome5 name="paypal" size={24} color="#1e477a" />;
};

const Cash = () => {
  return <MaterialCommunityIcons name="cash" size={24} color="#00836d" />;
};

export const payment = [
  {
    cardNumber: '**** **** **** 1234',
    expiry: '12/23',
    name: 'Paul Peterson',
    icon: <Visa />,
  },
  {
    cardNumber: '**** **** **** 5678',
    expiry: '12/24',
    name: 'Mark Johnson',
    icon: <MasterCard />,
  },
  {
    cardNumber: '**** **** **** 9012',
    expiry: '12/25',
    name: 'John II Stoks',
    icon: <Amex />,
  },
  {
    cardNumber: '**** **** **** 3456',
    expiry: '12/26',
    name: 'Alisson Smith',
    icon: <Visa />,
  },
  {
    cardNumber: '**** **** **** 7890',
    expiry: '12/27',
    name: 'Tiger Woods',
    icon: <MasterCard />,
  },
];

export const TextNavs: TMenuItem[] = [
  {
    name: 'All',
  },
  {
    name: 'Sweet',
  },
  {
    name: 'Intense',
  },
  {
    name: 'Mild',
  },
  {
    name: 'Milky',
  },
  {
    name: 'Latte',
  },
  {
    name: 'Mochiatto',
  },
];

export const paymentOptions = [
  {
    id: 1,
    name: 'Wallet',
    icon: <Wallet />,
  },
  {
    id: 2,
    name: 'Google Pay',
    icon: <GooglePay />,
  },
  {
    id: 3,
    name: 'Apple Pay',
    icon: <ApplePay />,
  },
  {
    id: 4,
    name: 'Paypal',
    icon: <Paypal />,
  },
  {
    id: 6,
    name: 'Cash',
    icon: <Cash />,
  },
];

export const homeCardsCoffee: TCoffee[] = [
  {
    id: 1,
    type: 'coffee',
    img: require('../assets/images/hot-choco.jpg'),
    title: 'Hot Chocolate',
    sub: 'With Steamed Milk',
    amount: 4.99,
    overview:
      'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ',
    rating: {
      total: 4.5,
      number: 2335,
    },
    withHead: 'Steamed Milk',
    withIcon: 'Milk',
    level: 'Medium',
    sizes: [
      {
        size: 'S',
        price: 4.99,
        quantity: 1,
      },
      {
        size: 'M',
        price: 5.99,
        quantity: 1,
      },
      {
        size: 'L',
        price: 6.99,
        quantity: 1,
      },
    ],
    complement: 'Chocolate',
    label: ['Sweet', 'Milky'],
  },
  {
    id: 2,
    type: 'coffee',
    img: require('../assets/images/coffee/espresso.jpg'),
    title: 'Espresso',
    sub: 'Strong and Intense',
    amount: 3.99,
    overview:
      'Espresso is a concentrated coffee brewed by forcing a small amount of nearly boiling water through finely-ground coffee beans. It forms the base for various coffee beverages.',
    rating: {
      total: 3.8,
      number: 4994,
    },
    withHead: 'No Milk',
    withIcon: 'None',
    level: 'Strong',
    sizes: [
      {
        size: 'M',
        price: 4.99,
        quantity: 1,
      },
      {
        size: 'L',
        price: 5.99,
        quantity: 1,
      },
    ],
    complement: 'None',
    label: ['Intense', 'Espresso'],
  },
  {
    id: 3,
    type: 'coffee',
    img: require('../assets/images/coffee/latte.jpg'),
    title: 'Caramel Latte',
    sub: 'Smooth and Sweet',
    amount: 5.49,
    overview:
      'A latte is a coffee drink made with espresso and steamed milk. The addition of caramel adds a delightful sweetness to this classic beverage.',
    rating: {
      total: 4.2,
      number: 102,
    },
    withHead: 'Steamed Milk',
    withIcon: 'Milk',
    level: 'Mild',
    sizes: [
      {
        size: 'M',
        price: 5.49,
        quantity: 1,
      },
      {
        size: 'L',
        price: 6.49,
        quantity: 1,
      },
    ],
    complement: 'Caramel',
    label: ['Milk', 'Latte'],
  },
  {
    id: 4,
    type: 'coffee',
    img: require('../assets/images/coffee/america.jpg'),
    title: 'Americano',
    sub: 'Simple and Robust',
    amount: 3.49,
    overview:
      "An Americano is a coffee drink prepared by diluting espresso with hot water, giving it a similar strength to, but different flavor from, drip coffee. It's perfect for those who enjoy a bold and robust taste.",
    rating: {
      total: 5,
      number: 9454,
    },
    withHead: 'No Milk',
    withIcon: 'None',
    level: 'Bold',
    sizes: [
      {
        size: 'M',
        price: 3.49,
        quantity: 1,
      },
      {
        size: 'L',
        price: 4.49,
        quantity: 1,
      },
    ],
    complement: 'None',
    label: ['Mild'],
  },
  {
    id: 5,
    type: 'coffee',
    img: require('../assets/images/coffee/mocca.jpeg'),
    title: 'Mocha',
    sub: 'Rich Chocolate Flavor',
    amount: 5.99,
    overview:
      'Mocha is a delightful coffee drink that combines espresso with steamed milk and chocolate, creating a rich and indulgent flavor profile. Perfect for chocolate lovers!',
    rating: {
      total: 5.0,
      number: 2333,
    },
    withHead: 'Steamed Milk',
    withIcon: 'Milk',
    level: 'Medium',
    sizes: [
      {
        size: 'M',
        price: 5.99,
        quantity: 1,
      },
      {
        size: 'L',
        price: 6.99,
        quantity: 1,
      },
    ],
    complement: 'Chocolate',
    label: ['Sweet', 'Milky', 'Mochiatto'],
  },
  {
    id: 6,
    type: 'coffee',
    img: require('../assets/images/coffee/flatwhite.jpg'),
    title: 'Flat White',
    sub: 'Smooth Microfoam',
    amount: 4.79,
    overview:
      'A flat white is a coffee drink originating from Australia, consisting of espresso with microfoam (steamed milk with fine, velvety bubbles). It offers a strong coffee flavor with a creamy texture.',
    rating: {
      total: 3.0,
      number: 83,
    },
    withHead: 'Steamed Milk',
    withIcon: 'Milk',
    level: 'Medium',
    sizes: [
      {
        size: 'M',
        price: 4.79,
        quantity: 1,
      },
      {
        size: 'L',
        price: 5.79,
        quantity: 1,
      },
    ],
    complement: 'None',
    label: ['Milky', 'Mild'],
  },
  {
    id: 7,
    type: 'coffee',
    img: require('../assets/images/coffee/machiatto.jpg'),
    title: 'Caramel Macchiato',
    sub: 'Sweet Caramel Drizzle',
    amount: 5.79,
    overview:
      'Caramel Macchiato is a popular espresso-based drink that features espresso, steamed milk, and a sweet caramel drizzle. It strikes a perfect balance between sweetness and bold coffee flavor.',
    rating: {
      total: 4.4,
      number: 3442,
    },
    withHead: 'Steamed Milk',
    withIcon: 'Milk',
    level: 'Medium',
    sizes: [
      {
        size: 'M',
        price: 5.79,
        quantity: 1,
      },
      {
        size: 'L',
        price: 6.79,
        quantity: 1,
      },
    ],
    complement: 'Caramel',
    label: ['Milky', 'Sweet'],
  },
  {
    id: 8,
    type: 'coffee',
    img: require('../assets/images/coffee/greentea.jpg'),
    title: 'Green Tea Latte',
    sub: 'Smooth Matcha Flavor',
    amount: 4.99,
    overview:
      "Green Tea Latte is a delightful blend of matcha green tea and steamed milk, creating a smooth and slightly earthy flavor. It's a popular choice for those who enjoy a unique and comforting beverage.",
    rating: {
      total: 4.8,
      number: 2333,
    },
    withHead: 'Steamed Milk',
    withIcon: 'Milk',
    level: 'Mild',
    sizes: [
      {
        size: 'M',
        price: 4.99,
        quantity: 1,
      },
      {
        size: 'L',
        price: 5.99,
        quantity: 1,
      },
    ],
    complement: 'Matcha',
    label: ['Milky', 'Latte'],
  },
  {
    id: 9,
    type: 'coffee',
    img: require('../assets/images/coffee/tea.jpg'),
    title: 'Chai Tea Latte',
    sub: 'Spiced and Comforting',
    amount: 5.29,
    overview:
      'Chai Tea Latte is a warm and comforting beverage made with spiced tea concentrate and steamed milk. The combination of aromatic spices creates a cozy and flavorful drink.',
    rating: {
      total: 4.0,
      number: 4223,
    },
    withHead: 'Steamed Milk',
    withIcon: 'Milk',
    level: 'Mild',
    sizes: [
      {
        size: 'M',
        price: 5.29,
        quantity: 1,
      },
      {
        size: 'L',
        price: 6.29,
        quantity: 1,
      },
    ],
    complement: 'Chai Spice',
    label: ['Mild', 'Latte'],
  },
];

export const homeCardsBeans: TBeans[] = [
  {
    id: 100,
    type: 'bean',
    img: require('../assets/images/beans/robusta.jpg'),
    title: 'Robusta Beans',
    sub: 'Rich and Flavorful',
    amount: 12.99,
    overview:
      'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ',
    rating: {
      total: 5,
      number: 4543,
    },
    withHead: 'From Africa',
    withIcon: 'Milk',
    level: 'Medium Roasted',
    sizes: [
      {
        size: '250gm',
        price: 12.99,
        quantity: 1,
      },
      {
        size: '500gm',
        price: 24.99,
        quantity: 1,
      },
      {
        size: '1000gm',
        price: 44.99,
        quantity: 1,
      },
    ],
    complement: 'Chocolate',
    location: 'Ethiopia',
    label: ['Ethiopia', 'Cofee Beans'],
  },
  {
    id: 101,
    type: 'bean',
    img: require('../assets/images/beans/arabica.jpg'),
    title: 'Arabica Beans',
    sub: 'Smooth and Mild',
    amount: 14.99,
    overview:
      'Arabica beans are known for their smooth and mild flavor profile. They are grown at higher altitudes, which contributes to their acidity and unique taste. Originating from the highlands of Ethiopia, Arabica beans are a favorite among coffee enthusiasts.',
    rating: {
      total: 5,
      number: 5897,
    },
    withHead: 'From Ethiopia',
    withIcon: 'None',
    level: 'Light Roasted',
    sizes: [
      {
        size: '250gm',
        price: 14.99,
        quantity: 1,
      },
      {
        size: '500gm',
        price: 27.99,
        quantity: 1,
      },
      {
        size: '1000gm',
        price: 49.99,
        quantity: 1,
      },
    ],
    complement: 'None',
    location: 'Ethiopia',
    label: ['Ethiopia', 'Cofee Beans', 'Arabica Beans'],
  },
  {
    id: 102,
    type: 'bean',
    img: require('../assets/images/beans/java.jpg'),
    title: 'Java Beans',
    sub: 'Earthy and Bold',
    amount: 16.99,
    overview:
      'Java beans are renowned for their earthy and bold flavor. Grown on the Indonesian island of Java, these beans have a unique profile with a deep, rich taste. Ideal for those who prefer a strong and full-bodied cup of coffee.',
    rating: {
      total: 5,
      number: 3675,
    },
    withHead: 'From Indonesia',
    withIcon: 'None',
    level: 'Dark Roasted',
    sizes: [
      {
        size: '250gm',
        price: 16.99,
        quantity: 1,
      },
      {
        size: '500gm',
        price: 31.99,
        quantity: 1,
      },
      {
        size: '1000gm',
        price: 59.99,
        quantity: 1,
      },
    ],
    complement: 'None',
    location: 'Indonesia',
    label: ['Indonesia', 'Cofee Beans', 'Java Beans'],
  },
  {
    id: 103,
    type: 'bean',
    img: require('../assets/images/beans/colombian.jpg'),
    title: 'Colombian Beans',
    sub: 'Bright and Citrusy',
    amount: 18.99,
    overview:
      'Colombian beans are known for their bright and citrusy acidity. Grown in the fertile regions of Colombia, these beans are carefully cultivated to produce a well-balanced and flavorful cup of coffee. Perfect for those who enjoy a lively and aromatic brew.',
    rating: {
      total: 5,
      number: 4210,
    },
    withHead: 'From Colombia',
    withIcon: 'None',
    level: 'Medium Roasted',
    sizes: [
      {
        size: '250gm',
        price: 18.99,
        quantity: 1,
      },
      {
        size: '500gm',
        price: 35.99,
        quantity: 1,
      },
      {
        size: '1000gm',
        price: 67.99,
        quantity: 1,
      },
    ],
    complement: 'None',
    location: 'Colombia',
    label: ['Colombia', 'Cofee Beans', 'Colombian Beans'],
  },
  {
    id: 104,
    type: 'bean',
    img: require('../assets/images/beans/ethiopia.jpg'),
    title: 'Ethiopian Yirgacheffe Beans',
    sub: 'Fruity and Floral',
    amount: 22.99,
    overview:
      'Ethiopian Yirgacheffe beans are celebrated for their fruity and floral notes. Grown in the Yirgacheffe region of Ethiopia, these beans undergo a meticulous harvesting and processing method to preserve their unique flavor profile. An excellent choice for those who appreciate complex and vibrant coffees.',
    rating: {
      total: 5,
      number: 2985,
    },
    withHead: 'From Ethiopia',
    withIcon: 'None',
    level: 'Light Roasted',
    sizes: [
      {
        size: '250gm',
        price: 22.99,
        quantity: 1,
      },
      {
        size: '500gm',
        price: 42.99,
        quantity: 1,
      },
      {
        size: '1000gm',
        price: 79.99,
        quantity: 1,
      },
    ],
    complement: 'None',
    location: 'Ethiopia',
    label: ['Ethiopia', 'Cofee Beans', 'Ethiopian Yirgacheffe Beans'],
  },
];
