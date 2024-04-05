import { EMAIL } from '@/config/contact'
import Link from 'next/link'

export const Email = ({ icon = true }: { icon?: boolean }) => <span className='inline-block'><Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>{icon && <span className='inline-block translate-y-[2px] ml-1'>📧</span>}</span>