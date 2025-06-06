import React from 'react'
import { supabase } from '@/lib/supabase';

export default function UpdatePassword() {
    const update = async () => {
        await supabase.auth.updateUser({ password: 'new_password' })
    }
  return (
    <div><button onClick={update}>Save new password</button></div>
  )
}
