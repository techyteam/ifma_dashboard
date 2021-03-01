import { Link } from '@chakra-ui/react'
import React from 'react'


const Breadcrumbs = ({ currentPage, routes }) => {
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>{currentPage}</h2>
          <ol>
            {
              Object.entries(routes).map(([text, link], index) => (
                <li key={index}>
                  <Link href={link}>{text}</Link>
                </li>
              ))
            }
            <li>{currentPage}</li>
          </ol>
        </div>

      </div>
      {/* <!-- End Breadcrumbs --> */}
    </section>
  )
}

export default Breadcrumbs;

