import React, { useEffect } from 'react'
import Modal from '../../../components/Modal'
import {
  ButtonColor,
  ButtonType,
  InputSize,
  InputType,
  Size,
} from '../../../constants/enums'
import { useForm } from 'react-hook-form'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import ReactTextareaAutosize from 'react-textarea-autosize'
import { Procedure } from '../../../store/procedures/model'

type CreateProcedure =
  typeof import('../../../store/procedures/actions').createProcedure
type ModifyProcedure =
  typeof import('../../../store/procedures/actions').modifyProcedure
type DeleteProcedure =
  typeof import('../../../store/procedures/actions').deleteProcedure

interface ProcedureModalProps {
  procedure: Procedure | null
  isOpen: boolean
  onClose: () => void
  createProcedure: CreateProcedure
  modifyProcedure: ModifyProcedure
  deleteProcedure: DeleteProcedure
}

function ProcedureModal(props: ProcedureModalProps) {
  const {
    isOpen,
    onClose,
    createProcedure,
    modifyProcedure,
    deleteProcedure,
    procedure,
  } = props

  useEffect(() => {
    if (procedure) {
      setValue('procedureName', procedure.name)
      setValue('price', procedure.price)
      setValue('description', procedure.description)
    } else {
      setValue('procedureName', '')
      setValue('price', 0)
      setValue('description', '')
    }
  }, [procedure])

  const callback = () => {
    onClose()
    reset()
  }

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      procedureName: '',
      price: 0,
      description: '',
    },
  })

  const onSubmit = (data: any) => {
    if (procedure)
      modifyProcedure({
        id: procedure.id,
        procedure: data,
        callback: callback,
      })
    else createProcedure({ procedureData: data, callback: callback })
  }

  const onDelete = () => {
    if (procedure) deleteProcedure({ id: procedure?.id, callback: callback })
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      size={Size.MEDIUM}
    >
      <div className='flex justify-center flex-col'>
        <h2 className='flex flex-row text-3xl font-bold'>
          {procedure ? 'Modify a procedure' : 'Create a new procedure'}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex flex-col py-2'>
            <label
              className='text-lg'
              htmlFor='procedureName'
            >
              Name
            </label>
            <Input
              type={InputType.TEXT}
              inputSize={InputSize.MEDIUM}
              id='procedureName'
              useHoverEffects
              {...register('procedureName', {
                required: 'Required',
                maxLength: { value: 20, message: 'Max length is 20' },
              })}
            />
            {errors?.procedureName && (
              <div className='text-red'>
                {errors.procedureName.message?.toString()}
              </div>
            )}
          </div>
          <div className='flex flex-col py-2'>
            <label
              className='text-lg'
              htmlFor='price'
            >
              Price
            </label>
            <Input
              type={InputType.NUMBER}
              inputSize={InputSize.SMALL}
              step='0.01'
              id='price'
              useHoverEffects
              {...register('price', {
                required: 'Required',
                min: { value: 0, message: 'Minimum value is 0' },
                valueAsNumber: true,
              })}
            />
            {errors?.price && (
              <div className='text-red'>{errors.price.message?.toString()}</div>
            )}
          </div>
          <div className='flex flex-col py-2'>
            <label
              className='text-lg'
              htmlFor='description'
            >
              Description
            </label>
            <ReactTextareaAutosize
              className='resize-none w-11/12 border-2 border-gray-300 rounded-xl p-2'
              minRows={2}
              maxRows={4}
              {...register('description', {
                maxLength: 100,
                required: 'Required',
              })}
            />
            {errors?.description && (
              <div className='text-red'>
                {errors.description.message?.toString()}
              </div>
            )}
            {errors?.description?.type === 'maxLength' && (
              <div className='text-red'>Max length is 100</div>
            )}
          </div>
          <>
            <div className='flex gap-8 justify-center items-center w-full mt-5 pt-3'>
              {procedure ? (
                <Button
                  color={ButtonColor.CANCEL}
                  type={ButtonType.BUTTON}
                  size={Size.BIG}
                  onClick={() => {
                    onDelete()
                  }}
                >
                  <div>Delete</div>
                </Button>
              ) : null}
              <Button
                color={ButtonColor.CANCEL}
                type={ButtonType.BUTTON}
                size={Size.BIG}
                onClick={() => {
                  reset()
                  onClose()
                }}
              >
                <div>Cancel</div>
              </Button>
              <Button
                color={ButtonColor.PRIMARY}
                type={ButtonType.SUBMIT}
                size={Size.BIG}
              >
                <div>{procedure ? 'Modify' : 'Submit'}</div>
              </Button>
            </div>
          </>
        </form>
      </div>
    </Modal>
  )
}

export default ProcedureModal
