import React, { useState, useEffect } from 'react'
import Modal from '../../../components/Modal'
import {
  Size,
  InputType,
  InputSize,
  ButtonType,
  ButtonColor,
} from '../../../constants/enums'
import TimeslotsPreviewTable from './TimeslotsPreviewTable'
import { PreviewTimeslotInterface } from './PreviewTimeslot'
import Section from '../../../components/Section'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { useForm, SubmitHandler } from 'react-hook-form'
import { getFormattedCurrentDate } from '../../../utils/getFormattedCurrentDate'
import { createPreviewTimeslots } from '../utils/createPreviewTimeslots'
import { filterTimeslots } from '../utils/filterTimeslots'
import { Timeslot } from '../../../store/timeslots/model'
import { ServiceProvider } from '../../../store/serviceProviders/model'
import clsx from 'clsx'

export interface AddTimeslotsProps {
  timeslots: Record<string, PreviewTimeslotInterface[]>
}

interface AddTimeslotsModalProps {
  isOpen: boolean
  onClose: () => void
  createTimeslots: (payload: Timeslot[]) => void
  serviceProviders: ServiceProvider[]
  error: string | null
}

export interface FormInputs {
  provider: string
  date: string
  startTime: string
  endTime: string
  appointmentInterval: string
}

function AddTimeslotsModal(props: AddTimeslotsModalProps) {
  const { isOpen, onClose, createTimeslots, serviceProviders, error } = props
  const [previewTimeslots, setPreviewTimeslots] = useState<AddTimeslotsProps>({
    timeslots: {},
  })
  const [formSubmitted, setFormSubmitted] = useState<boolean>()
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    if (!previewTimeslots.timeslots) return
    createTimeslots(
      filterTimeslots(previewTimeslots, data.date, Number(data.provider)),
    )
    reset()
    setPreviewTimeslots({ timeslots: {} })
    setFormSubmitted(true)
  }

  const currentDate = getFormattedCurrentDate()
  const maxDate = `${
    parseInt(currentDate.substring(0, 4)) + 1
  }${currentDate.substring(4)}`

  useEffect(() => {
    const subscription = watch((value) => {
      if (
        !Object.values(value).includes('') &&
        Number(value['appointmentInterval']) > 4
      ) {
        setPreviewTimeslots({
          timeslots: createPreviewTimeslots(
            new Date(`${value['date']} ${value['startTime']}`),
            new Date(`${value['date']} ${value['endTime']}`),
            Number(value['appointmentInterval']),
          ),
        })
      } else {
        setPreviewTimeslots({ timeslots: {} })
        setFormSubmitted(false)
      }
    })
    return () => subscription.unsubscribe()
  }, [watch])

  const changeTimeslotStatus = (startTime: string) => {
    if (Object.keys(previewTimeslots.timeslots).length > 0) {
      const timeslot = previewTimeslots.timeslots[
        startTime.substring(0, startTime.indexOf(':'))
      ].find((appointment) => appointment.startTime === startTime)
      if (timeslot !== undefined) {
        timeslot.disabled = !timeslot.disabled
        setPreviewTimeslots({
          ...previewTimeslots,
        })
      }
    }
  }

  return (
    <div className='flex justify-center w-full '>
      <Modal
        open={isOpen}
        onClose={onClose}
        size={Size.BIG}
      >
        <div>
          <div className=' mb-6'>
            <h1 className={`text-3xl font-bold`}>Add timeslots</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-5 mt-2 '>
                <div className='flex flex-col '>
                  <label className='text-lg'>Provider</label>
                  <select
                    className={
                      'w-56 h-10  border-2 border-gray-300 h-10  rounded-xl cursor-pointer hover:border-gray-400 focus:border-gray-400'
                    }
                    {...register('provider', { required: 'Required' })}
                  >
                    <option
                      hidden
                      value=''
                    >
                      Choose Provider
                    </option>

                    {serviceProviders.map((provider) => {
                      return (
                        <option
                          key={provider.id}
                          value={provider.id}
                        >
                          {provider.name}
                        </option>
                      )
                    })}
                  </select>
                  {errors?.provider && (
                    <div className='text-red'>
                      {errors.provider.message?.toString()}
                    </div>
                  )}
                </div>

                <div className='flex flex-col'>
                  <label
                    className='text-lg'
                    htmlFor='date'
                  >
                    Date
                  </label>
                  <Input
                    type={InputType.DATE}
                    inputSize={InputSize.SMALL}
                    id='date'
                    min={currentDate}
                    max={maxDate}
                    useHoverEffects
                    {...register('date', {
                      required: 'Required',
                    })}
                  />
                  {errors?.date && (
                    <div className='text-red'>
                      {errors.date.message?.toString()}
                    </div>
                  )}
                </div>
                <div className='flex flex-col'>
                  <label
                    className='text-lg'
                    htmlFor='startTime'
                  >
                    Start time
                  </label>
                  <Input
                    type={InputType.TIME}
                    inputSize={InputSize.SMALL}
                    useHoverEffects
                    id='startTime'
                    {...register('startTime', { required: 'Required' })}
                  />
                  {errors?.startTime && (
                    <div className='text-red'>
                      {errors.startTime.message?.toString()}
                    </div>
                  )}
                </div>
                <div className='flex flex-col'>
                  <label
                    className='text-lg'
                    htmlFor='endTime'
                  >
                    End time
                  </label>
                  <Input
                    type={InputType.TIME}
                    inputSize={InputSize.SMALL}
                    useHoverEffects
                    id='endTime'
                    {...register('endTime', { required: 'Required' })}
                  />
                  {errors?.endTime && (
                    <div className='text-red'>
                      {errors.endTime.message?.toString()}
                    </div>
                  )}
                </div>
                <div className='flex flex-col'>
                  <label
                    className='text-lg'
                    htmlFor='appointment_interval'
                  >
                    Appointment duration(min)
                  </label>

                  <Input
                    type={InputType.NUMBER}
                    inputSize={InputSize.SMALL}
                    max='60'
                    step='5'
                    min='0'
                    id='appointment_interval'
                    {...register('appointmentInterval', {
                      required: { value: true, message: 'Required' },
                      min: { value: 5, message: 'Minimum value is 5' },
                    })}
                  />
                  {errors?.appointmentInterval && (
                    <div className='text-red'>
                      {errors.appointmentInterval.message?.toString()}
                    </div>
                  )}
                </div>
              </div>

              <div className='flex flex-col  w-8/12  '>
                <div className='    h-full '>
                  <Section title='Timeslots' />
                  <TimeslotsPreviewTable
                    timeslots={previewTimeslots.timeslots}
                    changeTimeslotStatus={changeTimeslotStatus}
                  />
                </div>
              </div>
            </div>
            {formSubmitted && (
              <div
                className={clsx(' text-center font-bold text-xl', {
                  ['text-green-700']: !error,
                  ['text-red']: error,
                })}
              >
                {error
                  ? 'Something went wrong'
                  : 'Schedule submitted successfully'}
              </div>
            )}
            <div className='flex gap-8 inline-flex justify-center ml-3 items-center w-full mt-3 pt-3 '>
              <Button
                type={ButtonType.BUTTON}
                color={ButtonColor.CANCEL}
                size={Size.BIG}
                onClick={() => {
                  reset()
                  onClose()
                }}
              >
                <div className='font-bold'>Cancel</div>
              </Button>
              <Button
                type={ButtonType.SUBMIT}
                color={ButtonColor.PRIMARY}
                size={Size.BIG}
              >
                <div className='font-bold'>Submit</div>
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default AddTimeslotsModal
