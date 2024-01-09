import { Projects } from '@/components/Projects/Projects'
import { Transition } from '@/components/Transition/Transition'

export default function ProjectsPage() {
  return (
    <div className='min-h-screen'>
        <Transition />
        <Projects />
    </div>
  )
}
