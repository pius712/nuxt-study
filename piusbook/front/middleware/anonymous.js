export default function(context) {
  if (!context.store.state.users.me) {
    context.redirect('/signup');
  }
}
