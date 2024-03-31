import { cn } from '@/lib/utils'
import type { ReactElement, ReactNode } from 'react'
import { HiOutlineInformationCircle } from "react-icons/hi2";

const TypeToEmoji = {
  default: '💡',
  error: '🚫',
  info: <HiOutlineInformationCircle className="mt-1" />,
  warning: '⚠️'
}

type CalloutType = keyof typeof TypeToEmoji

const classes: Record<CalloutType, string> = {
  default: cn(
    // 'border-orange-100 bg-orange-50 text-orange-800', 
    // 'dark:border-orange-400/30 dark:bg-orange-400/20 dark:text-orange-300',
    'border-orange-400/30 bg-orange-400/20 text-orange-300'
  ),
  error: cn(
    // 'border-red-200 bg-red-100 text-red-900',
    // 'dark:border-red-200/30 dark:bg-red-900/30 dark:text-red-200',
    'border-red-200/30 bg-red-900/30 text-red-200'
  ),
  info: cn(
    // 'border-blue-200 bg-blue-100 text-blue-900', 
    // 'dark:border-blue-200/30 dark:bg-blue-900/30 dark:text-blue-200',
    'border-blue-200/30 bg-blue-900/30 text-blue-200'
  ),
  warning: cn(
    'border-yellow-100 bg-yellow-50 text-yellow-900', 
    // 'dark:border-yellow-200/30 dark:bg-yellow-700/30 dark:text-yellow-200',
    'border-yellow-200/30 bg-yellow-700/30 text-yellow-200'
  )
}

type CalloutProps = {
  type?: CalloutType
  emoji?: string | ReactNode
  children: ReactNode
}

export default function Callout({
  children,
  type = 'default',
  emoji = TypeToEmoji[type]
}: CalloutProps): ReactElement {
  return (
    <div
      className={cn(
        'nextra-callout overflow-x-auto mt-6 flex rounded-lg border py-2 pr-4',
        'contrast-more:border-current contrast-more:dark:border-current [&>p:mx-0]',
        classes[type]
      )}
    >
      <div
        className="select-none text-xl px-2"
        style={{
          fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        }}
      >
        {emoji}
      </div>
      <div className="w-full min-w-0 leading-7">{children}</div>
    </div>
  )
}
