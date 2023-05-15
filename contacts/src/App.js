import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import contactList from './data'
import * as utils from './utils'
import { ContactInfo } from './ContactInfo'
import { ContactList } from './ContactList'

const groupedContacts = utils.groupBy(
  contactList.contacts, contact => contact.lastName[0]
)
const Contacts = Object.fromEntries(Object.entries(groupedContacts).sort())

export default function App() {
  const selectedContact = Contacts['A'][0]

  return (
    <div className="flex h-full">
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="relative z-0 flex flex-1 overflow-hidden">
          <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none lg:order-last">
            {/* Breadcrumb */}
            <nav className="flex items-start px-4 py-3 sm:px-6 lg:px-8 lg:hidden" aria-label="Breadcrumb">
              <a href="#" className="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
                <ChevronLeftIcon className="-ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                <span>Contacts</span>
              </a>
            </nav>
            <ContactInfo contact={selectedContact} />
          </main>
          <ContactList contacts={Contacts} />
        </div>
      </div>
    </div>
  )
}
