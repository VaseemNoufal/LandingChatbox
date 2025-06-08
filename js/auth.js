
// import { supabase } from './supabaseClient.js'

// document.getElementById('login-form').addEventListener('submit', async (e) => {
//   e.preventDefault()
//   const email = document.getElementById('email').value
//   const password = document.getElementById('password').value
//   const { error } = await supabase.auth.signInWithPassword({ email, password })
//   if (error) return alert('Login failed: ' + error.message)
//   location.href = 'setup-profile.html'
// })
import { supabase } from './supabaseClient.js'

window.addEventListener('DOMContentLoaded', async () => {
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    // Check if profile already exists
    const { data: client } = await supabase
      .from('clients')
      .select('id')
      .eq('user_id', user.id)
      .maybeSingle()

    if (client) {
      location.href = 'dashboard.html'
    } else {
      location.href = 'setup-profile.html'
    }
  }
})

// On form submit (login)
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data: loginData, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) return alert('Login failed: ' + error.message)

  const { data: { user } } = await supabase.auth.getUser()

  const { data: client } = await supabase
    .from('clients')
    .select('id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (client) {
    location.href = 'dashboard.html'
  } else {
    location.href = 'setup-profile.html'
  }
})
