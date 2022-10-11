import { useState } from 'react'
import axios from 'axios'
import { to } from 'await-to-js'

import Button from '../components/ui/Button'

import type { FC } from 'react'

type Props = {
  email: string
}
type ApiAnswer = 'success' | 'error' | ''

const PreferenceCenter: FC<Props> = ({ email }) => {
  const [birthday, setBirthday] = useState('')
  const [apiAnswer, setApiAnswer] = useState<ApiAnswer>('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const [error, success] = await to(
      axios.post('https://www.everdrop.de/api/update-email-profile', {
        email,
        formData: { birthdate: birthday },
      })
    )
    if (error) {
      setApiAnswer('error')
      console.log(error)
    }
    if (success) {
      setApiAnswer('success')
    }
  }

  if (apiAnswer === 'success') {
    return (
      <div className="p-5 flex flex-col gap-4 rounded shadown-lg">
        <h2>Super, das hat geklappt!</h2> <p> Du erhältst deine Überraschung an deinem nächsten Geburtstag.</p>
      </div>
    )
  }

  return (
    <div className="p-5 flex flex-col gap-4 rounded shadow-lg">
      <h2>Was wir noch gerne wissen würden...</h2>
      <p>Zu deinem Geburtstag möchten wir dich gerne überraschen - dazu benötigen wir nur noch dein Geburtsdatum:</p>
      <form onSubmit={handleSubmit}>
        <label>
          Geburtstag:
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

        <Button className="mt-4" type="submit" variant="primary" loading={false} disabled={false}>
          Jetzt absenden
        </Button>
      </form>
      {apiAnswer === 'error' && (
        <p className="text-alert">
          Hoppla, irgendetwas funktioniert gerade nicht richtig.
          <br /> Wir arbeiten bereits an einer Lösung.
        </p>
      )}
    </div>
  )
}

export default PreferenceCenter
