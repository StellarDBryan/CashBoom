import {HeroUIProvider, ToastProvider} from '@heroui/react'
import { SessionProvider } from 'next-auth/react'
import { UserStatsProvider } from './UserStatsContext'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <HeroUIProvider>
        <ToastProvider toastOffset={72} placement='top-right' />
        <UserStatsProvider>
          {children}
        </UserStatsProvider>
      </HeroUIProvider>
    </SessionProvider>
  )
}