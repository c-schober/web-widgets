import { useState } from 'react'
import axios from 'axios'
import { to } from 'await-to-js'

import Button from 'components/ui/Button'

import type { FC } from 'react'

const PreferenceCenter: FC = () => {
  const [birthday, setBirthday] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const [error, success] = await to(
      axios.post('https://www.everdrop.de/api/update-email-profile', {
        email: 'info@christoph-schober.com',
        birthday,
      })
    )
    if (error) {
      console.log(error)
    }
    if (success) {
      console.log(success)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Birthday:
        <input
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          type="date"
          autoComplete="off"
          autoCorrect="off"
          className="flex items-center gap-4 w-full h-10 px-4
            border border-divider bg-panel rounded-lg outline-none
            cursor-pointer
            motion-safe:transition-all
            focus:ring-2 focus:ring-focus focus:ring-offset"
        />
      </label>
      <Button type="submit" variant="primary" loading={false} disabled={false}>
        submit
      </Button>
    </form>
  )
}

export default PreferenceCenter
