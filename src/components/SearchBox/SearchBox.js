import React, { useState } from 'react'
import styles from './SearchBox.module.css'

const SearchBox = () => {
  const [keyword, setKeyword] = useState()
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type='text'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className={styles.input}
          placeholder='Search'
        />
      </form>
    </div>
  )
}

export default SearchBox
