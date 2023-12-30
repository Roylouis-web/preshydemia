import type { Metadata } from 'next'
import Search from '../componenents/Search'
import Filters from '../componenents/Filters'

export const metadata: Metadata = {
    title: 'Preshydemia',
    description: 'An online learning platform',
}

const DishesLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='grow'>
            <Search />
            <Filters />
            {children}
        </div>
    )
}

export default DishesLayout