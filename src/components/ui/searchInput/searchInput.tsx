import { FC, InputHTMLAttributes } from 'react'

import { SearchIcon } from '../icons/searchIcon.tsx'
import { TextField } from '../textField/textField.tsx'

type SearchInputProps = {
  onCancelSearch: () => void
} & InputHTMLAttributes<HTMLInputElement>
export const SearchInput: FC<SearchInputProps> = ({ onCancelSearch, ...inputProps }) => {
  return (
    <div>
      <TextField placeholder={'Search'} icon={<SearchIcon />} type={'text'} {...inputProps} />
    </div>
  )
}
