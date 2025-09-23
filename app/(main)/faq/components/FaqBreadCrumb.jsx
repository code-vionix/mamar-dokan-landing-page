import React from 'react'
import Link from "next/link";

            

const FaqBreadCrumb = () => {
  return (
     <div className="container mx-auto px-6 py-4 text-sm">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="text-gray-700 hover:text-amber-600 inline-flex items-center"
              >
                হোম
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-amber-700">সাধারণ জিজ্ঞাসা</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
  )
}

export default FaqBreadCrumb