import { supabase } from './supabaseClient.js'

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
  messages.forEach(msg => {
    const div = document.createElement('div')
    div.textContent = `[${msg.sender}] ${msg.message}`
    container.appendChild(div)
  })
}

loadMessages()
