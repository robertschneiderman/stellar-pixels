{
  currentUser: {
    id: 1,
    email: "robert.a.schneiderman@gmail.com"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createPhoto: {errors: ["body can't be blank"]}
  },
  photos: {
    1: {
      description: "a fox in snow",
      author_id: 1,
      tags: {
        1: {
          id: 1,
          name: "snow"
        },
        2: {
          id: 2,
          name: "fox"
        }
      }
    }
  },
}
