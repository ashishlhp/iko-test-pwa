export interface Place {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  wind: number;
  homes: number;
  people: number;
  windDetail: Array<string>;
  spotDetail: Array<string>;
  suitable: Array<string>;
  lat: number;
  lng: number;
  like: number;
  share: number;
  reviews: Array<Review>;
}

export interface Review {
  title: string;
  image: string;
  location: string;
  rating: number;
  reviewed: number;
}

export const TravelList: Array<Place> = [
  {
    id: 1,
    title: 'San Francisco',
    subTitle: 'Travelers',
    description: `The City by the Bay offers something for everyone. Travelers love the city's iconic sights, including the Golden Gate Bridge and Alcatraz, its vibrant neighborhoods like the Mission District and Chinatown, and its outdoor offerings, such as Muir Woods National Monument, Golden Gate Park and Ocean Beach. What's more, San Francisco is home to an excellent and diverse food scene, boasting everything from Michelin-starred eateries to tasty food trucks to the popular Ferry Building Marketplace food hall.`,
    image: 'https://www.usnews.com/dims4/USNEWS/616197b/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F17%2F5c%2Fe08bd2a347be848e3dd4e98d88d9%2F2-30.%20San%20Francisco-Getty.jpg',
    wind: 20,
    homes: 10,
    people: 30,
    windDetail: ['Light', 'Moderate'],
    spotDetail: ['Flat', 'Medium Waves'],
    suitable: ['Beginner', 'Supervision', 'Advanced', 'Evolution'],
    lat: 6.428748,
    lng: 2.91902,
    like: 20,
    share: 1,
    reviews: [
      {
        image: 'https://www.usnews.com/dims4/USNEWS/2cda733/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff1%2F3e%2Ffa0dbf6a48d2be396522587c06da%2F9-23.%20Bali%2C%20Indonesia-Getty.jpg',
        title: 'Bali, Indonesia',
        location: 'Indonesia',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/e7ef0a4/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff3%2Fb5%2F5bab42a64ccab6167e281d16ffbd%2F10-22.%20Costa%20Rica%20-%20Getty.jpg',
        title: 'Costa Rica',
        location: 'Manuel Antonio National Park',
        rating: 3,
        reviewed: 144
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/d1fe84e/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F71%2Fd5%2F6bddc81a4df2abb0fce91784b8c6%2F7.%2025-Great%20Barrier%20Reef-Getty.jpg',
        title: 'Great Barrier Reef',
        location: 'Barrier Reef',
        rating: 5,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'St. Lucia',
        location: 'Lucia',
        rating: 2,
        reviewed: 10
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/2cda733/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff1%2F3e%2Ffa0dbf6a48d2be396522587c06da%2F9-23.%20Bali%2C%20Indonesia-Getty.jpg',
        title: 'Bali, Indonesia',
        location: 'Indonesia',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/e7ef0a4/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff3%2Fb5%2F5bab42a64ccab6167e281d16ffbd%2F10-22.%20Costa%20Rica%20-%20Getty.jpg',
        title: 'Costa Rica',
        location: 'Manuel Antonio National Park',
        rating: 3,
        reviewed: 144
      }
    ]
  },
  {
    id: 2,
    title: 'The Maldives',
    subTitle: 'Maldives',
    description: `The epitome of luxury, the Maldives enjoy an incredibly scenic location in the Indian Ocean. The contrast of bright turquoise water against stark white sand is stunning, and this destination is a favorite spot for those looking to stay in an overwater bungalow (many of which come with a private plunge pool). This collection of islands appeals to travelers eager to rest, relax and indulge. A vacation here won't come cheap, but it will offer unique opportunities, such as dining in an underwater restaurant or enjoying a treatment at an underwater spa.`,
    image: 'https://www.usnews.com/dims4/USNEWS/ecb5f2c/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Fd5%2Fe5%2Fbfbe26334da892adc77d2d362baf%2F3-29.%20Maldives-Getty.jpg',
    wind: 5,
    homes: 50,
    people: 100,
    windDetail: ['Light', 'Moderate'],
    spotDetail: ['Flat', 'Medium Waves'],
    suitable: ['Beginner', 'Supervision', 'Advanced', 'Evolution'],
    lat: 6.428748,
    lng: 2.91902,
    like: 200,
    share: 131,
    reviews: [
      {
        image: 'https://www.usnews.com/dims4/USNEWS/2cda733/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff1%2F3e%2Ffa0dbf6a48d2be396522587c06da%2F9-23.%20Bali%2C%20Indonesia-Getty.jpg',
        title: 'Bali, Indonesia',
        location: 'Indonesia',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/e7ef0a4/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff3%2Fb5%2F5bab42a64ccab6167e281d16ffbd%2F10-22.%20Costa%20Rica%20-%20Getty.jpg',
        title: 'Costa Rica',
        location: 'Manuel Antonio National Park',
        rating: 3,
        reviewed: 144
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/d1fe84e/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F71%2Fd5%2F6bddc81a4df2abb0fce91784b8c6%2F7.%2025-Great%20Barrier%20Reef-Getty.jpg',
        title: 'Great Barrier Reef',
        location: 'Barrier Reef',
        rating: 5,
        reviewed: 50
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'St. Lucia',
        location: 'Lucia',
        rating: 2,
        reviewed: 10
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/2cda733/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff1%2F3e%2Ffa0dbf6a48d2be396522587c06da%2F9-23.%20Bali%2C%20Indonesia-Getty.jpg',
        title: 'Bali, Indonesia',
        location: 'Indonesia',
        rating: 3,
        reviewed: 60
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/e7ef0a4/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff3%2Fb5%2F5bab42a64ccab6167e281d16ffbd%2F10-22.%20Costa%20Rica%20-%20Getty.jpg',
        title: 'Costa Rica',
        location: 'Manuel Antonio National Park',
        rating: 3,
        reviewed: 144
      }
    ]
  },
  {
    id: 3,
    title: 'Prague',
    subTitle: `Europe's`,
    description: `Once one of Europe's hidden gems, Prague now attracts millions of travelers annually – and for good reason. This beautiful city is home to impressive architectural landmarks, charming neighborhoods, friendly locals and a variety of lodging options. Spend time admiring the Old Town Square, the Prague Castle and the bizarrely designed Dancing House before sitting down for a meal and a locally brewed Pilsner. Even better, Prague is one of Europe's more affordable destinations to visit thanks to its many free attractions and budget-friendly accommodations.`,
    image: 'https://www.usnews.com/dims4/USNEWS/76e84dd/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F2d%2F16%2F47f167d54c48bab06dadda8142d9%2F4-28.%20Prague-Getty.jpg',
    wind: 14,
    homes: 25,
    people: 10,
    windDetail: ['Moderate'],
    spotDetail: ['Flat'],
    suitable: ['Beginner','Evolution'],
    lat: 6.428748,
    lng: 2.91902,
    like: 2,
    share: 5,
    reviews: [
      {
        image: 'https://www.usnews.com/dims4/USNEWS/2cda733/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff1%2F3e%2Ffa0dbf6a48d2be396522587c06da%2F9-23.%20Bali%2C%20Indonesia-Getty.jpg',
        title: 'Bali, Indonesia',
        location: 'Indonesia',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/e7ef0a4/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff3%2Fb5%2F5bab42a64ccab6167e281d16ffbd%2F10-22.%20Costa%20Rica%20-%20Getty.jpg',
        title: 'Costa Rica',
        location: 'Manuel Antonio National Park',
        rating: 3,
        reviewed: 144
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/d1fe84e/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F71%2Fd5%2F6bddc81a4df2abb0fce91784b8c6%2F7.%2025-Great%20Barrier%20Reef-Getty.jpg',
        title: 'Great Barrier Reef',
        location: 'Barrier Reef',
        rating: 5,
        reviewed: 5
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'St. Lucia',
        location: 'Lucia',
        rating: 2,
        reviewed: 4
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/2cda733/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff1%2F3e%2Ffa0dbf6a48d2be396522587c06da%2F9-23.%20Bali%2C%20Indonesia-Getty.jpg',
        title: 'Bali, Indonesia',
        location: 'Indonesia',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/e7ef0a4/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff3%2Fb5%2F5bab42a64ccab6167e281d16ffbd%2F10-22.%20Costa%20Rica%20-%20Getty.jpg',
        title: 'Costa Rica',
        location: 'Manuel Antonio National Park',
        rating: 3,
        reviewed: 3
      }
    ]
  },
  {
    id: 4,
    title: 'Amalfi Coast, Italy',
    subTitle: 'Italy',
    description: `Italy's Amalfi Coast beckons to both adventure travelers and relaxation seekers. The 13 cliffside towns that comprise this region offer picturesque hiking trails and several beaches to explore. You'll also find exquisite luxury hotels sharing real estate with colorful residences framed by greenery and imposing cliffs cascading down to the cobalt Mediterranean Sea. In fact, one of the best ways to see the Amalfi Coast is on a boat tour. What's more, you'll discover delectable Italian fare and fresh seafood wherever you go.`,
    image: 'https://www.usnews.com/dims4/USNEWS/f2aeff7/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Fe3%2Fc4%2F15bf98cd48588ef64a39a18507d5%2F5-27.Amalfi%20Coast-Getty.jpg',
    wind: 10,
    homes: 110,
    people: 300,
    windDetail: ['Light', 'Moderate'],
    spotDetail: ['Flat', 'Medium Waves'],
    suitable: ['Beginner', 'Supervision', 'Advanced', 'Evolution'],
    lat: 6.428748,
    lng: 2.91902,
    like: 200,
    share: 111,
    reviews: [
      {
        image: 'https://www.usnews.com/dims4/USNEWS/2cda733/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff1%2F3e%2Ffa0dbf6a48d2be396522587c06da%2F9-23.%20Bali%2C%20Indonesia-Getty.jpg',
        title: 'Bali, Indonesia',
        location: 'Indonesia',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/e7ef0a4/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff3%2Fb5%2F5bab42a64ccab6167e281d16ffbd%2F10-22.%20Costa%20Rica%20-%20Getty.jpg',
        title: 'Costa Rica',
        location: 'Manuel Antonio National Park',
        rating: 3,
        reviewed: 144
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/d1fe84e/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F71%2Fd5%2F6bddc81a4df2abb0fce91784b8c6%2F7.%2025-Great%20Barrier%20Reef-Getty.jpg',
        title: 'Great Barrier Reef',
        location: 'Barrier Reef',
        rating: 4,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'St. Lucia',
        location: 'Lucia',
        rating: 5,
        reviewed: 50
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/2cda733/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff1%2F3e%2Ffa0dbf6a48d2be396522587c06da%2F9-23.%20Bali%2C%20Indonesia-Getty.jpg',
        title: 'Bali, Indonesia',
        location: 'Indonesia',
        rating: 3,
        reviewed: 200
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/e7ef0a4/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff3%2Fb5%2F5bab42a64ccab6167e281d16ffbd%2F10-22.%20Costa%20Rica%20-%20Getty.jpg',
        title: 'Costa Rica',
        location: 'Manuel Antonio National Park',
        rating: 3,
        reviewed: 10
      }
    ]
  },
  {
    id: 5,
    title: 'Banff, Alberta',
    subTitle: 'Alberta',
    description: `Outdoor enthusiasts should add Banff to their bucket lists. Surrounded by the Rocky Mountains and Banff National Park, this Canadian vacation spot offers active pursuits galore, ranging from hiking, whitewater rafting and caving to skiing, dogsledding and snowshoeing. The area also hosts cultural and musical performances throughout the year. Plus, the après-ski scene here is top-notch: Skiers and snowboarders can wind down with drinks by the fire and meet new friends after a day on the slopes.`,
    image: 'https://www.usnews.com/dims4/USNEWS/41e3ae1/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F85%2Fb6%2F404fa3a34f57858147ba7c4dd08a%2F6.%2026-Banff%2C%20Alberta-Getty.jpg',
    wind: 18,
    homes: 58,
    people: 30,
    windDetail: ['Light', 'Moderate'],
    spotDetail: ['Flat', 'Medium Waves'],
    suitable: ['Beginner', 'Supervision', 'Advanced', 'Evolution'],
    lat: 6.428748,
    lng: 2.91902,
    like: 150,
    share: 120,
    reviews: [
      {
        image: 'https://www.usnews.com/dims4/USNEWS/2cda733/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff1%2F3e%2Ffa0dbf6a48d2be396522587c06da%2F9-23.%20Bali%2C%20Indonesia-Getty.jpg',
        title: 'Bali, Indonesia',
        location: 'Indonesia',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/e7ef0a4/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff3%2Fb5%2F5bab42a64ccab6167e281d16ffbd%2F10-22.%20Costa%20Rica%20-%20Getty.jpg',
        title: 'Costa Rica',
        location: 'Manuel Antonio National Park',
        rating: 3,
        reviewed: 144
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/d1fe84e/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2F71%2Fd5%2F6bddc81a4df2abb0fce91784b8c6%2F7.%2025-Great%20Barrier%20Reef-Getty.jpg',
        title: 'Great Barrier Reef',
        location: 'Barrier Reef',
        rating: 5,
        reviewed: 10
      },
      {
        image: 'assets/images/1_dreamed_spot.jpg',
        title: 'St. Lucia',
        location: 'Lucia',
        rating: 2,
        reviewed: 10
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/2cda733/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff1%2F3e%2Ffa0dbf6a48d2be396522587c06da%2F9-23.%20Bali%2C%20Indonesia-Getty.jpg',
        title: 'Bali, Indonesia',
        location: 'Indonesia',
        rating: 3,
        reviewed: 3
      },
      {
        image: 'https://www.usnews.com/dims4/USNEWS/e7ef0a4/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fcom-usnews-beam-media.s3.amazonaws.com%2Ff3%2Fb5%2F5bab42a64ccab6167e281d16ffbd%2F10-22.%20Costa%20Rica%20-%20Getty.jpg',
        title: 'Costa Rica',
        location: 'Manuel Antonio National Park',
        rating: 3,
        reviewed: 144
      }
    ]
  }
];
