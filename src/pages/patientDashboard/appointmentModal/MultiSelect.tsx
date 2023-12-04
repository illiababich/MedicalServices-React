import React, { useState } from 'react'
import { RoundButtonType } from '../../../constants/enums'
import RoundButton from '../../../components/RoundButton'
import { getMultiselectItemsDifference } from '../../../utils/getItemsDifference'
import Select from 'react-select'

export interface MultiSelectOption {
  readonly label: string
  readonly value: number
}

interface MultiSelectProps {
  items: readonly MultiSelectOption[]
  selectedItems: readonly MultiSelectOption[]
  onDelete: (item: any) => void
  onSelect: (item: any) => void
}

function MultiSelect(props: MultiSelectProps) {
  const { items, selectedItems, onSelect, onDelete } = props
  const [selectedValue, setSelectedValue] = useState<MultiSelectOption | null>(
    null,
  )

  return (
    <div className='flex justify-center'>
      <table className='table-auto w-11/12'>
        <tbody>
          {selectedItems.map((item) => (
            <tr
              key={item!.value}
              className='h-10'
            >
              <td className='w-4/5'>
                <div className='rounded-lg border border-gray-300 w-full'>
                  <span className='text-sm font-roman px-3 py-2'>
                    {item!.label}
                  </span>
                </div>
              </td>
              <td className='flex justify-center'>
                <RoundButton
                  type={RoundButtonType.DELETE}
                  onClick={() => onDelete(item)}
                  scale={0.5}
                />
              </td>
            </tr>
          ))}
          <tr className='h-10'>
            <td className='w-3/4'>
              <Select
                isDisabled={
                  items.length === 0 || selectedItems.length === items.length
                }
                styles={{
                  control: (provided: any) => ({
                    ...provided,
                    borderRadius: '0.5rem',
                    height: '1rem',
                    paddingLeft: '0.3rem',
                  }),
                }}
                className='w-full text-sm'
                value={selectedValue}
                onChange={(value: any) => {
                  const item = items.find(
                    (item) => item!.value === value?.value,
                  )
                  if (item) {
                    setSelectedValue(item)
                  }
                }}
                options={getMultiselectItemsDifference(items, selectedItems)}
              />
            </td>
            <td className='flex justify-center'>
              <RoundButton
                disabled={
                  items.length === 0 ||
                  selectedValue === null ||
                  selectedItems.length === items.length
                }
                type={RoundButtonType.ADD}
                onClick={() => {
                  onSelect(selectedValue)
                  setSelectedValue(null)
                }}
                scale={0.5}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MultiSelect
