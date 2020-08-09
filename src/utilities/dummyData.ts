const orgData: Array<any> = [
  ['Org1', '50', '1', 'Manage'],
  ['Org2', '400', '5', 'Manage'],
  ['Org3', '100', '2', 'Manage'],
  ['Org4', '200', '2', 'Manage'],
]

const vendorsData: Array<any> = [
  ['Joe James', 'Active', 'Edit'],
  ['John Walsh', 'In-active', 'Edit'],
  ['Bob Herm', 'Active', 'Edit'],
  ['James Houston', 'In-active', 'Edit'],
]

const employeeData: Array<any> = [
  ['Joe James', 'Active', 'Edit'],
  ['John Walsh', 'In-active', 'Edit'],
  ['Bob Herm', 'Active', 'Edit'],
  ['James Houston', 'In-active', 'Edit'],
]

const adminData: Array<any> = [
  ['Joe James', 'Active', 'Edit'],
  ['John Walsh', 'In-active', 'Edit'],
  ['Bob Herm', 'Active', 'Edit'],
  ['James Houston', 'In-active', 'Edit'],
]

const deviceData: Array<any> = [
  ['Org1', '50', 'Manage'],
  ['Org2', '400', 'Manage'],
  ['Org3', '100', 'Manage'],
  ['Org4', '200', 'Manage'],
]

const suData: Array<any> = [
  ['Org1', '50', 'Manage'],
  ['Org2', '400', 'Manage'],
  ['Org3', '100', 'Manage'],
  ['Org4', '200', 'Manage'],
]

// ******************* Admin Data *******************
// Employee Attendace
const adminEAData: Array<Array<string>> = [
  ['Entry', 'Entry', 'Entry', 'Positive', 'Entry'],
  ['Entry', 'Entry', 'Entry', 'COncerning', 'Entry'],
  ['Entry', 'Entry', 'Entry', 'Negative', 'Entry'],
  ['Entry', 'Entry', 'Entry', 'Positive', 'Entry'],
]
// Contractor Attendance
const adminCAData: Array<Array<string>> = [
  ['Entry', 'eMushrif', 'Entry', 'Positive', 'Entry'],
  ['Entry', 'BGP', 'Entry', 'COncerning', 'Entry'],
  ['Entry', 'Vendor', 'Entry', 'Negative', 'Entry'],
  ['Entry', 'Vendor', 'Entry', 'Positive', 'Entry'],
]
// Employee Management
const adminEMData: Array<Array<string>> = [
  ['Entry', 'Entry', 'Active', 'Edit'],
  ['Entry', 'Entry', 'Active', 'Edit'],
  ['Entry', 'Entry', 'Active', 'Edit'],
  ['Entry', 'Entry', 'Active', 'Edit'],
]
// Vendor Management
const adminVMData: Array<Array<string>> = [
  ['Entry', '70', 'Active', 'Contractors', 'Edit'],
  ['Entry', 'Entry', 'Active', 'Contractors', 'Edit'],
  ['Entry', 'Entry', 'Active', 'Contractors', 'Edit'],
  ['Entry', 'Entry', 'Active', 'Contractors', 'Edit'],
]

export {
  orgData,
  vendorsData,
  employeeData,
  adminData,
  deviceData,
  suData,
  // admin
  adminEAData,
  adminCAData,
  adminEMData,
  adminVMData,
}
