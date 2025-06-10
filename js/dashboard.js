// import { supabase } from './supabaseClient.js'

// async function loadMessages() {
//   const { data: { user } } = await supabase.auth.getUser()

//   const { data: client, error: clientError } = await supabase
//     .from('clients')
//     .select('domain')
//     .eq('user_id', user.id)
//     .single()

//   if (!client || clientError) {
//     console.error('Client not found or error:', clientError)
//     return
//   }

//   const { data: messages, error: messagesError } = await supabase
//     .from('messages')
//     .select('*')
//     .eq('client_id', client.domain)
//     .order('created_at', { ascending: false })

//   if (messagesError) {
//     console.error('Error loading messages:', messagesError)
//     return
//   }

//   const container = document.getElementById('messages')
//   messages.forEach(msg => {
//     const div = document.createElement('div')
//     div.textContent = `[${msg.sender}] ${msg.message}`
//     container.appendChild(div)
//   })
// }

// loadMessages()
import { supabase } from './supabaseClient.js'

async function fetchUserProfile() {
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  if (userError || !user) {
    console.error('Error fetching user:', userError)
    return
  }

  const { data: client, error: clientError } = await supabase
    .from('clients')
    .select('name')
    .eq('user_id', user.id)
    .single()

  if (clientError || !client) {
    console.error('Error fetching client data:', clientError)
    return
  }

  document.getElementById('profile-name').textContent = client.name
  document.getElementById('profile-email').textContent = user.email
  document.getElementById('profile-pic').textContent = client.name.charAt(0).toUpperCase()
}

fetchUserProfile()

async function loadMessages() {
  const { data: { user } } = await supabase.auth.getUser()

  const { data: client, error: clientError } = await supabase
    .from('clients')
    .select('domain')
    .eq('user_id', user.id)
    .single()

  if (!client || clientError) {
    console.error('Client not found or error:', clientError)
    return
  }

  const { data: messages, error: messagesError } = await supabase
    .from('messages')
    .select('*')
    .eq('client_id', client.domain)
    .order('created_at', { ascending: false })

  if (messagesError) {
    console.error('Error loading messages:', messagesError)
    return
  }

  const container = document.getElementById('messages')
  container.innerHTML = '' // Clear existing messages

  messages.forEach(msg => {
    const card = document.createElement('div')
    card.className = 'card'

    const sender = document.createElement('div')
    sender.className = 'sender'
    sender.textContent = msg.sender

    const content = document.createElement('div')
    content.textContent = msg.message

    const meta = document.createElement('div')
    meta.className = 'meta'
    const date = new Date(msg.created_at)
    meta.textContent = date.toLocaleString()

    card.appendChild(sender)
    card.appendChild(content)
    card.appendChild(meta)

    container.appendChild(card)
  })
}

loadMessages()

let hu = document.getElementById("logoutbtn");

 hu.addEventListener("click", async function logout() {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Logout failed:', error.message)
        return
      }
      // Redirect to login page after successful logout
      window.location.href = '../login.html' // Change path if needed
  }
)