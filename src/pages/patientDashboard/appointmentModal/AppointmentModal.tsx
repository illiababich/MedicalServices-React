import React, { useState, useContext, useEffect } from 'react'
import { Size, ButtonType, ButtonColor } from '../../../constants/enums'
import MultiSelect from './MultiSelect'
import Modal from '../../../components/Modal'
import Section from '../../../components/Section'
import Button from '../../../components/Button'
import { TimeslotCard } from '../../timeslots/components/TimeslotCard'
import TimeslotsModal from './TimeslotsModal'
import { Timeslot } from '../../../store/timeslots/model'
import { TimeslotHeader } from '../../timeslots/components/TimeslotHeader'
import AppointmentModalContext from '../contexts/AppointmentModalContext'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Procedure } from '../../../store/procedures/model'
import { formatTextWithPrice, countTotalProceduresPrice } from '../utils/price'
import ReactTextareaAutosize from 'react-textarea-autosize'
import PatientDashboardContext from '../contexts/PatientDashboardContext'
import clsx from 'clsx'
import { Appointment } from '../../../store/userAppointments/model'

interface AppointmentModalProps {
  appointment?: Appointment
  isOpen: boolean
  onClose: () => void
}

interface AppointmentFormInput {
  timeslot: Timeslot | null
  procedures: Procedure[]
  comments: string
}

function AppointmentModal(props: AppointmentModalProps) {
  const { isOpen, onClose, appointment } = props
  const [isTimeslotModalOpen, setIsTimeslotModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState<boolean>()

  const context = useContext(PatientDashboardContext)
  const providers = context?.providers
  const getProceduresFetch = context?.getProceduresFetch
  const setUserAppointment = context?.setUserAppointment
  const patchUserAppointment = context?.patchUserAppointment
  const error = context?.error

  useEffect(() => {
    if (getProceduresFetch) getProceduresFetch()
  }, [])

  const [selectedTimeslot, setSelectedTimeslot] =
    React.useState<Timeslot | null>(null)
  const appointmentModalContext = {
    selectedTimeslot: selectedTimeslot,
    setSelectedTimeslot: setSelectedTimeslot,
  }

  const {
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    trigger,
    watch,
    register,
    formState: { errors },
  } = useForm<AppointmentFormInput>({
    defaultValues: {
      timeslot: appointment ? appointment.timeslot : null,
      procedures: appointment ? appointment.procedures : [],
      comments: appointment ? appointment.comment : '',
    },
  })

  const watchProcedures: Procedure[] = watch('procedures', [])

  const getProceduresOfProvider = (providerId: number | undefined) => {
    return (
      providers?.find((provider) => provider.id === providerId)?.procedures ??
      []
    )
  }

  const [selectItems, setSelectItems] = useState<Procedure[]>(
    appointment
      ? getProceduresOfProvider(appointment.timeslot.serviceProviderId)
      : [],
  )

  const onSubmit: SubmitHandler<AppointmentFormInput> = (data) => {
    if (!data.timeslot) return
    if (!appointment) {
      setUserAppointment!({
        timeslotId: data.timeslot.id!,
        comment: data.comments,
        procedures: data.procedures,
      })
      reset()
    } else
      patchUserAppointment!({
        id: appointment.id,
        timeslotId: data.timeslot.id!,
        comment: data.comments,
        procedures: data.procedures,
      })
    setFormSubmitted(true)
  }

  const isSelectedTimeslot = (timeslot: Timeslot | null) => {
    return timeslot !== null || 'Time selection is required'
  }

  const isSelectedProcedures = (procedures: Procedure[]) => {
    return procedures.length > 0 || 'Procedure selection is required'
  }

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        onClose()
        setFormSubmitted(false)
      }}
      size={Size.BIG}
    >
      <div className='flex justify-center flex-col'>
        <h2 className='flex flex-row text-3xl font-bold'>
          {appointment
            ? 'Modify an appointment'
            : 'Register for an appointment'}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='w-full flex'>
            <div className='w-3/6'>
              <Section title='Time' />
              <div className='flex py-4 justify-evenly items-center'>
                <div className='flex flex-col'>
                  <AppointmentModalContext.Provider
                    value={appointmentModalContext}
                  >
                    <Controller
                      name='timeslot'
                      control={control}
                      rules={{ validate: isSelectedTimeslot }}
                      render={({ field }) => (
                        <div className='flex flex-col justify-center'>
                          {field.value !== null ? (
                            <>
                              <TimeslotHeader
                                date={field.value.startTimeDate!}
                              />
                              <TimeslotCard timeslot={field.value} />
                            </>
                          ) : (
                            <p className='font-italic'>No time selected</p>
                          )}
                        </div>
                      )}
                    />
                    <TimeslotsModal
                      isOpen={isTimeslotModalOpen}
                      onClose={() => {
                        const timeslot = getValues('timeslot')
                        if (
                          timeslot?.serviceProviderId !=
                          selectedTimeslot?.serviceProviderId
                        ) {
                          setValue('procedures', [])
                        }
                        setValue('timeslot', selectedTimeslot)
                        trigger('timeslot')
                        setSelectItems(
                          getProceduresOfProvider(
                            selectedTimeslot?.serviceProviderId,
                          ),
                        )
                        setIsTimeslotModalOpen(false)
                      }}
                    />
                  </AppointmentModalContext.Provider>
                </div>
                <Button
                  type={ButtonType.BUTTON}
                  color={ButtonColor.PRIMARY}
                  onClick={() => setIsTimeslotModalOpen(true)}
                  size={Size.BIG}
                >
                  <p className='font-bold'>Select a time</p>
                </Button>
              </div>
              {errors?.timeslot && (
                <div className='text-red flex justify-center'>
                  {errors.timeslot.message?.toString()}
                </div>
              )}
            </div>
            <div className='w-3/6'>
              <Section title='Procedures' />
              <Controller
                name='procedures'
                control={control}
                rules={{ validate: isSelectedProcedures }}
                render={({ field }) => (
                  <MultiSelect
                    items={selectItems.map((procedure) => ({
                      value: procedure.id,
                      label: formatTextWithPrice(
                        procedure.name,
                        procedure.price,
                      ),
                    }))}
                    selectedItems={field.value.map((procedure: Procedure) => ({
                      value: procedure.id,
                      label: formatTextWithPrice(
                        procedure.name,
                        procedure.price,
                      ),
                    }))}
                    onDelete={(item) => {
                      field.onChange(
                        field.value.filter(
                          (procedure: Procedure) => procedure.id !== item.value,
                        ),
                      )
                    }}
                    onSelect={(item) => {
                      if (
                        !field.value.some(
                          (procedure: Procedure) => procedure.id === item.value,
                        )
                      ) {
                        field.onChange([
                          ...field.value,
                          selectItems.find(
                            (procedure: Procedure) =>
                              procedure.id === item.value,
                          ),
                        ])
                      }
                    }}
                  />
                )}
              />
              {errors?.procedures && (
                <div className='text-red flex justify-center'>
                  {errors.procedures.message?.toString()}
                </div>
              )}
              <div className='flex justify-center'>
                <p>
                  {formatTextWithPrice(
                    'Total:',
                    countTotalProceduresPrice(watchProcedures),
                  )}
                </p>
              </div>
            </div>
          </div>
          <Section title='Comments' />
          <div className='flex flex-col justify-center items-center'>
            <ReactTextareaAutosize
              className='resize-none w-11/12 border-2 border-gray-300 rounded-xl p-2'
              minRows={2}
              maxRows={6}
              {...register('comments', { maxLength: 200 })}
            />
            {errors?.comments && errors?.comments.type === 'maxLength' && (
              <div className='text-red flex justify-center'>
                Comments should not exceed 200 characters
              </div>
            )}
          </div>
          {formSubmitted && (
            <div
              className={clsx(' text-center font-bold text-xl py-2', {
                ['text-green-700']: !error,
                ['text-red']: error,
              })}
            >
              {error && 'Something went wrong'}
              {!error && !appointment && 'Appointment registered successfully'}
              {!error && appointment && 'Appointment modified successfully'}
            </div>
          )}
          <div className='flex justify-center py-4 items-center gap-4'>
            <Button
              type={ButtonType.BUTTON}
              color={ButtonColor.CANCEL}
              onClick={() => {
                if (!appointment) {
                  reset()
                  setSelectedTimeslot(null)
                  setSelectItems([])
                }
                onClose()
              }}
              size={Size.BIG}
            >
              <p className='font-bold'>Cancel</p>
            </Button>
            <Button
              type={ButtonType.SUBMIT}
              color={ButtonColor.PRIMARY}
              size={Size.BIG}
            >
              <p className='font-bold'>{appointment ? 'Modify' : 'Register'}</p>
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default AppointmentModal
