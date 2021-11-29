import React from 'react'
import Link from 'next/link'

const Header = (props) => {
    return (
        <div className="category">
            <h2>Header</h2>
            <ul>
                {
                props.categories?.length > 0 && 
                (props.categories || []).map(category => (
                    <li key={category} className="category-box">
                        <Link href={`/quan-ao`}> 
                            <a>{category}</a>
                        </Link>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Header