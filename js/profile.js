
import { supabase } from './supabaseClient.js'

document.getElementById('profile-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = document.getElementById('name').value
  const domain = document.getElementById('domain').value
  const { data: { user } } = await supabase.auth.getUser()
  const { error } = await supabase.from('clients').insert({ user_id: user.id, name, domain })
  if (error) return alert('Error saving profile: ' + error.message)
  location.href = 'dashboard.html'
})
