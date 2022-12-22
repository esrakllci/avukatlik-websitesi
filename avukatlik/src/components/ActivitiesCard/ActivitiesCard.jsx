import React from 'react'
import './ActivitiesCard.css'
import { Disclosure } from '@headlessui/react'

function ActivitiesCard({ question, answer }) {
  return (
    <Disclosure>
      {({ open }) => (
        <div>
          <Disclosure.Button className={`disclosure-button ${!open && 'border-b'}`}>
            <span>{question}</span>
          </Disclosure.Button>
          <Disclosure.Panel className="disclosure-panel">
            <span>{answer}</span>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default ActivitiesCard