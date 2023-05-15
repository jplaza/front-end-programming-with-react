import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

export function ContactInfo({ contact: {
  phone, email, age, birthDate, address, company, ...contact
}
}) {
  const fields = {
    Phone: phone,
    Email: email,
    Age: age,
    Birthday: birthDate,
    Address: `${address.address}, ${address.city} ${address.state}`,
    Company: company.name
  };

  return (
    <article>
      {/* Profile header */}
      <div>
        <div className='h-32 w-full object-cover lg:h-36 bg-teal-600' />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                src={contact.image}
                alt="" />
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                <h1 className="truncate text-2xl font-bold text-gray-900">{contact.firstName} {contact.lastName}</h1>
              </div>
              <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button
                  type="button"
                  className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <PencilIcon className="-ml-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                  Edit
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center gap-x-1.5 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-red-600 hover:bg-gray-50"
                >
                  <TrashIcon className="-ml-0.5 h-5 w-5 text-white" aria-hidden="true" />
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
            <h1 className="truncate text-2xl font-bold text-gray-900">{contact.firstName} {contact.lastName}</h1>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          {Object.keys(fields).map((field) => (
            <div key={field} className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">{field}</dt>
              <dd className="mt-1 text-sm text-gray-900">{fields[field]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
