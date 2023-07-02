'use client'

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'
import { LanguageType } from '../../types/i18n.types'
// import Link from 'next/link'

type LanguageOption = {
  id: number
  name: string
  displayName: string
}
const languageOptions: LanguageOption[] = [
  { id: 1, name: 'en', displayName: 'English' },
  { id: 2, name: 'zh-CN', displayName: '中文' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageList({ lng }) {
  const [selected, setSelected] = useState<LanguageOption>(
    lng == LanguageType.English ? languageOptions[0] : languageOptions[1]
  )
  const router = useRouter()

  const handleLanChange = (lan: LanguageOption) => {
    setSelected(lan)
    router.push(`/${lan.name}`)
  }

  return (
    <Listbox
      value={selected}
      onChange={(lan: LanguageOption) => handleLanChange(lan)}
    >
      {({ open }) => (
        <>
          <div className={clsx('relative w-32')}>
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <span className="block truncate">{selected.displayName}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {languageOptions.map((languageOption) => (
                  <Listbox.Option
                    key={languageOption.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={languageOption}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {languageOption.displayName}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
