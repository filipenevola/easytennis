Meteor.startup(->
  console.log 'fixture startup'
  if Meteor.isClient or not process.env.IS_MIRROR
    return

  console.log 'remove users'
  Meteor.users.remove({})

  console.log 'add filipemkv@gmail.com user to db'
  Accounts.createUser(
    username: "filipenevola",
    email: "filipemkv@gmail.com",
    password: "right pass",
    profile:
      name: "Filipe Névola"
  )
)