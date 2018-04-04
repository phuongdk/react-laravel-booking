import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import loadingIcon from './loading.gif'

export class Pagination extends Component {
  getUrl (page = 1) {
    let url = `/${this.props.to}?page=${page}`
    if (this.props.search !== '') {
      url += `&search=${this.props.search}`
    }
    return url
  }

  render () {
    const data = this.props.data || null
    if (data && data.data.length > 0 && data.last_page > 1) {
      const range = +this.props.range || 2
      const currentPage = data.current_page
      const lastPage = data.last_page
      let pageLinks = []

      // Trang dau`
      pageLinks.push(
        <li key={0} className={currentPage === 1 ? 'disabled' : ''}>
          <Link className='page-link' to={this.getUrl()}>First</Link>
        </li>
      )

      // Trang giua
      for (let i = currentPage - range; i <= lastPage; i++) {
        if (i > 0 && i >= currentPage - range) {
          if (currentPage === i) {
            pageLinks.push(
              <li key={i} className='active'>
                <span className='page-link'>{i}</span>
              </li>
            )
          } else {
            pageLinks.push(
              <li key={i}>
                <Link className='page-link' to={this.getUrl(i)}>{i}</Link>
              </li>
            )
          }
        }

        //  Khi trai va phai dat. du so trang
        if (i === currentPage + range) {
          break
        }
      }

      // Trang cuoi
      pageLinks.push(
        <li key={lastPage + 1} className={currentPage === lastPage ? 'disabled' : ''}>
          <Link className='page-link' to={this.getUrl(lastPage)}>Last</Link>
        </li>
      )
      return (
        <ul className='pagination'>
          {pageLinks}
        </ul>
      )
    }
    return null
  }
}

export class LoadingIndicator extends Component {
  render () {
    const style = {
      width: this.props.width || 64,
      height: this.props.height || 64,
      display: this.props.show === true ? 'inline-block' : 'none'
    }
    return <img className='loading-icon' src={loadingIcon} alt='LoadingIndicator' style={style} />
  }
}
