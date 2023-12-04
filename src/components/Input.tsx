import React, { InputHTMLAttributes, forwardRef, Ref } from 'react'
import clsx from 'clsx'
import { InputType, InputSize } from '../constants/enums'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputType
  inputSize: InputSize
  useHoverEffects?: true
}

const Input = forwardRef(function Input(
  props: InputProps,
  ref?: Ref<HTMLInputElement>,
) {
  const {
    type,
    inputSize,
    value,
    name,
    onChange,
    useHoverEffects,
    min,
    max,
    step,
    placeholder,
  } = props

  const inputClass = clsx(
    'w-56 h-10  border-2 border-gray-300 h-10  rounded-xl ',
    {
      ['w-56']: inputSize === InputSize.SMALL,
      ['w-80 ']: inputSize === InputSize.MEDIUM,
      ['cursor-pointer hover:border-gray-400 focus:border-gray-400']:
        useHoverEffects,
    },
  )

  const chooseInputType = (type: InputType) => {
    switch (type) {
      case InputType.DATE:
        return {
          min: min,
          max: max,
        }

      case InputType.NUMBER:
        return {
          min: min,
          max: max,
          step: step,
          placeholder: placeholder,
        }
      case InputType.TEXT:
        return {
          placeholder: placeholder,
        }
    }
  }
  return (
    <input
      type={type}
      name={name}
      className={inputClass}
      onChange={onChange}
      value={value}
      ref={ref}
      {...chooseInputType(type)}
    />
  )
})
export default Input
