const INITIAL_STATE = {
  sections: [
    {
      title: 'characters',
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d243199259273.5eeef467b68a5.jpg',
      id: 1,
      linkUrl: 'shop/characters'
    },
    {
      title: 'home',
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/878c0393217967.5e5f2cb92008d.jpg',
      id: 2,
      linkUrl: 'shop/home'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/fecd18102567537.5f3a1079b985a.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'foods',
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/5383f881426255.5cff75781f4ed.jpg',
      id: 4,
      linkUrl: 'shop/foods'
    },
    {
      title: 'cars',
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/84f61b102944589.5f42609e6f8e7.jpg',
      id: 5,
      linkUrl: 'shop/cars'
    },
    {
      title: 'league of legends',
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/243962102570569.5f3a279bd1fce.jpg',
      id: 6,
      linkUrl: 'shop/league%20of%20legends'
    },
    {
      title: 'illustration',
      imageUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/45d71b102570487.5f3a2738d5389.jpg',
      id: 7,
      linkUrl: 'shop/illustration'
    }
  ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;