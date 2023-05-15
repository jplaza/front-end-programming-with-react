import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export function ContactList({ contacts }) {
  return (
    <aside className="hidden w-96 flex-shrink-0 border-r border-gray-200 lg:order-first lg:flex lg:flex-col">
      <div className="px-6 pb-4 pt-6">
        <h2 className="text-lg font-medium text-gray-900">Contacts</h2>
        <p className="hidden mt-1 text-sm text-gray-600">Search Contacts of 3,018 employees</p>
        <form className="mt-6 flex gap-x-4" action="#">
          <div className="min-w-0 flex-1">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="search"
                name="search"
                id="search"
                className="block w-full rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                placeholder="Search"
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
      <nav className="min-h-0 flex-1 overflow-y-auto" aria-label="Contacts">
        {Object.keys(contacts).map((letter) => (
          <ContactListGroup key={letter} group={letter} contacts={contacts[letter]} />
        ))}
      </nav>
    </aside>
  );
}

function ContactListGroup({group, contacts}) {
  return (
    <div key={group} className="relative">
      <div className="sticky top-0 z-10 border-b border-t border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500">
        <h3>{group}</h3>
      </div>
      <ul role="list" className="relative z-0 divide-y divide-gray-200">
        {contacts.map((contact) => <ContactListItem key={contact.id} {...contact} />)}
      </ul>
    </div>
  )
}

function ContactListItem({image, firstName, lastName, email}) {
  return (
    <li>
      <div className="relative flex items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:bg-gray-50">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={image} alt="" />
        </div>
        <div className="min-w-0 flex-1">
          <a href="#" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm font-medium text-gray-900">{firstName} {lastName}</p>
            <p className="truncate text-sm text-gray-500">{email}</p>
          </a>
        </div>
      </div>
    </li>
  )
}
