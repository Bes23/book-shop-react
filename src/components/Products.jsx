import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { publicRequest } from '../requestMethod'
import ReactPaginate from 'react-paginate'

const Products = ({ categories }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          categories ? `/products?category=${categories}` : `/products?new=true`
        )
        setProducts(res.data)
      } catch (error) {}
    }
    getProducts()
  }, [categories])

  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [itemOffset, setItemOffset] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 6

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(products.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(products.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, products])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length
    setCurrentPage(event.selected)
    setItemOffset(newOffset)
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [currentItems])

  useEffect(() => {
    setCurrentPage(0)
    setItemOffset(0)
  }, [categories])

  return (
    <div className='place-self-center px-5'>
      {!categories && (
        <h1 className='text-[1.5rem] text-center text-red py-5'>
          Newest Books
        </h1>
      )}
      <div className='grid sm:grid-cols-3 gap-5'>
        {currentItems.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
      {pageCount > 1 && (
        <ReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
          forcePage={currentPage}
        />
      )}
    </div>
  )
}

export default Products
