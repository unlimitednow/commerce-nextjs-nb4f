import { Fragment, useState } from 'react'
import {
  Disclosure,
  Menu,
  RadioGroup,
  Switch,
  Transition,
} from '@headlessui/react'
import { Navbar, Footer } from '@components/common'
import { Trash } from '@components/icons'
import { Orders } from '@components/orders'

const user = {
  name: 'Lisa Marie',
  email: 'lisamarie@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const subNavigation = [
  { name: 'Profile', href: '#', icon: 'UserCircleIcon', current: false },
  { name: 'Account', href: '#', icon: 'CogIcon', current: false },
  { name: 'Password', href: '#', icon: 'KeyIcon', current: false },
  { name: 'Notifications', href: '#', icon: 'BellIcon', current: false },
  { name: 'Plan & Billing', href: '#', icon: 'CreditCardIcon', current: true },
  { name: 'Integrations', href: '#', icon: Trash, current: false },
]
const plans = [
  {
    name: 'Startup',
    priceMonthly: 29,
    priceYearly: 290,
    limit: 'Up to 5 active job postings',
  },
  {
    name: 'Business',
    priceMonthly: 99,
    priceYearly: 990,
    limit: 'Up to 25 active job postings',
  },
  {
    name: 'Enterprise',
    priceMonthly: 249,
    priceYearly: 2490,
    limit: 'Unlimited active job postings',
  },
]
const payments = [
  {
    id: 1,
    date: '1/1/2020',
    datetime: '2020-01-01',
    description: 'Business Plan - Annual Billing',
    amount: 'CA$109.00',
    href: '#',
  },
  // More payments...
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedPlan, setSelectedPlan] = useState(plans[1])
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true)

  return (
    <>
      <div className="h-full">
        <Navbar />

        <main className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
              <nav className="space-y-1">
                {subNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-50 text-orange-600 hover:bg-white'
                        : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                      'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon aria-hidden="true" />
                    <span className="truncate">{item.name}</span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Payment details */}

            <Orders />
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}
