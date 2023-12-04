import React, { useContext } from 'react'
import ActionButton from '../../../components/ActionButton'
import {
  ActionButtonShape,
  ActionButtonType,
  ButtonColor,
  ButtonType,
  InputSize,
  InputType,
  Size,
} from '../../../constants/enums'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import {
  getFormattedCurrentDate,
  getFormattedDate,
} from '../../../utils/getFormattedCurrentDate'
import PatientsPageContext from '../contexts/PatientsPageContext'
import { User } from '../../../store/users/model'

interface PatientLastCheckupProps {
  patient: User
}

function PatientLastCheckup(props: PatientLastCheckupProps) {
  const { patient } = props
  const [editMode, setEditMode] = React.useState(false)

  const currentDate = getFormattedCurrentDate()
  const lastCheckupDate = getFormattedDate(patient.lastCheckupDate)

  const [checkupDate, setCheckupDate] = React.useState(lastCheckupDate)

  const context = useContext(PatientsPageContext)
  const setUser = context?.setUser

  const onSubmit = () => {
    const date = new Date(checkupDate)
    if (setUser) {
      setUser({
        id: patient.id,
        lastCheckupDate: date,
      })
    }
    setEditMode(!editMode)
  }

  return (
    <>
      {editMode ? (
        <div className='flex gap-8'>
          <Input
            type={InputType.DATE}
            inputSize={InputSize.SMALL}
            id='date'
            max={currentDate}
            onChange={(e) => setCheckupDate(e.target.value)}
            value={checkupDate}
            useHoverEffects
          />
          <Button
            size={Size.SMALL}
            type={ButtonType.BUTTON}
            color={ButtonColor.PRIMARY}
            onClick={onSubmit}
          >
            <p>Save</p>
          </Button>
        </div>
      ) : (
        <>
          <p className='font-bold text-lg'>{lastCheckupDate}</p>
          <ActionButton
            type={ActionButtonType.EDIT}
            shape={ActionButtonShape.ROUND}
            onClick={() => setEditMode(!editMode)}
          />
        </>
      )}
    </>
  )
}

export default PatientLastCheckup
