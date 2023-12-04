import React, { useEffect, useState } from 'react'
import PageTitle from '../../../components/PageTitle'
import { Procedure, Provider } from '../../../store/procedures/model'
import ProcedureTable from './ProcedureTable'
import Button from '../../../components/Button'
import { ButtonColor, ButtonType, Role, Size } from '../../../constants/enums'
import ProcedureModal from './ProcedureModalIndex'
import { DecodeJWTToken } from '../../../utils/decodeJWTToken'

interface ProceduresPageProps {
  providers: Provider[]
  token: string
  getProceduresFetch: () => void
}

function ProceduresPage(props: ProceduresPageProps) {
  const { providers, token, getProceduresFetch } = props
  const [isAddProcedureModalOpen, setIsAddProcedureModalOpen] = useState(false)
  const [procedureInfo, setProcedureInfo] = useState<null | Procedure>(null)
  const userRoles: Array<string> = DecodeJWTToken(token)

  useEffect(() => {
    getProceduresFetch()
  }, [])

  return (
    <div>
      <PageTitle title='Available Procedures' />
      {userRoles.includes(Role.SERVICE_PROVIDER) && (
        <div className='pl-32'>
          <Button
            color={ButtonColor.PRIMARY}
            type={ButtonType.BUTTON}
            size={Size.BIG}
            onClick={() => {
              setProcedureInfo(null)
              setIsAddProcedureModalOpen(true)
            }}
          >
            <p>Add new</p>
          </Button>
          <ProcedureModal
            procedure={procedureInfo}
            isOpen={isAddProcedureModalOpen}
            onClose={() => {
              setIsAddProcedureModalOpen(false)
              setProcedureInfo(null)
            }}
          />
        </div>
      )}
      {providers
        .filter((provider) => provider.procedures.length > 0)
        .map((provider) => (
          <div key={provider.id}>
            <h2 className='pl-32 mt-20 text-2xl font-bold'>{provider.name}</h2>
            <ProcedureTable
              procedures={provider.procedures}
              onClick={(procedure) => {
                setIsAddProcedureModalOpen(true)
                setProcedureInfo(procedure)
              }}
            />
          </div>
        ))}
    </div>
  )
}

export default ProceduresPage
