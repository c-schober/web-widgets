import { useState } from 'react'
import cn from 'classnames'
import type { FC } from 'react'

const POEMS = [
  'Des isch jetzt so a Brotzeitloch',
  'Wenn des Ziel so nah do isch, muss ma net so weit ausziehen',
  'Die Bäume drücken nach oben',
  'Aber sche geflogen is er',
  'Do oben muss a ganz schöner Wind gehen',
  'Aber der Pfeil wackelt sche',
  'Jetzt geht er do hi, wo i higuck',
  'I bin hängablieben an meim Ding und dann isch er grad no in Arsch neiganga',
  'Da blendet die Sonne',
  'Da steht ma so schief',
  'Jetzt bin i hänga bliebn',
  'Mei Jacke ist zu weit',
  'Ich hab heut net die passenden Pfeile dabei',
  'Des sind meine alten Pfeile',
  'Heut ist wieder der Danebenschiesstag',
  'Ich hab noch keinen Lauf, ich bin noch nicht drin',
  'Jetzt hasch mi drausbracht ',
  'Ich hab mir so nen Tick eingefangen',
  'I hab heute die falsche Hose angehabt',
  'Kann ja ich nichts dafür, dass der Regen die Äste so schwer macht, dass sie ins Ziel reinhängen',
  'I hab mei Brill heit net putzt',
  'Bei dem Regen kann i net schießen',
  'Blödes Vieh',
  'Wenn man alles richtig macht, gehts doch a bissel besser',
  'Jetzt dreht er auf',
  'Ich liebe dieses Tier',
  'Wenn man die bogenhand oben lassen würd',
  '-10 für blödes Schwätzen',
  'I hab den Ausfallschritt net ausm Kopf bracht',
  'Warum net glei so',
  'Die Wurstsemmel liegt mer im Magen',
  'Des einzige was momentan arbeitet ist der Magen',
  'Mi irritiert der Hund',
  'Was blubbert der denn',
  'Pffftt',
  'I bin übertrainiert ',
  'Des is wieder a typischer Rechtsschuss. Für links ist des gar nix',
  'Musch nunderdrehen',
  'Die Spur war no warm',
  'I hab eigentlich ins kill geschaut',
  'Der geht zu weit rechts',
  'Scho wieder gwunken',
  'heut gehn alle zu hoch',
  'Ah komm, des gibts doch net',
  'Geschtern liefs so gut',
  'Ja sag’s doch glei Mensch ',
  'Des Tier muss einfach zu schiessen sein, des triffst sogar du',
  'I bin vorhin erst von der Arbeit gekommen ',
  'Zieh mal gscheit aus',
  'Kaum tu ich mal den Arm net runter, geht der Pfeil drüber',
  'Lass die blöde Rückenspannung weg, dann bleibt der Pfeil unten',
]

const POEMS_COUNT = POEMS.length

const getRandomEntry = () => {
  return Math.floor(Math.random() * POEMS_COUNT)
}

const PoemOMat: FC = () => {
  const [activeWord, setActiveWord] = useState('der diana spruch-o-mat')
  const [isRunning, setIsRunning] = useState(false)
  const [isInit, setIsInit] = useState(true)

  const startSpin = () => {
    setIsInit(false)
    setIsRunning(true)
    const interval = setInterval(() => {
      setActiveWord(POEMS[getRandomEntry()])
    }, 120)

    setTimeout(() => {
      clearInterval(interval)
      setIsRunning(false)
    }, 3000)
  }

  return (
    <div className="w-full px-2">
      <div className="relative text-invert text-center uppercase rounded-xl flex-col p-4 flex justify-center items-center h-[500px] w-full bg-gradient-to-r from-[#353E4E] to-[#010102]">
        <p className="absolute text-[#aaa] top-[25px] md:text-[15px]">Unsere Parcours-Sprüche Soforthilfe 😅</p>
        <div className="text-[35px] md:text-[45px]" id="box">
          <span className={cn('day', { 'poem-animate': isRunning })}>{activeWord}&nbsp;</span>
        </div>
        <div className="absolute bottom-4  w-full flex justify-center items-center">
          {!isRunning && (
            <div
              onClick={startSpin}
              className="transition-all text-[14px] animate-blink cursor-pointer rounded-md border border-[#aaa] py-4 w-[200px] text-center bg-[#459a48] text-invert hover:bg-invert hover:text-invert"
            >
              {isInit ? 'Start' : 'Nochmal'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PoemOMat
