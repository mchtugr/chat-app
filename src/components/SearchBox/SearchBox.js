import React, { useState, useContext } from 'react'
import UserContext from '../../context/userContext'
import styles from './SearchBox.module.css'
import { GrClose } from 'react-icons/gr'
import ThemeContext from '../../context/themeContext'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const { onSearch } = useContext(UserContext)
  const { theme } = useContext(ThemeContext)

  const handleSearch = (e) => {
    setKeyword(e.target.value)
    // clearTimeout(timer)
    // var timer = setTimeout(onSearch(keyword), 500)
    onSearch(e.target.value)
  }

  const handleClear = () => {
    setKeyword('')
    onSearch('')
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          value={keyword}
          onChange={handleSearch}
          className={`${styles.input} ${theme === 'dark' && styles.input_dark}`}
          placeholder='Search'
        />
        {keyword.length > 0 && (
          <div className={styles.delete_btn} onClick={handleClear}>
            <GrClose />
          </div>
        )}
      </form>
    </div>
  )
}

export default SearchBox
