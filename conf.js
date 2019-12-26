module.exports = {
  username: process.env.HTTP_USERNAME,
  password: process.env.HTTP_PASSWORD,
  manifestFormat: 'importmap',
  locations: {
    reactMf: 'google://react.microfrontends.app/importmap.json',
    vueMf: 'google://vue.microfrontends.app/importmap.json',
  }
};
