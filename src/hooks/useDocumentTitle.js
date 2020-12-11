import {useEffect} from 'react'

function useDocumentTitle(count) {
  useEffect(() => {
    let i = 0

    while( i < 1000000000 ) i++

    document.title = `Count ${count}`
  }, [count])
}

export default useDocumentTitle
