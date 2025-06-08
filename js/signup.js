
import { supabase } from './supabaseClient.js'

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const { error } = await supabase.auth.signUp({ email, password })
  if (error) return alert('Signup failed: ' + error.message)
  alert("Signup successful! Please verify your email, then login.")
  location.href = 'login.html'
})
