// const app = Vue.createApp({
//   template: `<h1>Hello {{firstName}}!</h1>`,
//   data () {
//     return {
//       firstName: 'Mike',
//     }
//   }
// }).mount("#app")

const app = Vue.createApp({
  data() {
    return {
      firstName: 'Helen',
      lastName: 'July',
      email: 'helen@gamil.com',
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/women/26.jpg'
    }
  },
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results, info } = await res.json();
      console.log(results, info);

      // console.log(results);
      // console.log(info);

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    }
  }
});

app.mount("#app")