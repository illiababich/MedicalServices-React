import React from 'react'

function ProcedureDataMock() {
  return [
    {
      id: 11,
      name: 'TRH stimulation test',
      description: 'Assessing the degree of suppression in hyperthyroidism',
      price: 1.8,
    },
    {
      id: 12,
      name: 'MELISA',
      description: 'Memory Lymphocyte Immunostimulation Assay',
      price: 2.25,
    },
    {
      id: 21,
      name: 'LFTs',
      description: 'Liver function tests. Information about patient`s liver.',
      price: 2.65,
    },
    {
      id: 22,
      name: 'CBC',
      description: 'Complete blood count. Information about person`s blood',
      price: 2.85,
    },
  ]
}

export function ProviderDataMock() {
  const procedures = ProcedureDataMock()
  return [
    {
      id: 1,
      name: 'Santara Clinics',
      procedures: [procedures[0], procedures[1]],
    },
    {
      id: 2,
      name: ' InMedica clinic',
      procedures: [procedures[2], procedures[3]],
    },
  ]
}

export default ProcedureDataMock
