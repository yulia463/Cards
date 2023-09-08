import { FC, InputHTMLAttributes } from 'react'

import { SearchIcon } from '../icons/searchIcon.tsx'

import { TextField } from 'components/ui'

type SearchInputProps = {
  errorMessage?: string
  label: string
} & InputHTMLAttributes<HTMLInputElement>
export const SearchInput: FC<SearchInputProps> = ({ errorMessage, label, ...inputProps }) => {
  // const [search, setSearch] = useState(false)
  // const onClickIconHandler = () => {
  //   setSearch(prev => !prev)
  // }

  return (
    <div>
      <TextField
        label={label}
        errorMessage={errorMessage}
        // onClickIcon={onClickIconHandler}
        icon={<SearchIcon />}
        type={'text'}
        {...inputProps}
      />
    </div>
  )
}
