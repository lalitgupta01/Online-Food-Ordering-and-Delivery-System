import React from 'react'

import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'

function Nav({ Toggle }) {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
            <i className="navbar-brand bi bi-justify-left fs-4"
                onClick={Toggle}>
            </i>

        </nav>)
}
export default Nav;