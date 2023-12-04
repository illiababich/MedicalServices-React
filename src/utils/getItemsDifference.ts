import { Role } from '../store/userRoles/model'
import { MultiSelectOption } from '../pages/patientDashboard/appointmentModal/MultiSelect'

export function getRolesDifference(roles: Role[], userRoles: Role[]) {
  return roles.filter(
    (role) => !userRoles.some((userRole) => userRole.id === role.id),
  )
}

export function getMultiselectItemsDifference(
  items: readonly MultiSelectOption[],
  selectedItems: readonly MultiSelectOption[],
) {
  return items.filter(
    (item) =>
      !selectedItems.some(
        (selectedItem) => selectedItem!.value === item!.value,
      ),
  )
}
