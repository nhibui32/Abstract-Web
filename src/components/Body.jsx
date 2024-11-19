import React from 'react'
import Branches from '../assets/images/using.png'
import ManageAccount from '../assets/images/manage-account.png'
import ManageOrganizations from '../assets/images/manage-organizations.png'
import ManageBilling from '../assets/images/billing.png'
import Authenticate from '../assets/images/autheticate.png'
import Support from '../assets/images/technical-support-48.png'

export default function Body() {
  return (
    <div className='flex h-auto justify-center items-center text-2xl p-6 gap-6'>
      <div className=''>
        <div className='flex items-center gap-3'>
          <img src={Branches} alt="Branches icon" />
          <div>
            <p>Using Abstract</p>
            <p>Abstract lets you manage, version, and document your designs in one place.</p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <img src={ManageAccount} alt="Branches icon" />
          <div>
            <p>Manage your account</p>
            <p>Configure your account settings, such as your email, profile details, and password.</p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <img src={ManageOrganizations} alt="Branches icon" />
          <div>
            <p>Manage organizations, teams, and projects</p>
            <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
          </div>
        </div>
      </div>

      <div>
        <div className='flex items-center gap-3'>
          <img src={ManageBilling} alt="Branches icon" />
          <div>
            <p>Manage billing</p>
            <p>Change subscriptions and payment details.</p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <img src={Authenticate} alt="Branches icon" />
          <div>
            <p>Authenticate to Abstract</p>
            <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <img src={Support} alt="Branches icon" />
          <div>
            <p>Abstract support</p>
            <p>Get in touch with a human.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
